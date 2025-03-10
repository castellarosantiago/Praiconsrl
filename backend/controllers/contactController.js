const transporter = require("../config/nodemailerConfig");
const fs = require("fs");
const path = require("path");

const sendMail = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Plantillas de correo
        const userTemplate = fs.readFileSync(
            path.join(__dirname, "../templates/userConfirmation.html"),
            "utf-8"
        );
        const adminTemplate = fs.readFileSync(
            path.join(__dirname, "../templates/adminNotification.html"),
            "utf-8"
        );

        // Enviar correo al usuario
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Confirmación de contacto",
            html: userTemplate.replace("{{name}}", name),
        });

        // Enviar correo al administrador
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: "Nuevo mensaje de contacto",
            html: adminTemplate.replace("{{name}}", name).replace("{{email}}", email).replace("{{message}}", message),
        });

        res.status(200).json({ success: true, message: "Correo enviado con éxito." });

    } catch (error) {
        console.error("Error enviando correo:", error);
        res.status(500).json({ success: false, message: "Error enviando correo." });
    }
};

module.exports = { sendMail };
