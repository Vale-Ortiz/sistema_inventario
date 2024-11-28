<?php      
 session_start(); 
   if (isset($_SESSION['rol'])) {
       // La sesión está activa
       $rol = $_SESSION['rol'];
       echo "La sesión está activa. Bienvenido, " . $rol;
   } else {
       // No hay sesión activa
       echo "No has iniciado sesión. <a href='login.php'>Iniciar sesión</a>";
   }
?>
<header>
    <div class="header-content">
        <img src="../../media/image/php.png" alt="Logo de la Empresa" class="logo">
        <h1><?php echo $rol; ?></h1>
        <nav>
            <ul class="nav-links">
                <li><a href="#" id="proyectos">Proyectos</a></li>                                             
                <li><a href="#" id="desconectar">Cerrar Sesión</a></li>
            </ul>
            
        </nav>
        <div class="menu-toggle" onclick="toggleMenu()">&#9776;</div> <!-- Botón de menú -->
    </div>
</header>