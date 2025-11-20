// ================================================
// ACORDEÓN - FAQ y Objeciones (Con Accesibilidad ARIA)
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    // Inicializar atributos ARIA para todos los acordeones
    accordionItems.forEach((item, index) => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = item.querySelector('.accordion-icon');

        // Generar IDs únicos
        const headerId = `accordion-header-${index + 1}`;
        const contentId = `accordion-content-${index + 1}`;

        // Añadir atributos ARIA al botón/header
        header.setAttribute('id', headerId);
        header.setAttribute('aria-expanded', 'false');
        header.setAttribute('aria-controls', contentId);

        // Añadir atributos al contenido
        content.setAttribute('id', contentId);
        content.setAttribute('role', 'region');
        content.setAttribute('aria-labelledby', headerId);

        // Marcar el icono como decorativo (ocultarlo de screen readers)
        if (icon) {
            icon.setAttribute('aria-hidden', 'true');
        }

        // Event listener para toggle
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Cerrar todos los items (para accordion de un solo item abierto)
            accordionItems.forEach((otherItem, otherIndex) => {
                const otherHeader = otherItem.querySelector('.accordion-header');
                const otherContent = otherItem.querySelector('.accordion-content');

                otherItem.classList.remove('active');
                otherContent.style.maxHeight = null;
                otherHeader.setAttribute('aria-expanded', 'false');
            });

            // Toggle el item clickeado
            if (!isActive) {
                item.classList.add('active');
                const contentInner = content.querySelector('.accordion-content-inner');
                content.style.maxHeight = contentInner.scrollHeight + 'px';
                header.setAttribute('aria-expanded', 'true');
            } else {
                item.classList.remove('active');
                content.style.maxHeight = null;
                header.setAttribute('aria-expanded', 'false');
            }
        });

        // Soporte para navegación por teclado
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
    });

    // NO abrir el primer item por defecto para mejorar UX
    // Los usuarios pueden elegir qué leer primero
});
