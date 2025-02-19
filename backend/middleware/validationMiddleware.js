const validateContactForm = (req, res, next) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "Todos los campos son obligatorios." });
    }
    next();
};

module.exports = { validateContactForm };
