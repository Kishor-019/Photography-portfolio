// scroll to gallery
function scrollToGallery(){
  document.getElementById("gallery")
    .scrollIntoView({ behavior: "smooth" });
}

// lightbox
const photos = document.querySelectorAll(".photo img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

photos.forEach(img=>{
  img.addEventListener("click", ()=>{
    lightbox.classList.add("active");
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener("click", ()=>{
  lightbox.classList.remove("active");
});