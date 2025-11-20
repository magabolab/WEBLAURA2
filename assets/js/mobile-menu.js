// ================================================
// MENÚ MÓVIL - Hamburger Menu (Con Mejoras de Accesibilidad)
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu .nav-link');

    // Función para cerrar el menú
    function closeMenu() {
        mobileMenuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';

        // Devolver el focus al botón hamburguesa
        mobileMenuToggle.focus();
    }

    // Toggle menú al hacer clic en hamburguesa
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            const isOpening = !mobileMenu.classList.contains('active');

            mobileMenuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');

            if (isOpening) {
                // Prevenir scroll del body cuando el menú está abierto
                document.body.style.overflow = 'hidden';

                // Mover focus al primer enlace del menú para mejor accesibilidad
                setTimeout(() => {
                    const firstLink = mobileMenu.querySelector('.nav-link');
                    if (firstLink) {
                        firstLink.focus();
                    }
                }, 100); // Pequeño delay para permitir que la animación empiece
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // Cerrar menú al hacer clic en un enlace
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Cerrar menú al hacer clic fuera de él (en el overlay)
    document.addEventListener('click', (e) => {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                closeMenu();
            }
        }
    });

    // Cerrar menú con tecla Escape (Accesibilidad WCAG 2.1)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Smooth scroll para todos los enlaces de navegación
    const allNavLinks = document.querySelectorAll('a[href^="#"]');
    allNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            // Solo aplicar smooth scroll si el href no es solo "#"
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();

                    // Offset para el header fijo
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
