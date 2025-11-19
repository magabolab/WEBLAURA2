# 📘 Guía Paso a Paso: Subir tu Web a GitHub

Esta guía te ayudará a subir la web de Laura Beneite Psicología a GitHub y publicarla usando GitHub Pages de forma **gratuita**.

---

## ✅ Prerrequisitos

Antes de empezar, asegúrate de tener:

1. **Cuenta de GitHub** - Si no tienes, créala en [github.com](https://github.com)
2. **Git instalado** - Descárgalo de [git-scm.com](https://git-scm.com/downloads)

Para verificar que Git está instalado, abre PowerShell y ejecuta:
```bash
git --version
```

---

## 📋 Paso 1: Preparar el Proyecto

### 1.1 Verificar estructura de archivos

Tu proyecto debe tener esta estructura:
```
WEB/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── (otros archivos)
```

### 1.2 Actualizar datos personales (IMPORTANTE)

Antes de subir, **actualiza estos datos** en `index.html`:

- **Línea ~50**: Badge del hero (si quieres cambiarlo)
- **Líneas ~420-440**: Datos de contacto
  - Número de teléfono (aparece 3 veces)
  - Enlace de WhatsApp
  - Email de contacto
- **Líneas ~490-510**: Enlaces de redes sociales en el footer

---

## 📋 Paso 2: Crear Repositorio en GitHub

### 2.1 Crear nuevo repositorio

1. Ve a [github.com](https://github.com) e inicia sesión
2. Haz clic en el botón **"New"** (arriba a la derecha, verde)
3. Configura el repositorio:
   - **Repository name**: `laura-beneite-psicologia` (o el nombre que prefieras)
   - **Description**: "Sitio web profesional de Laura Beneite Psicología"
   - **Visibilidad**: ✅ **Public** (necesario para GitHub Pages gratuito)
   - **NO marques** "Add a README file" (ya tienes uno)
   - **NO marques** "Add .gitignore"
   - **NO marques** "Choose a license"
4. Haz clic en **"Create repository"**

### 2.2 Guardar la URL del repositorio

GitHub te mostrará una página con instrucciones. **Copia la URL** que aparece, será algo como:
```
https://github.com/TU-USUARIO/laura-beneite-psicologia.git
```

---

## 📋 Paso 3: Subir el Proyecto a GitHub

### 3.1 Abrir PowerShell en la carpeta del proyecto

1. Abre el Explorador de Archivos
2. Navega a `E:\MARCAS\LAURA\WEB`
3. Haz clic en la barra de direcciones (donde dice la ruta)
4. Escribe `powershell` y presiona Enter

Se abrirá PowerShell ya posicionado en tu carpeta.

### 3.2 Inicializar Git y subir archivos

Ejecuta estos comandos **uno por uno** (copia y pega cada línea, presiona Enter):

```bash
# 1. Inicializar repositorio Git
git init

# 2. Configurar tu nombre y email (usa los de tu cuenta GitHub)
git config user.name "Tu Nombre"
git config user.email "tu-email@ejemplo.com"

# 3. Añadir todos los archivos
git add .

# 4. Crear el primer commit
git commit -m "Primera versión de la web de Laura Beneite Psicología"

# 5. Renombrar la rama a 'main'
git branch -M main

# 6. Conectar con GitHub (REEMPLAZA con tu URL del paso 2.2)
git remote add origin https://github.com/TU-USUARIO/laura-beneite-psicologia.git

# 7. Subir todo a GitHub
git push -u origin main
```

**Nota**: En el paso 6, reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub y el nombre del repositorio si lo cambiaste.

---

## 📋 Paso 4: Activar GitHub Pages

### 4.1 Configurar GitHub Pages

1. Ve a tu repositorio en GitHub: `https://github.com/TU-USUARIO/laura-beneite-psicologia`
2. Haz clic en **"Settings"** (Configuración, última pestaña arriba)
3. En el menú lateral izquierdo, haz clic en **"Pages"**
4. En la sección **"Source"** (Fuente):
   - **Branch**: Selecciona `main`
   - **Folder**: Selecciona `/ (root)`
5. Haz clic en **"Save"**

### 4.2 Obtener la URL de tu sitio

Después de unos segundos (puede tardar 1-2 minutos), GitHub te mostrará un mensaje:

```
✅ Your site is live at https://TU-USUARIO.github.io/laura-beneite-psicologia/
```

**¡Esa es la URL de tu sitio web!** 🎉

---

## 📋 Paso 5: Conectar Dominio Personalizado (Opcional)

Si ya tienes el dominio `laurabeneitepsicologia.com`, puedes conectarlo:

### 5.1 En GitHub

1. Ve a **Settings > Pages** en tu repositorio
2. En **"Custom domain"**, escribe: `laurabeneitepsicologia.com`
3. Haz clic en **"Save"**
4. Marca la casilla **"Enforce HTTPS"** (una vez que se active)

### 5.2 En tu proveedor de dominio

Configura estos registros DNS:

**Opción A: Usar dominio principal (laurabeneitepsicologia.com)**

Tipo A (si está disponible):
```
@  →  185.199.108.153
@  →  185.199.109.153
@  →  185.199.110.153
@  →  185.199.111.153
```

**Opción B: Usar www (www.laurabeneitepsicologia.com)**

Tipo CNAME:
```
www  →  TU-USUARIO.github.io
```

**Nota**: Los cambios DNS pueden tardar hasta 24-48 horas en propagarse.

---

## 🔄 Actualizar el Sitio (Cuando hagas cambios)

Cuando modifiques algún archivo, sigue estos pasos para actualizar GitHub:

```bash
# 1. Navegar a la carpeta del proyecto en PowerShell
cd E:\MARCAS\LAURA\WEB

# 2. Añadir los cambios
git add .

# 3. Crear un commit con descripción
git commit -m "Descripción de los cambios"

# 4. Subir a GitHub
git push
```

Los cambios se publicarán automáticamente en 1-2 minutos.

---

## 📝 Checklist Pre-Publicación

Antes de hacer público el sitio, verifica:

- [ ] Datos de contacto actualizados (teléfono, email, WhatsApp)
- [ ] Enlaces de redes sociales actualizados
- [ ] Foto de Laura reemplazada (si tienes una real)
- [ ] Testimonios revisados (usar reales si están disponibles)
- [ ] Probado en móvil (responsive)
- [ ] Probado en diferentes navegadores (Chrome, Firefox, Safari)
- [ ] Verificar ortografía y redacción

---

## 🆘 Solución de Problemas

### Error: "Permission denied"
Si al hacer `git push` te pide usuario/contraseña y falla, necesitas configurar autenticación:

1. Ve a GitHub > Settings > Developer settings > Personal access tokens
2. Generate new token (classic)
3. Dale permisos de "repo"
4. Copia el token y úsalo como contraseña

### La página no se actualiza
1. Espera 2-3 minutos
2. Borra caché del navegador (Ctrl + Shift + R)
3. Verifica que hiciste `git push` correctamente

### Errores en el sitio
1. Abre la consola del navegador (F12)
2. Ve a la pestaña "Console" para ver errores
3. Revisa que todos los archivos estén bien referenciados

---

## 🎯 Siguiente Paso: Optimización SEO

Una vez publicada, considera:

1. **Google Search Console**: Registra tu sitio para aparecer en Google
2. **Google Analytics**: Añade seguimiento de visitas
3. **Meta Tags**: Actualiza las imágenes OG (Open Graph) para redes sociales
4. **Favicon**: Crea un favicon personalizado

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas:
- Revisa la [documentación de GitHub Pages](https://docs.github.com/es/pages)
- Verifica que todos los comandos se ejecutaron sin errores
- Comprueba que los archivos se subieron correctamente en GitHub

---

**¡Tu sitio web está listo para el mundo!** 🌐✨
