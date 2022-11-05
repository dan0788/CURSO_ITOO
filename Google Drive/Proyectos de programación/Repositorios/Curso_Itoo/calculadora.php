<!doctype html>
<html lang="es">
    <head>
        <title>Calculadora</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Daniel Ayala">
        <meta name="keywords" content="calculadora">
        <script src="jquery-3.6.0.min.js" type="text/javascript"></script>
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="calculadora.css?ts=<?= time() ?>">
        <script src="calculadora.js?ts=<?= time() ?>" type="text/javascript"></script>
    </head>
    <body>
        <h1 class="py-5 my-3 text-center">Calculadora</h1>
        <div class="container px-0 rounded border-dark border">
            <input class="text-end" type="text" placeholder="" disabled value="0">
            <div class="container-fluid px-0 row m-0">
                <button class="btn btn-dark border-0 col-3" onclick="getContent(event)">AC</button>
                <button class="btn btn-dark border-0 col-3 operation" onclick="getContent(event)">+/-</button>
                <button class="btn btn-dark border-0 col-3 operation" onclick="getContent(event)">%</button>
                <button class="btn btn-warning border-0 col-3 operation" onclick="getContent(event)">÷</button>
            </div>
            <div class="container-fluid px-0 row m-0">
                <button class="btn btn-secondary border-0 col-3 number" onclick="getContent(event)">7</button>
                <button class="btn btn-secondary border-0 col-3 number" onclick="getContent(event)">8</button>
                <button class="btn btn-secondary border-0 col-3 number" onclick="getContent(event)">9</button>
                <button class="btn btn-warning border-0 col-3 operation" onclick="getContent(event)">*</button>
            </div>
            <div class="container-fluid px-0 row m-0">
                <button class="btn btn-secondary border-0 col-3 number" onclick="getContent(event)">4</button>
                <button class="btn btn-secondary border-0 col-3 number" onclick="getContent(event)">5</button>
                <button class="btn btn-secondary border-0 col-3 number" onclick="getContent(event)">6</button>
                <button class="btn btn-warning border-0 col-3 operation" onclick="getContent(event)">-</button>
            </div>
            <div class="container-fluid px-0 row m-0">
                <button class="btn btn-secondary border-0 col-3 number" onclick="getContent(event)">1</button>
                <button class="btn btn-secondary border-0 col-3 number" onclick="getContent(event)">2</button>
                <button class="btn btn-secondary border-0 col-3 number" onclick="getContent(event)">3</button>
                <button class="btn btn-warning border-0 col-3 operation" onclick="getContent(event)">+</button>
            </div>
            <div class="container-fluid px-0 row m-0">
                <button class="btn btn-secondary border-0 col-6 number" onclick="getContent(event)">0</button>
                <button class="btn btn-secondary border-0 col-3 number" onclick="getContent(event)">.</button>
                <button class="btn btn-warning border-0 col-3 operation" onclick="getContent(event)">=</button>
            </div>
        </div>
    </body>
</html>

<?php