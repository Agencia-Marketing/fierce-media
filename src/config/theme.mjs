/* ============================================================
   TEMA DEL SITIO — única fuente de marca (Fierce Media · Negro & Oro)
   ------------------------------------------------------------
   Esto es LO ÚNICO que cambias al crear un sitio nuevo:
   colores, tipografías y logo. No toques el markup ni global.css.
   Colores oficiales (manual de identidad, 5.1 Principales sólidos):
   negro #000000, oro #C8952C, oro claro #E7C279, oro oscuro #6F501E.
   ============================================================ */

// --- Colores (hex). Las claves son los nombres de clase Tailwind:
//     bg-primary, text-on-surface, bg-surface-container-high, etc.
export const colors = {
  surface:                    '#ffffff',
  'surface-dim':              '#faf7f2',
  'surface-container-lowest': '#ffffff',
  'surface-container-low':    '#faf7f2',
  'surface-container':        '#f5eee1',
  'surface-container-high':   '#efe3cd',
  'surface-container-highest':'#e7c279',
  'on-surface':               '#000000',
  'on-surface-variant':       '#4a4a48',
  outline:                    '#e6ddcd',
  'outline-variant':          '#e6ddcd',
  primary:                    '#C8952C',
  'on-primary':               '#ffffff',
  'primary-container':        '#C8952C',
  'on-primary-container':     '#000000',
  'primary-fixed':            '#f6ead2',
  'on-primary-fixed':         '#000000',
  'primary-fixed-dim':        '#E7C279',
  'inverse-primary':          '#E7C279',
  secondary:                  '#6F501E',
  'on-secondary':             '#ffffff',
  background:                 '#ffffff',
  'on-background':            '#000000',
  'body-text':                '#333333',
  // Fondo de las secciones hero (bloques a pantalla completa).
  'hero-bg':                  '#000000',
  // Texto sobre los botones/superficies en oro: negro, por contraste.
  'on-accent':                '#000000',
};

// --- Tipografías. Cambia las familias y el enlace de Google Fonts juntos.
export const fonts = {
  display:    'Quicksand, sans-serif',     // titulares (tipografía corporativa, 4.1)
  body:       'Poppins, sans-serif',       // cuerpo (tipografía secundaria, 4.2)
  googleHref: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap',
};

// --- Logo. Ícono/isotipo de Fierce Media (archivo en /public).
//     Si `image` tiene una ruta, se muestra la imagen en el header junto
//     al nombre de marca, que se edita en settings/site.json.
export const logo = {
  image: '/isotipo.png',
  alt:   'Fierce Media',
};
