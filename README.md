# Fierce Media

Sitio web oficial de **Fierce Media**, agencia de mercadeo y relaciones públicas. Impulsamos marcas con estrategia, tecnología e inteligencia artificial: desarrollo web, campañas publicitarias, redes sociales, diseño gráfico, video marketing y agentes de IA.

## Sobre la agencia

- **Marca:** Fierce Media
- **Tagline:** Agencia de mercadeo y relaciones públicas. Impulsamos tu marca con estrategia, tecnología e IA.
- **Ubicación:** Miami, FL · Atención LATAM
- **Teléfono:** +1 (786) 818 0611
- **Email:** csanchez@pixel360.media
- **Facebook:** [facebook.com](https://www.facebook.com/)

### Identidad visual

Según el manual de identidad corporativa de Fierce Media (§5.1 Principales sólidos, §4 Tipografía):

| Token | Valor |
|---|---|
| Negro (base / heroes / footer) | `#000000` |
| Oro (primario) | `#C8952C` |
| Oro claro (acento) | `#E7C279` |
| Oro oscuro (hover, iconos sobre tintes) | `#6F501E` |
| Tipografía corporativa (titulares) | Quicksand |
| Tipografía secundaria (cuerpo) | Poppins |

La marca, colores y tipografías se definen en un único archivo: [`src/config/theme.mjs`](src/config/theme.mjs).

El imagotipo no debe recolorearse, rotarse, distorsionarse ni llevar sombras (§8 Usos incorrectos). Los archivos oficiales están en `public/`: `isotipo.png` (ícono, usado en el header y el favicon) y `logotipo.png` (imagotipo completo).

## Servicios

| Ruta | Servicio |
|---|---|
| `/servicios/desarrollo-web` | Desarrollo Web |
| `/servicios/agentes-ia` | Agentes de IA |
| `/servicios/diseno-grafico` | Diseño Gráfico |
| `/servicios/redes-sociales` | Gestión de Redes |
| `/servicios/campanas-publicitarias` | Campañas de Ads |
| `/servicios/videomarketing` | Video Marketing |
| `/servicios/embudos-venta` | Embudos de Venta |
| `/servicios/creadores-ugc` | Creadores UGC |
| `/servicios/creacion-contenido` | Creación de Contenido |

Los planes de cada servicio viven en [`src/content/settings/plans.json`](src/content/settings/plans.json). **El sitio no muestra precios**: no hay campo `price` ni referencias a importes en ninguna página.

## Stack

- **[Astro](https://astro.build)** v5 — Static site generator
- **[Tailwind CSS](https://tailwindcss.com)** v3 — Utility-first CSS
- **[PostCSS](https://postcss.org)** + Autoprefixer
- **[Cloudflare Pages](https://pages.cloudflare.com)** — Hosting + Workers
- **GSAP** (CDN) — Animaciones avanzadas
- **Material Symbols** — Iconografía

## Estructura

```
├── src/
│   ├── config/
│   │   └── theme.mjs               # Colores, tipografías y logo — fuente única de marca
│   ├── content/
│   │   ├── pages/                  # Copys de Inicio, Nosotros, Contacto (JSON)
│   │   └── settings/
│   │       ├── site.json           # Marca, nav, contacto, footer
│   │       └── plans.json          # Servicios y planes (sin precios)
│   ├── layouts/
│   │   └── Layout.astro            # Layout global (header, footer)
│   ├── pages/
│   │   ├── index.astro             # Landing page
│   │   ├── nosotros.astro          # Sobre nosotros
│   │   ├── contacto.astro          # Contacto
│   │   ├── producto.astro          # Vista de producto/plan con enlace a WhatsApp
│   │   └── servicios/              # Una página por servicio (ver tabla arriba)
│   └── styles/
│       └── global.css              # CSS global (usa las variables de theme.mjs)
├── public/                         # Logo, favicon e imágenes del sitio
├── html/                           # Versión standalone (Tailwind CDN, sin build)
├── tailwind.config.mjs
├── astro.config.mjs
└── postcss.config.mjs
```

## Empezar

```bash
npm install
npm run dev       # → localhost:4321
npm run build     # → dist/
npm run preview   # → preview local del build
```

## Editar contenido

- **Marca / colores / tipografías:** [`src/config/theme.mjs`](src/config/theme.mjs)
- **Datos de contacto, nav y footer:** [`src/content/settings/site.json`](src/content/settings/site.json)
- **Servicios y planes:** [`src/content/settings/plans.json`](src/content/settings/plans.json)
- **Textos de Inicio / Nosotros / Contacto:** [`src/content/pages/`](src/content/pages/)
- **Cada página de servicio** tiene su propio `.astro` en `src/pages/servicios/`.

## Versión HTML standalone

La carpeta `html/` contiene versiones HTML puras (Tailwind CDN + CSS inline) sin dependencias ni build. **Es legado y no está migrada a la identidad de Fierce Media** (sigue con la paleta morada de la plantilla original). No se despliega; lo que sale a producción es la variante Astro de `src/`.

## Deploy

Push a `main` → Cloudflare Pages build automático.

```bash
git push
```
