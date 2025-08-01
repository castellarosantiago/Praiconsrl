const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

module.exports = transporter;
transporter.verify((error, success) => {
    if (error) {
        console.error("Transporte no está listo:", error);
    } else {
        console.log("Transporte listo para enviar correos.");
    }
});



