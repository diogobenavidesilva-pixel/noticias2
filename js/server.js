import express from "express";
const dirname =  import.meta.dirname;

const app = express();
app.use(express.static(dirname + "/../html"));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    });