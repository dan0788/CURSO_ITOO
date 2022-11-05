const mongoose = require("mongoose");
const express = require("express");
const colors = require("colors");
const config=require("config");
const usuarios = require("./controllers/usuarios");
const cursos = require("./controllers/cursos");
const login=require("./controllers/login")
colors.setTheme({
    error: ["red", "bgYellow"],//error
    success: ["green", "bgBlack"],//acierto
    input: ["magenta", "bgCyan"],//ingresar
    info: ["cyan", "bgBlue"]
});
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/usuarios", usuarios);
app.use("/api/cursos", cursos);
app.use("/api/login", login);

const port = process.env.port || 5001;
app.listen(port, () => {
    console.log(colors.success(`Conectado al puerto ${port}`));
});


mongoose.connect(config.get("configDB.host"))
    .then((msj) => console.log(colors.success("Connected to MongoDB")))
    .catch((msj) => console.log(colors.error(`No connected to MongoDB: ${msj}`)));

//para controlar los errores mejorar arquitectura joi mongoose
//añadir validaciones a password en modelos mongoose y vincular con repeat_password
//crear login de usuario