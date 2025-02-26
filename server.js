require("dotenv").config();
const express = require("express");
const cors = require("cors");

const contactRoutes = require("./backend/routes/contactRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Para procesar datos de formularios

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,  "0.0.0.0", () => console.log(`Servidor corriendo en puerto ${PORT}`));




