const toggleButton = document.getElementById("botonAside");
const aside = document.getElementById("infoAside");

toggleButton.addEventListener("click", function() {
    aside.classList.toggle("open");
});
