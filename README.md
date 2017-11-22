# Carengo test-feed
Pequeño proyecto que simula un feed de productos. Se utilizaron algunas tecnologías como Node.js 9.2, Express.js 4, Angular.js, REST APIs, infinite scrolling y media queries, así como npm para manejar todas las dependencias del proyecto.

## Prerrequisitos
Tener instalado Node.js versión 9.2, así como npm versión 5 o superior.

## Instrucciones

1. Clonar este repositorio
2. `cd test-feed && npm install && node server`
3. Navegar a http://localhost:3000

## Resumen de la solución
Se implementó un servidor Node.js para exponer el endpoint de una REST API usando Express.js y servir una Single Page Application usando AngularJS. Los datos leídos desde el endpoint están guardados en un archivo JSON, y son leídos y devueltos en batches de 20 elementos. Se emplean algunas funcionalidades de ES5, como IIFEs, ternary operator, logical assignment, y de ES6, como promesas y arrow functions. Se utilizó placehold.it para la generación de las imágenes de los productos simulados.

### Referencias
- [AngularJS API Docs](https://docs.angularjs.org/api)
- [Express API Reference](http://expressjs.com/en/api.html)
- [ngInfiniteScroll](https://github.com/sroze/ngInfiniteScroll)
- [Media queries @ MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)