app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
