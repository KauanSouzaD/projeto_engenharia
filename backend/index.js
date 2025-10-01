const express = require("express");
const cors = require("cors")
const app = express();

require("dotenv").config();

const produtoRoutes = require("./routes/ProdutoRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/produto/", produtoRoutes)

const connectDB = require("./db/connection");

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));