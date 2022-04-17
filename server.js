const express = require("express");
const port = process.env.PORT || 3001
const routes = require("./routes")

const app = express();
app.use(express.json());
app.use(routes)

app.get("/", (req,res) => {
    res.status(200).json({
        message: "API Livraria - Módulo 5"
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})
