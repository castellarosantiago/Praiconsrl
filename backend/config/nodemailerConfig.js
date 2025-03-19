const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

module.exports = transporter;
console.log("Transporter configurado correctamente");

console.log("EMAIL.USER: ", process.env.EMAIL_USER);
console.log("EMAIL.PASS: ", process.env.EMAIL_PASS);