# Gladys Coronado Atelier — web del taller

Landing de una sola página en HTML, CSS y JavaScript puros. No necesita instalar nada:
haz doble clic en `index.html` y se abre en el navegador.

```
index.html               contenido y textos
styles.css               diseño y colores
script.js                menú móvil y aparición de secciones al desplazar
hero/hero.jpg            la foto de fondo de la portada
site.webmanifest         nombre e iconos al "añadir a pantalla de inicio"
favicon.ico              icono de la pestaña (16, 32 y 48 px en un solo archivo)
apple-touch-icon.png     icono en pantalla de inicio de iPhone (180 px)
icon-192.png             iconos de Android, referenciados desde el manifest
icon-512.png
logo/gladys-coronado.png        el que usa la web (512 px, ya sin el teléfono)
logo/gladys-coronado-grande.png el mismo a 946 px, para imprimir o para Instagram
logo/logo.jpeg                  el original tal como lo mandaste, sin tocar
fotos/                   las 5 fotos de trabajos, recortadas a 900 × 1200
fotos/toma-de-medidas.jpg la foto de la sección Proceso (900 × 1125)
fotos/originales/        las fotos como las mandaste, por si hay que rehacer un recorte
```

---

## 1. Lo que ya está puesto

Nombre, logo, las fotos, el WhatsApp **6335 6109** con código de Costa Rica
(`50663356109`), el Instagram **@gladyscr75**, la dirección en San Rafael de Heredia y el
horario (**lunes a sábado, 9:00 a.m. – 5:00 p.m.**). El enlace `wa.me` abre el chat con un
mensaje ya escrito.

Las clases también son reales: **curso básico, ¢60.000 al mes**, una clase de una hora por
semana a las **7:00 p.m.**, en línea o presencial. El precio está **dos veces**: en el dato
"Curso básico" de la sección Clases y en el `makesOffer` del `application/ld+json`.

El horario está **dos veces**: en la tarjeta de contacto y en el `application/ld+json` del
final, que es la ficha que lee Google. Si algún día cambia, hay que cambiar los dos.

La dirección está **dos veces**: en la tarjeta de contacto y en el `application/ld+json`,
separada en calle, cantón, provincia y código postal, que es como la espera Google.

El Instagram aparece dos veces: en la tarjeta de contacto y en el campo `sameAs` del
bloque `application/ld+json`, que es lo que usa Google para saber que el perfil y el
negocio son el mismo.

## 2. Lo que todavía es de ejemplo

Queda una sola cosa: **los tres testimonios** de la sección "Lo que dicen al recoger".
Marcela V., Ana Lucía S. y Karla M. no existen, son texto de relleno. Sustitúyelos por
clientas de verdad —basta el nombre y la inicial, con su permiso— o borra la sección
entera: publicar reseñas falsas es publicidad engañosa.

Sobre la moneda: uso `¢` porque se escribe así en Costa Rica y se ve bien en cualquier
tipografía. Si prefieres el símbolo oficial `₡`, cámbialo — pero revisa que no salgan
cuadritos vacíos en el móvil, porque no todas las tipografías lo traen.

## 3. Cambiar la foto de portada

Sustituye `hero/hero.jpg` por otra imagen **con el mismo nombre**. No hay que tocar el
HTML ni el CSS. Requisitos:

- **1600 px de ancho como mínimo.** Ocupa la pantalla entera; por debajo de eso se ve
  pixelada en computadora. La actual mide 1400 y es el límite de lo aceptable.
- **Apaisada**, más ancha que alta.
- Que tenga **espacio tranquilo a la izquierda**: ahí va el titular. Si el motivo
  principal está a la izquierda, queda tapado por el texto.
- Menos de 400 KB, o la página tardará en cargar.

Si la bajas de Pexels o Unsplash, descarga el tamaño **Large / Original**, no la
miniatura. Y cambia el `alt` de la etiqueta `<img class="hero__foto">` en `index.html`:
ahora describe el taller de Gladys, y si la foto es de archivo el texto ya no sería
cierto.

⚠️ **No uses imágenes bajadas de Google Imágenes ni previews de bancos de imágenes**
(iStock, Getty, Shutterstock, Freepik premium). Se reconocen porque miden 612 px de
ancho o llevan marca de agua. Publicarlas sin licencia en la web de un negocio expone
a una reclamación económica. Pexels, Unsplash y Pixabay son gratuitas para uso
comercial y no piden atribución.

## 4. Cambiar o añadir fotos de trabajos

Las cinco fotos ya están puestas en la sección **Trabajos**. Para cambiar una, la vía
más simple es reemplazar el archivo en `fotos/` conservando el nombre. Para añadir otra,
copia un bloque `<figure class="gal__i reveal">` completo y cambia `src`, `alt` y el
`<figcaption>`.

Las fotos deben ser **verticales de 900 × 1200 px**. Si mandas una del celular sin
recortar, se ve estirada o cortada por donde no toca. Escribe siempre el `alt`: describe
la prenda, sirve para quien no ve la imagen y para que Google entienda la foto.

## 5. Cómo funciona la reserva de clases

El formulario de **Clases** no envía nada a ningún servidor y no guarda datos.
Al pulsar el botón, `script.js` junta lo que escribió la alumna, arma un mensaje y abre
WhatsApp con el texto ya puesto. Ella lo lee y le da enviar; a ti te llega un mensaje así:

```
Hola, quiero una clase de costura.

Nombre: Marcela Vargas
Modalidad: Presencial, en el taller
Nivel: Nunca he cosido
Día que me sirve: Martes
Hora: 7:00 p.m.
Me gustaría aprender: los ruedos de los pantalones
```

La línea **Modalidad** dice si la quiere por videollamada o en el taller. La hora va fija
a las 7:00 p.m. y la escribe el propio `script.js`; si algún día cambia, hay que tocarla
en tres sitios: el dato "Sesión" y la nota de la sección Clases, la etiqueta del
desplegable de días, y esa línea de `script.js`.

Ventajas: funciona desde el primer día, no cuesta nada, no hay contraseñas que mantener
y ningún correo se pierde en la carpeta de no deseados.

**Si algún día quieres un calendario de verdad** (que la alumna vea las horas libres y
reserve sola), se cambia el botón por un enlace de Calendly o de Citas de Google
Calendar. Dímelo y lo conecto.

Para cambiar las opciones de los desplegables —modalidad, niveles u horarios— edítalas en las
etiquetas `<option>` de `index.html`. El texto que escribas ahí es el que aparece en el
mensaje de WhatsApp, no hay que tocar el JavaScript.

## 6. Publícala gratis

**Netlify Drop** — lo más rápido. Entra a [app.netlify.com/drop](https://app.netlify.com/drop)
y arrastra la carpeta completa. Queda online en segundos con una dirección tipo
`gladys-coronado-atelier.netlify.app`, y puedes conectar tu dominio después.

**GitHub Pages** — sube los archivos a un repositorio y activa Pages en Settings.

Ambas son gratuitas y sirven HTTPS.

---

## Notas de diseño

La portada es la fotografía del taller a sangre, con un velo oscuro encima para que el
titular se lea. El resto de la página respira alrededor de esa foto: fondo marfil, líneas
discontinuas entre secciones (hilván, la costura provisional) y el borde impreso de la
izquierda.

- **Colores** (en `styles.css`, bloque `:root`): madera oscura `#2E241E` para el texto y
  las bandas, marfil `#F0EBE3` de fondo —los dos tonos del taller—, y del logo el oro
  rosa `#C08170` y el cobre `#96513F` como acento.
- **Tipografías**: Playfair Display (títulos), Newsreader (texto), DM Mono (etiquetas y datos).
  Se cargan desde Google Fonts; si te quedas sin internet, el navegador usa las de
  respaldo y la página sigue funcionando.
- **El muestrario de telas** está dibujado con CSS, no son fotos. Cada tejido es un
  patrón de degradados en `styles.css`, sección "tejidos dibujados en CSS".
- **El favicon no es el logo completo a escala.** A 16 píxeles la firma y el aro se
  vuelven una mancha gris, así que el icono es solo la corona, maciza y en blanco sobre
  un disco cobre. Es el mismo elemento del logo, dibujado para que aguante ese tamaño.
  Si algún día cambias el logo, hay que rehacer el icono aparte: no basta con reducir.
- **Trato de usted** en todos los textos, no de tú. Es lo normal en el comercio
  costarricense y sirve para clientas de cualquier edad. Si prefieres el voseo
  (*escogés, tenés, llevá*), hay que reescribir los textos: no es un buscar-y-reemplazar.
- Contraste verificado para WCAG AA, foco visible con teclado y `prefers-reduced-motion`
  respetado (si el sistema pide menos movimiento, no hay animaciones).
