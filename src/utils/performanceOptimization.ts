// Performance optimization utilities for Core Web Vitals

export const preloadCriticalResources = () => {
  // Preload hero image
  const heroImage = new Image();
  heroImage.src = '/transparent-logo-1.png';
  
  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.as = 'font';
  fontLink.type = 'font/woff2';
  fontLink.crossOrigin = 'anonymous';
  fontLink.href = 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2';
  document.head.appendChild(fontLink);
};

export const optimizeImages = () => {
  // Lazy load images below the fold
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.classList.remove('loading-placeholder');
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px'
  });

  images.forEach(img => imageObserver.observe(img));
};

export const deferNonCriticalJS = () => {
  // Load Google Fonts asynchronously
  const googleFontsLink = document.createElement('link');
  googleFontsLink.rel = 'stylesheet';
  googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
  googleFontsLink.media = 'print';
  googleFontsLink.onload = () => {
    googleFontsLink.media = 'all';
  };
  document.head.appendChild(googleFontsLink);
};

export const measureCoreWebVitals = () => {
  // Measure and report Core Web Vitals
  if (typeof window !== 'undefined' && 'web-vitals' in window) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    });
  }
};

export const initPerformanceOptimizations = () => {
  // Run optimizations when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      preloadCriticalResources();
      optimizeImages();
    });
  } else {
    preloadCriticalResources();
    optimizeImages();
  }
  
  // Defer non-critical operations
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      deferNonCriticalJS();
      measureCoreWebVitals();
    });
  } else {
    setTimeout(() => {
      deferNonCriticalJS();
      measureCoreWebVitals();
    }, 1000);
  }
};