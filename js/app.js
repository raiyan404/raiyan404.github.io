/**
 * Light & Dust — Street Photography Archive
 * Vanilla JavaScript Engine
 * Author & Photographer: Md. Raiyan Islam
 */

(function () {
  'use strict';

  // Verify datasets
  const PHOTOS = window.PHOTOS || [];
  const COLLECTIONS = window.COLLECTIONS || [];

  if (!PHOTOS.length) {
    console.error('Light & Dust: No photographs loaded.');
    return;
  }

  // Application State
  const state = {
    activeCollection: 'all',
    searchQuery: '',
    viewMode: 'masonry', // 'masonry' | 'grid'
    visibleCount: 24,
    batchSize: 24,
    selectedPhoto: null,
    heroIndex: 0,
    heroAutoPlaying: true,
    heroInterval: null,
    zoomLevel: 1,
    showInfo: true,
    isFullscreen: false,
    toastTimeout: null,
  };

  // Curate Hero Highlight Photos
  const heroPhotos = (function () {
    const featured = PHOTOS.filter((p) => p.featured);
    return featured.length > 0 ? featured.slice(0, 8) : PHOTOS.slice(0, 8);
  })();

  // DOM Elements
  const elements = {
    header: document.getElementById('site-header'),
    mobileDrawer: document.getElementById('mobile-drawer'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    mobileDrawerCloseBtn: document.getElementById('mobile-drawer-close'),
    
    // Hero
    heroBgImg: document.getElementById('hero-bg-img'),
    heroCounter: document.getElementById('hero-counter'),
    heroPhotoTitle: document.getElementById('hero-photo-title'),
    heroExifShutter: document.getElementById('hero-exif-shutter'),
    heroExifAperture: document.getElementById('hero-exif-aperture'),
    heroExifIso: document.getElementById('hero-exif-iso'),
    heroExifLens: document.getElementById('hero-exif-lens'),
    heroPrevBtn: document.getElementById('hero-prev-btn'),
    heroNextBtn: document.getElementById('hero-next-btn'),
    heroPlayPauseBtn: document.getElementById('hero-play-pause-btn'),
    heroViewFrameBtn: document.getElementById('hero-view-frame-btn'),
    heroExploreBtn: document.getElementById('hero-explore-btn'),
    
    // Filmstrip
    filmstripScroll: document.getElementById('filmstrip-scroll'),

    // Collections Showcase
    collectionsGrid: document.getElementById('collections-grid'),

    // Gallery
    galleryContainer: document.getElementById('gallery-container'),
    galleryTitle: document.getElementById('gallery-title'),
    galleryCount: document.getElementById('gallery-count'),
    searchInput: document.getElementById('search-input'),
    searchClearBtn: document.getElementById('search-clear-btn'),
    collectionPills: document.getElementById('collection-pills'),
    masonryToggleBtn: document.getElementById('view-toggle-masonry'),
    gridToggleBtn: document.getElementById('view-toggle-grid'),
    loadMoreContainer: document.getElementById('load-more-container'),

    // Modals
    lightboxDialog: document.getElementById('lightbox-dialog'),
    lightboxTitle: document.getElementById('lightbox-title'),
    lightboxCounter: document.getElementById('lightbox-counter'),
    lightboxBadge: document.getElementById('lightbox-badge'),
    lightboxImg: document.getElementById('lightbox-img'),
    lightboxImgScaler: document.getElementById('lightbox-img-scaler'),
    lightboxPrevBtn: document.getElementById('lightbox-prev-btn'),
    lightboxNextBtn: document.getElementById('lightbox-next-btn'),
    lightboxCloseBtn: document.getElementById('lightbox-close-btn'),
    lightboxZoomBtn: document.getElementById('lightbox-zoom-btn'),
    lightboxInfoBtn: document.getElementById('lightbox-info-btn'),
    lightboxFullscreenBtn: document.getElementById('lightbox-fullscreen-btn'),
    lightboxSidebar: document.getElementById('lightbox-sidebar'),
    lightboxStripThumbs: document.getElementById('lightbox-strip-thumbs'),
    lightboxFrameNumber: document.getElementById('lightbox-frame-number'),

    // Lightbox EXIF fields
    lbCollectionTitle: document.getElementById('lb-collection-title'),
    lbPhotoTitle: document.getElementById('lb-photo-title'),
    lbShutter: document.getElementById('lb-shutter'),
    lbAperture: document.getElementById('lb-aperture'),
    lbIso: document.getElementById('lb-iso'),
    lbLens: document.getElementById('lb-lens'),
    lbCameraModel: document.getElementById('lb-camera-model'),
    lbDate: document.getElementById('lb-date'),

    // Contact Modal
    contactDialog: document.getElementById('contact-dialog'),
    contactForm: document.getElementById('contact-form'),
    contactFormSuccess: document.getElementById('contact-form-success'),
    contactCloseBtn: document.getElementById('contact-close-btn'),
    contactSuccessCloseBtn: document.getElementById('contact-success-close-btn'),

    // License Modal
    licenseDialog: document.getElementById('license-dialog'),
    licenseCloseBtn: document.getElementById('license-close-btn'),
    licenseUnderstandBtn: document.getElementById('license-understand-btn'),

    // Toast
    toastAlert: document.getElementById('toast-alert'),
    toastText: document.getElementById('toast-text'),

    // Footer
    footerYear: document.getElementById('footer-year'),
    footerTotalPhotos: document.getElementById('footer-total-photos'),
    footerCollectionsList: document.getElementById('footer-collections-list'),
    scrollToTopBtn: document.getElementById('scroll-to-top-btn'),
  };

  // =========================================================================
  // Anti-Theft Image Protection & Toast System
  // =========================================================================
  function showProtectionToast(message) {
    if (!elements.toastAlert) return;
    elements.toastText.textContent =
      message || 'Protected Frame • © Md. Raiyan Islam. Downloading is disabled.';
    elements.toastAlert.classList.add('show');

    if (state.toastTimeout) clearTimeout(state.toastTimeout);
    state.toastTimeout = setTimeout(() => {
      elements.toastAlert.classList.remove('show');
    }, 3200);
  }

  // Prevent right-click across all images and protected wrappers
  document.addEventListener('contextmenu', function (e) {
    const target = e.target;
    if (
      target.tagName === 'IMG' ||
      target.closest('.card-img-stage') ||
      target.closest('.hero-bg-stage') ||
      target.closest('#lightbox-dialog') ||
      target.closest('[data-protected]')
    ) {
      e.preventDefault();
      showProtectionToast();
    }
  });

  // Prevent dragging of any image
  document.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  });

  // =========================================================================
  // Header Scroll & Navigation (Throttled with requestAnimationFrame for 120fps)
  // =========================================================================
  let scrollTicking = false;
  window.addEventListener('scroll', function () {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        if (elements.header) {
          elements.header.classList.toggle('scrolled', window.scrollY > 30);
        }
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  // Mobile Drawer Toggle
  if (elements.mobileMenuBtn && elements.mobileDrawer) {
    elements.mobileMenuBtn.addEventListener('click', () => {
      elements.mobileDrawer.classList.toggle('hidden');
    });
  }
  if (elements.mobileDrawerCloseBtn && elements.mobileDrawer) {
    elements.mobileDrawerCloseBtn.addEventListener('click', () => {
      elements.mobileDrawer.classList.add('hidden');
    });
  }

  // =========================================================================
  // Hero Section
  // =========================================================================
  function renderHero() {
    const photo = heroPhotos[state.heroIndex] || heroPhotos[0];
    if (!photo) return;

    elements.heroBgImg.src = photo.displayUrl;
    elements.heroBgImg.alt = photo.title;

    elements.heroCounter.textContent = `${String(state.heroIndex + 1).padStart(2, '0')} / ${String(heroPhotos.length).padStart(2, '0')}`;
    elements.heroPhotoTitle.textContent = photo.title;
    elements.heroExifShutter.textContent = photo.camera.shutter;
    elements.heroExifAperture.textContent = photo.camera.aperture;
    elements.heroExifIso.textContent = photo.camera.iso;
    elements.heroExifLens.textContent = photo.camera.focalLength;
  }

  function nextHero() {
    state.heroIndex = (state.heroIndex + 1) % heroPhotos.length;
    renderHero();
  }

  function prevHero() {
    state.heroIndex = (state.heroIndex - 1 + heroPhotos.length) % heroPhotos.length;
    renderHero();
  }

  function startHeroAutoPlay() {
    stopHeroAutoPlay();
    state.heroInterval = setInterval(nextHero, 6000);
    state.heroAutoPlaying = true;
    updateHeroPlayIcon();
  }

  function stopHeroAutoPlay() {
    if (state.heroInterval) {
      clearInterval(state.heroInterval);
      state.heroInterval = null;
    }
    state.heroAutoPlaying = false;
    updateHeroPlayIcon();
  }

  function updateHeroPlayIcon() {
    if (!elements.heroPlayPauseBtn) return;
    elements.heroPlayPauseBtn.innerHTML = state.heroAutoPlaying
      ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>'
      : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
  }

  if (elements.heroNextBtn) elements.heroNextBtn.addEventListener('click', nextHero);
  if (elements.heroPrevBtn) elements.heroPrevBtn.addEventListener('click', prevHero);
  if (elements.heroPlayPauseBtn) {
    elements.heroPlayPauseBtn.addEventListener('click', () => {
      if (state.heroAutoPlaying) stopHeroAutoPlay();
      else startHeroAutoPlay();
    });
  }
  if (elements.heroViewFrameBtn) {
    elements.heroViewFrameBtn.addEventListener('click', () => {
      openLightbox(heroPhotos[state.heroIndex]);
    });
  }
  if (elements.heroExploreBtn) {
    elements.heroExploreBtn.addEventListener('click', () => {
      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // =========================================================================
  // 35mm Negative Filmstrip (Continuous Auto-Scroll)
  // =========================================================================
  let autoScrollAnimId = null;
  let lastAutoScrollTimestamp = 0;
  let isFilmstripInteracting = false;
  let filmstripResumeTimeout = null;
  let isPointerDragging = false;
  let dragStartX = 0;
  let dragScrollLeft = 0;
  let hasPointerDragged = false;
  const FILMSTRIP_SPEED_PPS = 30; // 30 pixels per second: calm, unhurried auto-scroll

  function renderFilmstrip() {
    if (!elements.filmstripScroll) return;
    const stripPhotos = PHOTOS.slice(0, 24);

    const renderCard = (photo, idx) => `
      <div class="filmstrip-card" data-photo-id="${photo.id}">
        <div class="filmstrip-thumb-wrap">
          <img src="${photo.thumbUrl}" alt="${photo.title}" loading="lazy" draggable="false" />
        </div>
        <div class="filmstrip-meta-strip">
          <span style="color: var(--film-accent); font-weight: 500;">#${String(idx + 1).padStart(2, '0')}</span>
          <span class="filmstrip-meta-title">${photo.title}</span>
          <span style="color: var(--paper-500); font-size: 0.6rem;">${photo.camera.shutter}</span>
        </div>
      </div>
    `;

    // Render 2 identical sets side by side for seamless infinite wrapping
    const setHtml = stripPhotos.map((photo, idx) => renderCard(photo, idx)).join('');
    elements.filmstripScroll.innerHTML = setHtml + setHtml;

    // Click inspection (delegated)
    elements.filmstripScroll.onclick = (e) => {
      if (hasPointerDragged) return; // Prevent click if user was dragging/swiping
      const card = e.target.closest('.filmstrip-card');
      if (!card) return;
      const pid = card.getAttribute('data-photo-id');
      const p = PHOTOS.find((item) => item.id === pid);
      if (p) openLightbox(p);
    };

    // Desktop Mouse Drag-to-Scroll
    elements.filmstripScroll.onmousedown = (e) => {
      if (e.button !== 0) return;
      isPointerDragging = true;
      hasPointerDragged = false;
      isFilmstripInteracting = true;
      dragStartX = e.pageX - elements.filmstripScroll.offsetLeft;
      dragScrollLeft = elements.filmstripScroll.scrollLeft;
      if (filmstripResumeTimeout) clearTimeout(filmstripResumeTimeout);
    };

    window.addEventListener('mousemove', (e) => {
      if (!isPointerDragging || !elements.filmstripScroll) return;
      const x = e.pageX - elements.filmstripScroll.offsetLeft;
      const walk = x - dragStartX;
      if (Math.abs(walk) > 4) {
        hasPointerDragged = true;
      }
      elements.filmstripScroll.scrollLeft = dragScrollLeft - walk;
    });

    window.addEventListener('mouseup', () => {
      if (!isPointerDragging) return;
      isPointerDragging = false;
      if (filmstripResumeTimeout) clearTimeout(filmstripResumeTimeout);
      filmstripResumeTimeout = setTimeout(() => {
        isFilmstripInteracting = false;
        hasPointerDragged = false;
      }, 1500);
    });

    // Touch Handling (Mobile)
    elements.filmstripScroll.addEventListener(
      'touchstart',
      () => {
        isFilmstripInteracting = true;
        hasPointerDragged = false;
        if (filmstripResumeTimeout) clearTimeout(filmstripResumeTimeout);
      },
      { passive: true }
    );

    elements.filmstripScroll.addEventListener(
      'touchmove',
      () => {
        hasPointerDragged = true;
      },
      { passive: true }
    );

    elements.filmstripScroll.addEventListener(
      'touchend',
      () => {
        if (filmstripResumeTimeout) clearTimeout(filmstripResumeTimeout);
        filmstripResumeTimeout = setTimeout(() => {
          isFilmstripInteracting = false;
          hasPointerDragged = false;
        }, 1500);
      },
      { passive: true }
    );

    // Trackpad / Wheel Handling (PC)
    elements.filmstripScroll.addEventListener(
      'wheel',
      () => {
        isFilmstripInteracting = true;
        if (filmstripResumeTimeout) clearTimeout(filmstripResumeTimeout);
        filmstripResumeTimeout = setTimeout(() => {
          isFilmstripInteracting = false;
        }, 1500);
      },
      { passive: true }
    );

    // Start Auto-Scroll Animation Loop
    if (!autoScrollAnimId) {
      startFilmstripAutoScroll();
    }
  }

  function startFilmstripAutoScroll() {
    function step(timestamp) {
      if (!lastAutoScrollTimestamp) lastAutoScrollTimestamp = timestamp;
      const dt = Math.min((timestamp - lastAutoScrollTimestamp) / 1000, 0.1);
      lastAutoScrollTimestamp = timestamp;

      const scroller = elements.filmstripScroll;
      if (scroller && !isFilmstripInteracting && !state.selectedPhoto) {
        const halfWidth = scroller.scrollWidth / 2;
        if (halfWidth > 0) {
          scroller.scrollLeft += FILMSTRIP_SPEED_PPS * dt;
          if (scroller.scrollLeft >= halfWidth) {
            scroller.scrollLeft -= halfWidth;
          }
        }
      }

      autoScrollAnimId = requestAnimationFrame(step);
    }

    autoScrollAnimId = requestAnimationFrame(step);
  }

  // =========================================================================
  // Collections Showcase
  // =========================================================================
  function renderCollectionsShowcase() {
    if (!elements.collectionsGrid) return;

    elements.collectionsGrid.innerHTML = COLLECTIONS.map((col, idx) => {
      const cover =
        PHOTOS.find((p) => p.id === col.coverPhotoId) ||
        PHOTOS.find((p) => p.collection === col.id) ||
        PHOTOS[0];
      const count = PHOTOS.filter((p) => p.collection === col.id).length;

      return `
        <div class="collection-card" data-col-id="${col.id}">
          <div class="collection-cover-wrap">
            <img src="${cover.thumbUrl}" alt="${col.title}" loading="lazy" draggable="false" />
            <div class="collection-overlay"></div>
            <div class="collection-num-tag">0${idx + 1}</div>
            <div class="collection-count-tag">${count} PHOTOS</div>
          </div>
          <div class="collection-card-body">
            <h3 class="collection-card-title">${col.title}</h3>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--film-accent);">View →</span>
          </div>
        </div>
      `;
    }).join('');

    elements.collectionsGrid.querySelectorAll('.collection-card').forEach((card) => {
      card.addEventListener('click', () => {
        const colId = card.getAttribute('data-col-id');
        setCollection(colId);
        document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  // =========================================================================
  // Main Gallery Filtering & Rendering
  // =========================================================================
  function getFilteredPhotos() {
    return PHOTOS.filter((photo) => {
      if (state.activeCollection !== 'all' && photo.collection !== state.activeCollection) {
        return false;
      }
      if (state.searchQuery.trim()) {
        const query = state.searchQuery.toLowerCase().trim();
        const matchesTitle = photo.title.toLowerCase().includes(query);
        const matchesTags = photo.tags.some((t) => t.toLowerCase().includes(query));
        const matchesCamera = `${photo.camera.shutter} ${photo.camera.aperture} ${photo.camera.iso}`
          .toLowerCase()
          .includes(query);
        if (!matchesTitle && !matchesTags && !matchesCamera) return false;
      }
      return true;
    });
  }

  function renderCollectionPills() {
    if (!elements.collectionPills) return;

    const allPill = `
      <button class="filter-pill-btn ${state.activeCollection === 'all' ? 'active' : ''}" data-col="all">
        All (${PHOTOS.length})
      </button>
    `;

    const pills = COLLECTIONS.map((c) => {
      const count = PHOTOS.filter((p) => p.collection === c.id).length;
      return `
        <button class="filter-pill-btn ${state.activeCollection === c.id ? 'active' : ''}" data-col="${c.id}">
          ${c.title} (${count})
        </button>
      `;
    }).join('');

    elements.collectionPills.innerHTML = allPill + pills;

    elements.collectionPills.querySelectorAll('.filter-pill-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const col = btn.getAttribute('data-col');
        setCollection(col);
      });
    });
  }

  function setCollection(colId) {
    state.activeCollection = colId;
    state.visibleCount = state.batchSize;
    renderCollectionPills();
    renderGallery();

    // Update Header Active State
    document.querySelectorAll('[data-nav-col]').forEach((item) => {
      if (item.getAttribute('data-nav-col') === colId) item.classList.add('active');
      else item.classList.remove('active');
    });
  }

  function createCardHtml(photo, index) {
    const loadingAttr = index < 6 ? 'eager' : 'lazy';
    return `
      <div class="gallery-card" data-photo-id="${photo.id}">
        <div class="card-img-stage" style="aspect-ratio: ${photo.aspectRatio}; width: 100%;">
          <img
            src="${photo.thumbUrl}"
            alt="${photo.title}"
            loading="${loadingAttr}"
            decoding="async"
            draggable="false"
            width="${photo.width}"
            height="${photo.height}"
          />
          <div class="card-click-shield"></div>
          <div class="card-hover-overlay"></div>
          <div class="card-hover-meta">
            <p style="font-family: var(--font-sans); font-size: 0.95rem; color: var(--paper-100); font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${photo.title}</p>
            <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--paper-400); margin-top: 0.2rem; display: flex; gap: 0.5rem;">
              <span>${photo.camera.shutter}</span>
              <span>•</span>
              <span>${photo.camera.aperture}</span>
              <span>•</span>
              <span>${photo.camera.iso}</span>
            </div>
          </div>
        </div>
        <div class="card-bottom-bar">
          <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: var(--paper-300);">${photo.title}</span>
          <span style="color: var(--paper-500); font-size: 0.65rem; flex-shrink: 0; margin-left: 0.5rem;">${photo.camera.focalLength}</span>
        </div>
      </div>
    `;
  }

  function updateLoadMoreUI(filtered) {
    if (!elements.loadMoreContainer) return;
    if (state.visibleCount < filtered.length) {
      const remaining = filtered.length - state.visibleCount;
      elements.loadMoreContainer.innerHTML = `
        <button id="load-more-btn" class="load-more-btn">
          Load More Frames (${remaining} remaining)
        </button>
      `;
      document.getElementById('load-more-btn')?.addEventListener('click', appendNextBatch);
    } else if (filtered.length > 0) {
      elements.loadMoreContainer.innerHTML = `
        <span style="color: var(--paper-500);">Showing all ${filtered.length} frames</span>
      `;
    } else {
      elements.loadMoreContainer.innerHTML = '';
    }
  }

  function appendNextBatch() {
    const filtered = getFilteredPhotos();
    if (state.visibleCount >= filtered.length) return;

    const nextBatch = filtered.slice(state.visibleCount, state.visibleCount + state.batchSize);
    const startIndex = state.visibleCount;
    state.visibleCount += nextBatch.length;

    const fragment = nextBatch.map((p, i) => createCardHtml(p, startIndex + i)).join('');
    elements.galleryContainer.insertAdjacentHTML('beforeend', fragment);
    updateLoadMoreUI(filtered);
  }

  function renderGallery() {
    const filtered = getFilteredPhotos();
    state.visibleCount = Math.min(state.batchSize, filtered.length);

    // Update Header Text & Count
    const activeMeta = COLLECTIONS.find((c) => c.id === state.activeCollection);
    elements.galleryTitle.textContent = activeMeta ? activeMeta.title : 'All Photographs';
    elements.galleryCount.textContent = filtered.length;

    // View Container Class
    elements.galleryContainer.className =
      state.viewMode === 'masonry' ? 'gallery-masonry' : 'gallery-grid';

    if (filtered.length === 0) {
      elements.galleryContainer.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 4rem 1rem; text-align: center; border: 1px solid var(--border-subtle); border-radius: 0.75rem; background: rgba(13, 13, 18, 0.4);">
          <p style="font-family: var(--font-sans); font-size: 1.15rem; color: var(--paper-300);">No frames match this filter</p>
          <button id="empty-reset-btn" style="margin-top: 1rem; padding: 0.45rem 1.25rem; border-radius: 9999px; background: var(--film-accent); color: var(--bg-obsidian-950); font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; border: none; cursor: pointer;">Show All</button>
        </div>
      `;
      document.getElementById('empty-reset-btn')?.addEventListener('click', () => {
        state.searchQuery = '';
        if (elements.searchInput) elements.searchInput.value = '';
        setCollection('all');
      });
      elements.loadMoreContainer.innerHTML = '';
      return;
    }

    // Render Initial Batch
    const initialPhotos = filtered.slice(0, state.visibleCount);
    elements.galleryContainer.innerHTML = initialPhotos.map((p, i) => createCardHtml(p, i)).join('');
    updateLoadMoreUI(filtered);
  }

  // Delegated Click Handler on Gallery Container (Single listener for entire gallery)
  if (elements.galleryContainer) {
    elements.galleryContainer.addEventListener('click', (e) => {
      const card = e.target.closest('.gallery-card');
      if (card) {
        const pid = card.getAttribute('data-photo-id');
        const p = PHOTOS.find((item) => item.id === pid);
        if (p) openLightbox(p);
      }
    });
  }

  // Search Input Handler
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (elements.searchClearBtn) {
        elements.searchClearBtn.style.display = state.searchQuery ? 'block' : 'none';
      }
      renderGallery();
    });
  }

  if (elements.searchClearBtn) {
    elements.searchClearBtn.addEventListener('click', () => {
      state.searchQuery = '';
      if (elements.searchInput) elements.searchInput.value = '';
      elements.searchClearBtn.style.display = 'none';
      renderGallery();
    });
  }

  // View Mode Toggles
  if (elements.masonryToggleBtn && elements.gridToggleBtn) {
    elements.masonryToggleBtn.addEventListener('click', () => {
      if (state.viewMode === 'masonry') return;
      state.viewMode = 'masonry';
      elements.masonryToggleBtn.classList.add('active');
      elements.gridToggleBtn.classList.remove('active');
      renderGallery();
    });

    elements.gridToggleBtn.addEventListener('click', () => {
      if (state.viewMode === 'grid') return;
      state.viewMode = 'grid';
      elements.gridToggleBtn.classList.add('active');
      elements.masonryToggleBtn.classList.remove('active');
      renderGallery();
    });
  }

  // Infinite Scroll Sentinel with IntersectionObserver (Appends new items smoothly without reflow)
  const scrollSentinelObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        appendNextBatch();
      }
    },
    { rootMargin: '800px' }
  );
  if (elements.loadMoreContainer) {
    scrollSentinelObserver.observe(elements.loadMoreContainer);
  }

  // =========================================================================
  // Lightbox Modal
  // =========================================================================
  function updateLightboxInfoUI() {
    if (!elements.lightboxSidebar) return;
    if (state.showInfo) {
      elements.lightboxSidebar.classList.remove('is-hidden');
      if (elements.lightboxInfoBtn) {
        elements.lightboxInfoBtn.style.color = 'var(--film-accent)';
      }
    } else {
      elements.lightboxSidebar.classList.add('is-hidden');
      if (elements.lightboxInfoBtn) {
        elements.lightboxInfoBtn.style.color = 'var(--paper-300)';
      }
    }
  }

  function openLightbox(photo) {
    if (!elements.lightboxDialog || !photo) return;
    state.selectedPhoto = photo;
    state.zoomLevel = 1;

    // Mobile / Tablet: always start with photo fully visible (sidebar drawer closed)
    // Desktop: open sidebar by default if space permits
    state.showInfo = window.innerWidth >= 1024;
    updateLightboxInfoUI();
    updateLightboxUI();

    if (elements.filmstripScroll) {
      elements.filmstripScroll.classList.add('is-lightbox-paused');
    }

    if (!elements.lightboxDialog.open) {
      elements.lightboxDialog.showModal();
    }
  }

  function closeLightbox() {
    if (!elements.lightboxDialog) return;
    if (elements.lightboxDialog.open) {
      elements.lightboxDialog.close();
    }
    state.selectedPhoto = null;

    if (elements.filmstripScroll) {
      elements.filmstripScroll.classList.remove('is-lightbox-paused');
    }
  }

  function updateLightboxUI() {
    const photo = state.selectedPhoto;
    if (!photo) return;

    const allFiltered = getFilteredPhotos();
    const currentIndex = allFiltered.findIndex((p) => p.id === photo.id);
    const colMeta = COLLECTIONS.find((c) => c.id === photo.collection);

    elements.lightboxTitle.textContent = photo.title;
    elements.lightboxCounter.textContent = `#${String(currentIndex >= 0 ? currentIndex + 1 : 1).padStart(3, '0')} / ${allFiltered.length}`;
    elements.lightboxBadge.textContent = colMeta ? colMeta.title : 'Archive';

    elements.lightboxImg.src = photo.displayUrl;
    elements.lightboxImg.alt = photo.title;
    elements.lightboxImgScaler.style.transform = `scale(${state.zoomLevel})`;

    // EXIF Telemetry
    if (elements.lbCollectionTitle) elements.lbCollectionTitle.textContent = colMeta ? colMeta.title : '';
    if (elements.lbPhotoTitle) elements.lbPhotoTitle.textContent = photo.title;
    if (elements.lbShutter) elements.lbShutter.textContent = photo.camera.shutter;
    if (elements.lbAperture) elements.lbAperture.textContent = photo.camera.aperture;
    if (elements.lbIso) elements.lbIso.textContent = photo.camera.iso;
    if (elements.lbLens) elements.lbLens.textContent = photo.camera.focalLength;
    if (elements.lbCameraModel) elements.lbCameraModel.textContent = photo.camera.model;
    if (elements.lbDate) elements.lbDate.textContent = photo.camera.date;
    if (elements.lightboxFrameNumber) {
      elements.lightboxFrameNumber.textContent = `FRAME #${String(currentIndex >= 0 ? currentIndex + 1 : 1).padStart(3, '0')}`;
    }

    // Render Bottom Strip Scrubber
    if (elements.lightboxStripThumbs) {
      const start = Math.max(0, currentIndex - 2);
      const end = Math.min(allFiltered.length, currentIndex + 3);
      const slice = allFiltered.slice(start, end);

      elements.lightboxStripThumbs.innerHTML = slice
        .map(
          (p) => `
          <button class="lb-strip-thumb-btn ${p.id === photo.id ? 'active' : ''}" data-photo-id="${p.id}" style="width: 3.5rem; height: 2.25rem; overflow: hidden; border-radius: 3px; border: ${p.id === photo.id ? '2px solid var(--film-accent)' : '1px solid rgba(255,255,255,0.15)'}; background: none; padding: 0; cursor: pointer; opacity: ${p.id === photo.id ? '1' : '0.5'};">
            <img src="${p.thumbUrl}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover; pointer-events: none;" />
          </button>
        `
        )
        .join('');

      elements.lightboxStripThumbs.querySelectorAll('.lb-strip-thumb-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const pid = btn.getAttribute('data-photo-id');
          const p = PHOTOS.find((item) => item.id === pid);
          if (p) {
            state.selectedPhoto = p;
            state.zoomLevel = 1;
            updateLightboxUI();
          }
        });
      });
    }
  }

  function navigateLightbox(direction) {
    if (!state.selectedPhoto) return;
    const allFiltered = getFilteredPhotos();
    const currentIndex = allFiltered.findIndex((p) => p.id === state.selectedPhoto.id);
    if (currentIndex < 0) return;

    let nextIndex;
    if (direction === 'next') {
      nextIndex = currentIndex < allFiltered.length - 1 ? currentIndex + 1 : 0;
    } else {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : allFiltered.length - 1;
    }

    state.selectedPhoto = allFiltered[nextIndex];
    state.zoomLevel = 1;
    updateLightboxUI();
  }

  if (elements.lightboxPrevBtn) elements.lightboxPrevBtn.addEventListener('click', () => navigateLightbox('prev'));
  if (elements.lightboxNextBtn) elements.lightboxNextBtn.addEventListener('click', () => navigateLightbox('next'));
  if (elements.lightboxCloseBtn) elements.lightboxCloseBtn.addEventListener('click', closeLightbox);

  // Lightbox Zoom Click Toggle
  if (elements.lightboxZoomBtn) {
    elements.lightboxZoomBtn.addEventListener('click', () => {
      state.zoomLevel = state.zoomLevel === 1 ? 2 : state.zoomLevel === 2 ? 3 : 1;
      elements.lightboxImgScaler.style.transform = `scale(${state.zoomLevel})`;
    });
  }
  document.getElementById('lightbox-stage')?.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG' || e.target.classList.contains('lightbox-img-scaler') || e.target.id === 'lightbox-stage') {
      state.zoomLevel = state.zoomLevel === 1 ? 2 : state.zoomLevel === 2 ? 3 : 1;
      elements.lightboxImgScaler.style.transform = `scale(${state.zoomLevel})`;
    }
  });

  // Lightbox Info Sidebar Toggle
  if (elements.lightboxInfoBtn && elements.lightboxSidebar) {
    elements.lightboxInfoBtn.addEventListener('click', () => {
      state.showInfo = !state.showInfo;
      updateLightboxInfoUI();
    });
  }

  const sidebarCloseBtn = document.getElementById('lightbox-sidebar-close-btn');
  if (sidebarCloseBtn) {
    sidebarCloseBtn.addEventListener('click', () => {
      state.showInfo = false;
      updateLightboxInfoUI();
    });
  }

  // Touch Swipe Navigation for Mobile Lightbox
  let lbTouchStartX = 0;
  let lbTouchStartY = 0;
  if (elements.lightboxStage) {
    elements.lightboxStage.addEventListener(
      'touchstart',
      (e) => {
        if (e.touches.length === 1) {
          lbTouchStartX = e.touches[0].clientX;
          lbTouchStartY = e.touches[0].clientY;
        }
      },
      { passive: true }
    );

    elements.lightboxStage.addEventListener(
      'touchend',
      (e) => {
        if (e.changedTouches.length === 1) {
          const deltaX = e.changedTouches[0].clientX - lbTouchStartX;
          const deltaY = e.changedTouches[0].clientY - lbTouchStartY;
          if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
            if (deltaX < 0) {
              navigateLightbox('next');
            } else {
              navigateLightbox('prev');
            }
          }
        }
      },
      { passive: true }
    );
  }

  // Fullscreen Toggle
  if (elements.lightboxFullscreenBtn) {
    elements.lightboxFullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
        state.isFullscreen = true;
      } else {
        document.exitFullscreen().catch(() => {});
        state.isFullscreen = false;
      }
    });
  }

  // Keyboard Shortcuts for Lightbox
  window.addEventListener('keydown', (e) => {
    if (!elements.lightboxDialog || !elements.lightboxDialog.open) return;

    if (e.key === 'ArrowRight') navigateLightbox('next');
    else if (e.key === 'ArrowLeft') navigateLightbox('prev');
    else if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'z' || e.key === 'Z') {
      state.zoomLevel = state.zoomLevel === 1 ? 2 : state.zoomLevel === 2 ? 3 : 1;
      elements.lightboxImgScaler.style.transform = `scale(${state.zoomLevel})`;
    } else if (e.key === 'i' || e.key === 'I') {
      state.showInfo = !state.showInfo;
      updateLightboxInfoUI();
    }
  });

  // Modern Web Guidance: Light-dismiss fallback for dialogs without native `closedby`
  [elements.lightboxDialog, elements.contactDialog, elements.licenseDialog].forEach((dialog) => {
    if (!dialog) return;
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      dialog.addEventListener('click', (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;

        if (!isDialogContent) dialog.close();
      });
    }
  });

  // =========================================================================
  // Contact Modal (FormSubmit Integration)
  // =========================================================================
  function openContactModal() {
    if (!elements.contactDialog) return;
    if (!elements.contactDialog.open) {
      elements.contactDialog.showModal();
      if (elements.contactFormSuccess) elements.contactFormSuccess.style.display = 'none';
      if (elements.contactForm) elements.contactForm.style.display = 'block';
    }
  }

  function closeContactModal() {
    if (!elements.contactDialog) return;
    if (elements.contactDialog.open) elements.contactDialog.close();
  }

  document.querySelectorAll('[data-open-contact]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      elements.mobileDrawer?.classList.add('hidden');
      openContactModal();
    });
  });

  if (elements.contactCloseBtn) elements.contactCloseBtn.addEventListener('click', closeContactModal);
  if (elements.contactSuccessCloseBtn) elements.contactSuccessCloseBtn.addEventListener('click', closeContactModal);

  if (elements.contactForm) {
    elements.contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const submitBtn = elements.contactForm.querySelector('button[type="submit"]');
      const origText = submitBtn ? submitBtn.innerHTML : 'Send';
      if (submitBtn) {
        submitBtn.innerHTML = 'Sending...';
        submitBtn.disabled = true;
      }

      const formData = new FormData(elements.contactForm);
      const dataObj = Object.fromEntries(formData.entries());

      try {
        const response = await fetch('https://formsubmit.co/ajax/mdraiyanislam944@proton.me', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(dataObj),
        });

        if (response.ok) {
          elements.contactForm.reset();
          elements.contactForm.style.display = 'none';
          if (elements.contactFormSuccess) elements.contactFormSuccess.style.display = 'block';
        } else {
          elements.contactForm.submit();
        }
      } catch (err) {
        // Fallback display
        elements.contactForm.style.display = 'none';
        if (elements.contactFormSuccess) elements.contactFormSuccess.style.display = 'block';
      } finally {
        if (submitBtn) {
          submitBtn.innerHTML = origText;
          submitBtn.disabled = false;
        }
      }
    });
  }

  // =========================================================================
  // License & Copyright Modal
  // =========================================================================
  function openLicenseModal() {
    if (!elements.licenseDialog) return;
    if (!elements.licenseDialog.open) elements.licenseDialog.showModal();
  }

  function closeLicenseModal() {
    if (!elements.licenseDialog) return;
    if (elements.licenseDialog.open) elements.licenseDialog.close();
  }

  document.querySelectorAll('[data-open-license]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      elements.mobileDrawer?.classList.add('hidden');
      openLicenseModal();
    });
  });

  if (elements.licenseCloseBtn) elements.licenseCloseBtn.addEventListener('click', closeLicenseModal);
  if (elements.licenseUnderstandBtn) elements.licenseUnderstandBtn.addEventListener('click', closeLicenseModal);

  // Scroll to Top
  if (elements.scrollToTopBtn) {
    elements.scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // =========================================================================
  // Footer Collections Links
  // =========================================================================
  if (elements.footerCollectionsList) {
    elements.footerCollectionsList.innerHTML = COLLECTIONS.map((c, i) => `
      <button class="nav-link-btn" style="text-align: left; padding: 0.2rem 0;" data-footer-col="${c.id}">
        0${i + 1}. ${c.title}
      </button>
    `).join('');

    elements.footerCollectionsList.querySelectorAll('[data-footer-col]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const col = btn.getAttribute('data-footer-col');
        setCollection(col);
        document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  if (elements.footerYear) elements.footerYear.textContent = new Date().getFullYear();
  if (elements.footerTotalPhotos) elements.footerTotalPhotos.textContent = PHOTOS.length;
  const mobileAllPhotosBtn = document.querySelector('#mobile-drawer [data-nav-col="all"]');
  if (mobileAllPhotosBtn) mobileAllPhotosBtn.textContent = `All Photographs (${PHOTOS.length})`;

  // Header Dropdown Collections Clicks
  document.querySelectorAll('[data-nav-col]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const col = btn.getAttribute('data-nav-col');
      setCollection(col);
      elements.mobileDrawer?.classList.add('hidden');
      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // URL Hash Handler (e.g. #photo-042 or #collection-skies-and-light)
  function handleUrlHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('collection-')) {
      const col = hash.replace('collection-', '');
      setCollection(col);
    } else if (hash.startsWith('photo-')) {
      const p = PHOTOS.find((item) => item.id === hash);
      if (p) openLightbox(p);
    }
  }

  // Brand Home Link
  const brandHomeLink = document.getElementById('brand-home-link');
  if (brandHomeLink) {
    brandHomeLink.addEventListener('click', (e) => {
      e.preventDefault();
      setCollection('all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile Year
  const mobileYear = document.getElementById('mobile-year');
  if (mobileYear) mobileYear.textContent = new Date().getFullYear();

  // =========================================================================
  // Initialize Application
  // =========================================================================
  renderHero();
  startHeroAutoPlay();
  renderFilmstrip();
  renderCollectionsShowcase();
  renderCollectionPills();
  renderGallery();
  handleUrlHash();
})();
