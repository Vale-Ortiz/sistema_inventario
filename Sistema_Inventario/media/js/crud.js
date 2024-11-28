// Cargar el contenido del header y footer desde los archivos HTML
function cargarComponentes() {
  // Cargar el archivo header.html
  fetch('../componentes/header.php')
  .then(response => {
      if (!response.ok) {
          throw new Error('Error al cargar el archivo header');
      }
      return response.text();
  })
  .then(data => {
      document.getElementById('header-container').innerHTML = data;
  })
  .catch(error => console.error('Error:', error));

  // Cargar el archivo headergestor.html
  fetch('../componentes/headergestor.php')
  .then(response => {
      if (!response.ok) {
          throw new Error('Error al cargar el archivo header');
      }
      return response.text();
  })
  .then(data => {
      document.getElementById('header-container1').innerHTML = data;
  })
  .catch(error => console.error('Error:', error));

  // Cargar el archivo headeringeniero.html
  fetch('../componentes/headeringeniero.php')
  .then(response => {
      if (!response.ok) {
          throw new Error('Error al cargar el archivo header');
      }
      return response.text();
  })
  .then(data => {
      document.getElementById('header-container2').innerHTML = data;
  })
  .catch(error => console.error('Error:', error));

  // Cargar el archivo footer.html
  fetch('../componentes/footer.php')
  .then(response => {
      if (!response.ok) {
          throw new Error('Error al cargar el archivo footer');
      }
      return response.text();
  })
  .then(data => {
      document.getElementById('footer-pie').innerHTML = data;
  })
  .catch(error => console.error('Error:', error));
}

// Toggle de menú de navegación
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show-menu');
}

// Cerrar el menú al seleccionar una opción
function cerrarMenu() {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          const navLinksContainer = document.querySelector('.nav-links');
          navLinksContainer.classList.remove('show-menu'); // Cierra el menú al hacer clic
      });
  });
}

// Cargar contenido dinámico al hacer clic en las opciones de menú
function cargarContenido() {
  $(document).ready(function() {
      // Cargar el contenido inicial
      $("#contenido").load("../../crub_proyecto/proyecto.php");

      // CRUD PROYECTOS Cargar contenido de proyectos

          $("body").on("click","#proyectos",function(e){
            e.preventDefault();
            $.ajax({
              success: function(){
                $("#contenido").load("../../crub_proyecto/proyecto.php");
              }
            });
          });

       

          $("body").on("click","#guardarproyecto",function(e){
            e.preventDefault();
            $.ajax({
              type: "POST",
              url: "../../crub_proyecto/guardar.php",
              data: $("#formulario").serialize(),
              success: function(){
                $("#contenido").load("../../crub_proyecto/proyecto.php");
              }
            });
          });

          $("body").on("click","#eliminarproyecto",function(e){
            e.preventDefault();
            var datos = {'codigo': $(this).attr('value')};
            alert(datos.codigo);
            $.ajax({
              type: "POST",
              url: "../../crub_proyecto/eliminar.php",
              data: datos,
              success: function(){
                $("#contenido").load("../../crub_proyecto/proyecto.php");
              }
            });
          });

           
          // CRUD USUARIOS Cargar contenido de usuarios

        
          $("body").on("click","#usuarios",function(e){
            e.preventDefault();
            $.ajax({
              success: function(){
                $("#contenido").load("../../crub_usuarios/usuarios.php");
              }
            });
          });

      

          $("body").on("click","#guardarusuario",function(e){
            e.preventDefault();
            $.ajax({
              type: "POST",
              url: "../../crub_usuarios/guardar.php",
              data: $("#formularios").serialize(),
              success: function(){
                $("#contenido").load("../../crub_usuarios/usuarios.php");
              }
            });
          });

          $("body").on("click","#eliminarusuario",function(e){
            e.preventDefault();
            var datos = {'codigo': $(this).attr('value')};
            alert(datos.codigo);
            $.ajax({
              type: "POST",
              url: "../../crub_usuarios/eliminar.php",
              data: datos,
              success: function(){
                $("#contenido").load("../../crub_usuarios/usuarios.php");
              }
            });
          });


           // CRUD Proveedores Cargar contenido de proveedores

        
           $("body").on("click","#proveedores",function(e){
            e.preventDefault();
            $.ajax({
              success: function(){
                $("#contenido").load("../../crud_proveedores/proveedores.php");
              }
            });
          });
      
          $("body").on("click","#guardarproveedores",function(e){
            e.preventDefault();
            $.ajax({
              type: "POST",
              url: "../../crud_proveedores/guardar.php",
              data: $("#formularios").serialize(),
              success: function(){
                $("#contenido").load("../../crud_proveedores/proveedores.php");
              }
            });
          });

          $("body").on("click","#eliminarproveedor",function(e){
            e.preventDefault();
            var datos = {'codigo': $(this).attr('value')};
            alert(datos.codigo);
            $.ajax({
              type: "POST",
              url: "../../crud_proveedores/eliminar.php",
              data: datos,
              success: function(){
                $("#contenido").load("../../crud_proveedores/proveedores.php");
              }
            });
          });


           // CERRAR SESSION 

           $("body").on("click","#desconectar",function(e){
            e.preventDefault();
            $.ajax({
              success: function(){
              window.location.href = '../../roles/desconectar.php';
              }
            });
          });
  });
}


// Ejecutar todas las funciones al cargar el documento
document.addEventListener('DOMContentLoaded', function() {
  cargarComponentes(); // Cargar el header y footer
  cerrarMenu(); // Configurar el cierre del menú al hacer clic
  cargarContenido(); // Configurar la carga de contenido dinámico
 
});

