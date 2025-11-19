# Laura Beneite Psicología - Sitio Web Profesional

Sitio web profesional para Laura Beneite, psicóloga sanitaria especializada en acompañamiento a mujeres y madres.

## 🎨 Características

- ✨ **Diseño Premium**: Paleta Calma Terracota con elementos de glassmorphism y micro-animaciones
- 📱 **100% Responsive**: Optimizado para móvil, tablet y desktop
- 🚀 **Alto Rendimiento**: CSS y JavaScript vanilla, sin dependencias externas
- ♿ **Accesible**: Cumple con estándares WCAG AA
- 🔍 **SEO Optimizado**: Meta tags completos y estructura semántica

## 📁 Estructura del Proyecto

```
WEB/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   ├── reset.css       # Reset de estilos del navegador
│   │   ├── variables.css   # Variables CSS (colores, tipografías, espaciados)
│   │   ├── global.css      # Estilos globales y utilidades
│   │   └── main.css        # Estilos principales por sección
│   ├── js/
│   │   ├── scroll-animations.js  # Animaciones al hacer scroll
│   │   ├── mobile-menu.js        # Menú móvil
│   │   └── faq-accordion.js      # Acordeón de FAQ
│   └── images/
│       ├── hero/           # Imágenes del hero
│       ├── laura/          # Foto de Laura
│       ├── icons/          # Iconos SVG
│       └── testimonials/   # Fotos de testimonios
└── README.md              # Este archivo
```

## 🎨 Paleta de Colores

**Calma Terracota** - Diseñada para transmitir calma, confianza y calidez

- **Principal**: `#8B6F5E` (Terracota suave)
- **Secundario**: `#E8DCC8` (Beige claro)
- **Acento**: `#C89F7E` (Arena dorada)
- **Texto**: `#2D2D2D` (Carbón suave)
- **Fondo**: `#FAF8F5` (Blanco cálido)

## 🔤 Tipografía

- **Títulos**: Playfair Display (elegante y profesional)
- **Cuerpo**: Inter (moderna y legible)
- **Citas**: Cormorant Garamond (para testimonios)

## 🚀 Cómo Usar

### Visualizar Localmente

1. Abre el archivo `index.html` directamente en tu navegador
2. O usa un servidor local:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx serve

# Con PHP
php -S localhost:8000
```

3. Abre tu navegador en `http://localhost:8000`

### Antes de Publicar

Necesitas actualizar los siguientes datos en `index.html`:

#### Datos de Contacto (líneas 420-440)
```html
<!-- Actualizar teléfono -->
<a href="tel:+34XXXXXXXXX" ...>

<!-- Actualizar WhatsApp -->
<a href="https://wa.me/34XXXXXXXXX?text=..." ...>

<!-- Actualizar email -->
<a href="mailto:contacto@laurabeneitepsicologia.com" ...>
```

#### Enlaces de Redes Sociales (líneas 485-500)
```html
<!-- Actualizar URLs de Instagram, Facebook, etc. -->
```

#### Imagen de Laura
- Añade la foto de Laura en `assets/images/laura/laura-beneite.jpg`
- Tamaño recomendado: 800x800px mínimo
- Formato: JPG o WebP optimizado

## 📋 Checklist Pre-Lanzamiento

- [ ] Añadir foto profesional de Laura
- [ ] Actualizar número de teléfono en 3 lugares
- [ ] Actualizar enlace de WhatsApp
- [ ] Verificar email de contacto
- [ ] Actualizar enlaces de redes sociales
- [ ] Añadir favicon personalizado
- [ ] Añadir imagen OG para redes sociales
- [ ] Revisar todos los textos
- [ ] Probar en diferentes navegadores
- [ ] Probar en dispositivos móviles
- [ ] Validar HTML en https://validator.w3.org/
- [ ] Validar CSS en https://jigsaw.w3.org/css-validator/
- [ ] Ejecutar Lighthouse para SEO y rendimiento

## 🛠️ Personalización

### Cambiar Colores

Edita las variables en `assets/css/variables.css`:

```css
:root {
  --color-primary: #TU_COLOR;
  --color-secondary: #TU_COLOR;
  --color-accent: #TU_COLOR;
}
```

### Añadir Nuevas Secciones

1. Añade el HTML en `index.html`
2. Añade los estilos en `assets/css/main.css`
3. Si necesitas interactividad, crea un nuevo archivo JS en `assets/js/`

## 📊 Rendimiento

Objetivo:
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

Medir con Google Lighthouse (F12 > Lighthouse)

## 🌐 Hosting

Servicios recomendados:
- **Netlify** (gratis, fácil, dominio HTTPS automático)
- **Vercel** (gratis, rápido)
- **GitHub Pages** (gratis si tienes GitHub)
- Hosting actual de laurabeneitepsicologia.com

## 📞 Soporte

Para dudas o modificaciones, contacta al desarrollador del proyecto.

## 📝 Licencia

© 2025 Laura Beneite Psicología. Todos los derechos reservados.

---

**Desarrollado con ❤️ para acompañar a mujeres en su proceso de reconexión**
