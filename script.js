const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector("#lightbox span");

let currentImage = 0;

galleryImages.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentImage = index;

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});

document.addEventListener("keydown", (e) => {

    if (lightbox.style.display !== "flex") return;

    if (e.key === "Escape") {

        lightbox.style.display = "none";

    }

    if (e.key === "ArrowRight") {

        currentImage++;

        if (currentImage >= galleryImages.length) currentImage = 0;

        lightboxImg.src = galleryImages[currentImage].src;

    }

    if (e.key === "ArrowLeft") {

        currentImage--;

        if (currentImage < 0) currentImage = galleryImages.length - 1;

        lightboxImg.src = galleryImages[currentImage].src;

    }

});