<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Curso Itoo</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="index.js"></script>
        <!-- Plugins Bootstrap-->
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

        <!-- jQuery library -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

        <!-- Popper JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

        <!-- Latest compiled JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

        <!-- Font awesome -->
        <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" data-search-pseudo-elements></script>
    </head>
    <body>
        <div class="container-fluid">
            <h3 class="text-center py-3">LOGO</h3>
        </div>
        <!-- botonera -->
        <div class="container-fluid bg-line">
            <div class="container">
                <ul class="nav nav-justified py-2 nav-pills">
                    <li class="nav-item">
                        <a class="nav-link" href="HTML/registro.html">Registro</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="HTML/ingreso.html">Ingreso</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="HTML/inicio.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Salir</a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- contenido -->
        <?php include 'paginas/inicio.php';?>
    </body>
</html>
<!-- abrir enlace en pestaña nueva: target="_blank
crear formulario con <form><\form>
tipos de input:text, number, range, color, date, email, search, tel(número de teléfono), url, datetime-local, month, time, week
<textarea rows="5" cols="5" placeholder="Ingrese su texto"></textarea>
selected: lista de seleccion
-->
