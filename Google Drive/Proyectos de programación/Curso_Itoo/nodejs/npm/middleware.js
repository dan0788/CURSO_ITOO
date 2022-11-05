const express = require("express");
const app = express();
app.use(express.json())
const miPuerto = process.env.PORT || 3000;
app.listen(miPuerto, () => {
    console.log(`Escuchando en ${miPuerto}`);
});
app.use((request, response, next)=>{
    console.log("Logging...");
    
});
app.get("/", (request, response) => {
    response.send(request.query);
});