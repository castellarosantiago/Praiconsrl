document.getElementById("form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("https://tuservidor.com/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert("Mensaje enviado con éxito");
        } else {
            alert("Hubo un error, intenta de nuevo.");
        }
    } catch (error) {
        console.error(error);
        alert("Error en la conexión.");
    }
});


