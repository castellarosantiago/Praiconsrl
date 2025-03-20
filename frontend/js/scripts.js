const RENDER_EXTERNAL_URL = 'https://praiconsrl.onrender.com';
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
                const response = await fetch(`${RENDER_EXTERNAL_URL}/api/contact`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
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
    carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
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

// --- Autoplay cada 3 segundos ---
setInterval(nextSlide, 3000);

// --- Iniciar en la posición correcta ---
updateCarousel();
});