import express from "express";

const app = express();

app.get("/teste", (request, response) => {
    return response.send("Envio em Requisição GET")
});

app.post("/test-post", (request, response) => {
    return response.send("Envio em Requisição POST")
});

app.listen(3000, () => console.log("[SERVER] - Servidor Iniciado!"));