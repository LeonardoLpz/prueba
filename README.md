Hola,Mi nombre es Leonardo Lopez y  este proyecto lo realicé con clases css sin preprocesador 
con uso de grid para el layout, cuenta con 2 componentes (pxHeader y pxTitleTab)
 y 5 vistas, usé vue-router para cambiar entre una y otra 
 (unicamente acepta las siguientes rutas: /software-list, /software-list/search-credits
 /software-list/search-credits/inspect y /login, si se intenta cualquier otra se redireccionará
 a una página "no encontrada",si se intenta ver estas rutas sin login será redireccionado a la vista login.
 
Para usar este proyecto en local:
1.- $npm install
2.- $ npm run server 
    desde la carpeta raiz
3.- Dirigirse a: http://localhost:8080/login en el navegador
4.-realizar el login con el siguiente usuario:
-email: prueba@email.com
-password: test1234
5.-(opcional) para crear el compilado de archivos estáticos para subirlo a un servidor:
$ npm run build,

**consideraciones: 
-de la vista "/software-list" solo acepta click alguna fila de la tabla
-de la vista "/software-list/search-credits" solo acepta click en "inspeccionar"
-para realizar el logout existe un boton en la parte inferior derecha, esto en todas las vistas
excluyendo el login
