# Guía de Desarrollo y Arquitectura del Proyecto (AI Handbook)

Esta guía está diseñada para que una Inteligencia Artificial (o desarrollador humano) entienda rápidamente la estructura, lógica y estilo del proyecto web de **Laura Beneite Psicología**.

## 1. Visión General del Proyecto

*   **Tipo**: Landing Page / Sitio Web Corporativo (Single Page Application feel).
*   **Tecnologías**: HTML5 Semántico, CSS3 Moderno (Variables, Flexbox, Grid), JavaScript Vanilla (ES6+).
*   **Enfoque**: Diseño limpio, minimalista, "calma y bienestar", optimizado para SEO y performance.
*   **Idioma**: Español.

## 2. Estructura de Directorios

```
/
├── index.html              # Punto de entrada principal. Contiene toda la estructura del sitio.
├── assets/
│   ├── css/                # Estilos modulares
│   │   ├── reset.css       # Normalización de estilos (CSS Reset).
│   │   ├── variables.css   # [CRÍTICO] Design Tokens (colores, fuentes, espaciados).
│   │   ├── global.css      # Estilos base, tipografía global y utilidades generales.
│   │   ├── components.css  # Biblioteca de componentes (Cards, Botones, Badges, etc.).
│   │   ├── main.css        # Estilos específicos del layout y secciones de la página.
│   │   └── hero-decorative.css # Estilos específicos para decoraciones del Hero (opcional).
│   ├── js/                 # Lógica JavaScript modular
│   │   ├── mobile-menu.js      # Lógica del menú hamburguesa móvil.
│   │   ├── scroll-animations.js # IntersectionObserver para animaciones al hacer scroll.
│   │   └── faq-accordion.js    # Lógica para el acordeón de preguntas frecuentes.
│   └── images/             # Recursos gráficos (imágenes, iconos, og-image).
├── GUIA_GITHUB.md          # Documentación de control de versiones.
└── README.md               # Información general del repositorio.
```

## 3. Arquitectura de Código

### 3.1 HTML (`index.html`)
*   **Semántica**: Uso estricto de etiquetas semánticas (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`).
*   **Navegación**: Enlaces de ancla (`href="#seccion"`) para navegación suave dentro de la misma página.
*   **Clases**: Nombres de clase descriptivos en inglés (BEM-ish, pero más relajado). Ejemplo: `.hero-content`, `.service-card`.
*   **Atributos de Datos**: Uso de `data-parallax` o `loading="lazy"` para comportamientos JS.

### 3.2 CSS (Arquitectura Modular)
El CSS está dividido para facilitar el mantenimiento. El orden de importación en `index.html` es crítico:

1.  `reset.css`: Elimina estilos por defecto del navegador.
2.  `variables.css`: **La fuente de la verdad**. Define Custom Properties (`--color-primary`, `--space-4`, etc.). **Cualquier cambio de diseño global debe empezar aquí.**
3.  `global.css`: Aplica las variables a etiquetas base (`body`, `h1`, `p`) y define utilidades atómicas (`.text-center`, `.mt-4`).
4.  `components.css`: Clases reutilizables complejas (`.card`, `.btn`, `.badge`, `.alert`).
5.  `main.css`: Estilos específicos de secciones (`.hero`, `.about-section`) y layout (`.header`, `.footer`).

**Convenciones CSS:**
*   **Mobile First**: Las media queries (`@media (min-width: ...)` ) añaden complejidad para pantallas más grandes.
*   **Unidades**: Uso de `rem` para fuentes y espaciados (accesibilidad).
*   **Layout**: Flexbox para alineaciones unidimensionales, Grid para estructuras bidimensionales (`.grid`, `.services-grid`).

### 3.3 JavaScript
*   **Vanilla JS**: Sin dependencias externas (jQuery, React, etc.).
*   **Modularidad**: Cada archivo tiene una responsabilidad única.
*   **Performance**: Uso de `IntersectionObserver` en `scroll-animations.js` para animar elementos solo cuando entran en pantalla.
*   **Accesibilidad**: Respeto a `prefers-reduced-motion`.

## 4. Sistema de Diseño (Design System)

Todos los valores visuales están centralizados en `assets/css/variables.css`.

### Colores Principales
*   **Primario (Terracota)**: `--color-primary` (#8B6F5E) - Usado en textos importantes, botones principales.
*   **Secundario (Beige)**: `--color-secondary` (#E8DCC8) - Fondos suaves, elementos decorativos.
*   **Acento (Arena)**: `--color-accent` (#C89F7E) - Detalles, hovers.
*   **Terciario (Azul)**: `--color-tertiary` (#5B8FC4) - Confianza, profesionalidad, sección FAQ.

### Tipografía
*   **Headings**: `Playfair Display` (Serif) - Elegante, para títulos.
*   **Cuerpo**: `Inter` (Sans-serif) - Legible, moderna.
*   **Acentos**: `Cormorant Garamond` (Serif) - Para citas o subtítulos itálicos.

### Espaciado
Sistema basado en múltiplos de 4px/8px.
*   `--space-2` (8px)
*   `--space-4` (16px)
*   `--space-6` (24px)
*   `--space-8` (32px)

## 5. Guía de Modificación para IA

### Tarea: Cambiar un color global
1.  Abre `assets/css/variables.css`.
2.  Modifica el valor HEX de la variable correspondiente (ej. `--color-primary`).
3.  No toques los otros archivos CSS; el cambio se propagará automáticamente.

### Tarea: Añadir una nueva sección
1.  Abre `index.html`.
2.  Crea una nueva `<section>` con un ID único (ej. `<section id="nueva-seccion" class="section">`).
3.  Usa la clase `.container` dentro para mantener el ancho máximo.
4.  Añade el contenido HTML.
5.  Si necesitas estilos específicos, añádelos al final de `assets/css/main.css`.

### Tarea: Crear un nuevo componente (ej. una tarjeta de testimonio diferente)
1.  Revisa `assets/css/components.css` para ver si ya existe algo similar (`.card`, `.testimonial-card`).
2.  Si no, define la nueva clase en `components.css` (ej. `.card-featured`).
3.  Usa variables de `variables.css` para bordes, sombras y colores.

### Tarea: Ajustar animaciones
1.  Las animaciones de entrada (fade-in, slide-up) están controladas por clases en el HTML (`class="fade-in"`).
2.  La lógica está en `assets/js/scroll-animations.js`.
3.  Los tiempos y curvas de animación están en `variables.css` (`--duration-slow`, `--ease-out`).

## 6. Checklist de Calidad antes de finalizar cambios

*   [ ] **Responsive**: ¿Se ve bien en móvil (375px) y escritorio (1440px)?
*   [ ] **Semántica**: ¿El HTML es válido y usa las etiquetas correctas?
*   [ ] **Variables**: ¿He usado `var(--color-...)` en lugar de valores hardcoded?
*   [ ] **Consistencia**: ¿Los nuevos elementos siguen el estilo visual del resto de la página?
*   [ ] **Imágenes**: ¿Tienen atributo `alt` descriptivo?
