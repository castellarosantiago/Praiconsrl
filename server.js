require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require ("path");

const contactRoutes = require("./backend/routes/contactRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Para procesar datos de formularios

// Servir archivos estáticos desde la carpeta frontend
app.use("/frontend", express.static(path.join(__dirname, "frontend")));

// Puedes agregar una ruta para el index.html en la raíz
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,  "0.0.0.0", () => console.log(`Servidor corriendo en puerto ${PORT}`));




