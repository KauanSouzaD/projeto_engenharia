const express = require("express");
const cors = require("cors")
const app = express();

require("dotenv").config();

const produtoRoutes = require("./routes/ProdutoRoutes");
const tutorRoute = require("./routes/TutorRoute");
const petRoutes = require("./routes/PetRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/produto/", produtoRoutes);
app.use("/api/tutor", tutorRoute);
app.use("/api/pet", petRoutes);


const connectDB = require("./db/connection");

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));