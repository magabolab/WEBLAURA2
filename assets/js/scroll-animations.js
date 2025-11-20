/* ================================================
   SCROLL ANIMATIONS - Intersection Observer
   Optimizado para performance y accesibilidad
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Respetar preferencias de movimiento reducido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        // Si el usuario prefiere movimiento reducido, hacer todos los elementos visibles inmediatamente
        const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
        animatedElements.forEach(el => {
            el.classList.add('visible');
        });
        return;
    }

    // Configuración del Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px', // Trigger 100px antes del viewport
        threshold: [0, 0.1, 0.25] // Múltiples umbrales para transiciones suaves
    };

    // Callback del observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento es visible
            if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
                entry.target.classList.add('visible');

                // Opcional: dejar de observar después de animar (mejor performance)
                // Comentar la siguiente línea si quieres que se anime cada vez que entra al viewport
                observer.unobserve(entry.target);
            }
        });
    };

    // Crear el observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar todos los elementos con clases de animación
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .stagger-1, .stagger-2, .stagger-3, .stagger-4, .stagger-5');

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Lazy loading de imágenes
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('loading' in HTMLImageElement.prototype) {
        // El navegador soporta lazy loading nativo
        // No hacer nada, el navegador lo maneja
    } else {
        // Fallback para navegadores sin soporte
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Animación del header al hacer scroll
    let lastScroll = 0;
    const header = document.querySelector('.header');

    const handleScroll = () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    };

    // Debounce del scroll para mejor performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(handleScroll);
    }, { passive: true });

    // Smooth scroll para enlaces internos
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Ignorar el enlace si es solo '#'
            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const headerHeight = header?.offsetHeight || 60;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Actualizar la URL sin saltar
                history.pushState(null, '', href);
            }
        });
    });
});

// Animación de números (si hay contadores en el futuro)
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60 FPS
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.round(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current);
        }
    }, 16);
}

// Parallax suave para elementos decorativos (opcional)
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(el => {
            const speed = el.dataset.parallax || 0.5;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    }, { passive: true });
}

// Exportar funciones para uso externo si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        animateCounter,
        initParallax
    };
}
