/* Gladys Coronado Atelier — comportamiento de la página */
(function () {
  'use strict';

  var quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- año del pie ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- menú móvil ---------- */
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var abierto = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(abierto));
      burger.querySelector('.sr').textContent = abierto ? 'Cerrar menú' : 'Abrir menú';
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- clases: el formulario arma el mensaje de WhatsApp ----------
     No se envía nada a ningún servidor. Se compone el texto y se abre el
     chat, así que la clienta ve y confirma el mensaje antes de mandarlo. */
  var WHATSAPP = '50663356109';   // mismo número que los botones de arriba
  var cita = document.getElementById('cita');

  if (cita) {
    cita.addEventListener('submit', function (e) {
      e.preventDefault();

      var val = function (id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : '';
      };

      var lineas = [
        'Hola, quiero una clase de costura.',
        '',
        'Nombre: ' + val('c-nombre'),
        'Modalidad: ' + val('c-modo'),
        'Nivel: ' + val('c-nivel'),
        'Día que me sirve: ' + val('c-cuando'),
        'Hora: 7:00 p.m.'
      ];

      var tema = val('c-tema');
      if (tema) lineas.push('Me gustaría aprender: ' + tema);

      var url = 'https://wa.me/' + WHATSAPP + '?text=' +
                encodeURIComponent(lineas.join('\n'));

      // si el navegador bloquea la ventana nueva, se navega en la misma
      var w = window.open(url, '_blank', 'noopener');
      if (!w) window.location.href = url;
    });
  }

  /* ---------- aparición al desplazar ---------- */
  var piezas = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window) || quieto) {
    piezas.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }

  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (!entrada.isIntersecting) return;
      var el = entrada.target;
      var i = Number(el.dataset.i || 0);
      setTimeout(function () { el.classList.add('is-in'); }, i * 80);
      obs.unobserve(el);
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

  // escalona los elementos que comparten fila
  document.querySelectorAll('.pieces, .steps, .swatches, .gal, .quotes')
    .forEach(function (grupo) {
      Array.prototype.forEach.call(grupo.children, function (hijo, i) {
        if (hijo.classList.contains('reveal')) hijo.dataset.i = i;
      });
    });

  piezas.forEach(function (el) { obs.observe(el); });

  /* Red de seguridad: si alguien entra directo a un enlace con ancla
     (por ejemplo .../#clases), el navegador salta hasta ahí y esa sección
     puede quedarse sin revelar, es decir, en blanco. Al terminar de cargar
     se revela lo que ya esté en pantalla. */
  window.addEventListener('load', function () {
    document.querySelectorAll('.reveal:not(.is-in)').forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('is-in');
    });
  });
})();
