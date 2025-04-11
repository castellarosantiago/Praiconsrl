const URL = "https://praiconsrl.com";
document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("form")
        .addEventListener("submit", async function (e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value,
            };

            try {
                const response = await fetch(`${URL}/api/contact`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    // ✅ Mostrar el mensaje
                    showMessage("Mensaje enviado con éxito", "success"); // ✅ Limpiar el formulario después de enviar el mensaje
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("message").value = "";
                } else {
                    showMessage("Hubo un error, intenta de nuevo.", "error");
                }
            } catch (error) {
                console.error(error);
                showMessage("Error en la conexión.", "error");
            }
        });

    // 🆕 Función para mostrar mensajes flotantes
    function showMessage(text, type) {
        const messageBox = document.getElementById("form-message");

        if (!messageBox) {
            console.error("No se encontró el div del mensaje.");
            return;
        }

        messageBox.textContent = text;
        messageBox.className = `form-message ${type}`;
        messageBox.style.display = "block";
        messageBox.style.opacity = "1"; // Resetear opacidad por si se oculta antes

        // Ocultar después de 4 segundos
        setTimeout(() => {
            messageBox.style.opacity = "0";
            setTimeout(() => {
                messageBox.style.display = "none";
            }, 500); // Esperar a que la opacidad llegue a 0
        }, 4000);
    }
});
    // Configuración inicial
    const imagesPerSlide = 3;
    const totalImages = 15;
    const totalSlides = totalImages / imagesPerSlide; // 5 slides
    const carouselContainer = document.querySelector(".carousel-container");
    const images = Array.from(carouselContainer.querySelectorAll("img"));

    let currentIndex = 0; // Inicia en la primera imagen

    // --- Configurar el ancho del contenedor ---
    carouselContainer.style.width = `${totalSlides * 100}%`;

    function updateCarousel() {
        const slideWidth = 100 / totalSlides;
        carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth
            }%)`;
    }

    // --- Función para mover al siguiente slide ---
    function nextSlide() {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0; // Vuelve al inicio
        }
        updateCarousel();
    }

    // --- Función para mover al slide anterior ---
    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1; // Vuelve al último slide
        }
        updateCarousel();
    }

    // --- Configurar botones ---
    document.getElementById("next").addEventListener("click", nextSlide);
    document.getElementById("prev").addEventListener("click", prevSlide);

    // --- Autoplay cada 5 segundos ---
    setInterval(nextSlide, 5000);

    // --- Iniciar en la posición correcta ---
    updateCarousel();

