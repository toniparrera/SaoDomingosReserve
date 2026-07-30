const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if(navToggle && navMenu){

    navToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("open");

        navToggle.classList.toggle("open", isOpen);

        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

    });

    navMenu.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            navToggle.classList.remove("open");

            navToggle.setAttribute("aria-expanded", "false");

        });

    });

}

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let current = 0;

function showImage(index){

    current = index;

    lightbox.style.display = "flex";

    lightboxImg.src = galleryImages[current].src;

}

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        showImage(index);

    });

});

function nextImage(){

    current++;

    if(current>=galleryImages.length){

        current=0;

    }

    lightboxImg.src=galleryImages[current].src;

}

function previousImage(){

    current--;

    if(current<0){

        current=galleryImages.length-1;

    }

    lightboxImg.src=galleryImages[current].src;

}

nextBtn.addEventListener("click",nextImage);

prevBtn.addEventListener("click",previousImage);

closeBtn.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});

document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display!="flex") return;

    if(e.key==="ArrowRight") nextImage();

    if(e.key==="ArrowLeft") previousImage();

    if(e.key==="Escape") lightbox.style.display="none";

});