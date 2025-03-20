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
                const response = await fetch("http://localhost:5000/api/contact", {
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

    const carouselContainer = document.querySelector(".carousel-container");
    const images = carouselContainer.querySelectorAll("img");
    let currentIndex = 0;
    let intervalId;

    function showImage(index) {
        const slideWidth = 33.33;
        carouselContainer.style.transform = `translateX(${index * -slideWidth}%)`;
    }

    function nextImage() {
        if (currentIndex === Math.ceil(images.length / 3) -1) {
            currentIndex = 0;
        } else {
            currentIndex++;
            showImage(currentIndex);
        }
    }

    function prevImage() {
        if (currentIndex === 0) {
            currentIndex = Math.ceil(images.length / 3) - 1;
        } else {
            currentIndex--;
            showImage(currentIndex);
        }
    }

    function startAutoPlay() {
        intervalId = setInterval(nextImage, 3000);
    }

    function resetAutoPlay() {
        clearInterval(intervalId);
        startAutoPlay();
    }

    document.getElementById("prev").addEventListener("click", () => {
        prevImage();
        resetAutoPlay();
    });

    document.getElementById("next").addEventListener("click", () => {
        nextImage();
        resetAutoPlay();
    });

    startAutoPlay();
});
