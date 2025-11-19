// ================================================
// ACORDEÓN - FAQ y Objeciones
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Cerrar todos los items (opcional: comentar estas líneas para permitir múltiples abiertos)
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const content = otherItem.querySelector('.accordion-content');
                content.style.maxHeight = null;
            });

            // Toggle el item clickeado
            if (!isActive) {
                item.classList.add('active');
                const content = item.querySelector('.accordion-content');
                const contentInner = content.querySelector('.accordion-content-inner');
                content.style.maxHeight = contentInner.scrollHeight + 'px';
            } else {
                item.classList.remove('active');
                const content = item.querySelector('.accordion-content');
                content.style.maxHeight = null;
            }
        });
    });

    // Abrir el primer item por defecto (opcional)
    if (accordionItems.length > 0) {
        const firstItem = accordionItems[0];
        firstItem.classList.add('active');
        const content = firstItem.querySelector('.accordion-content');
        const contentInner = content.querySelector('.accordion-content-inner');
        content.style.maxHeight = contentInner.scrollHeight + 'px';
    }
});
