let h1 = document.querySelector('h1');
let img = document.querySelector('img');
img.addEventListener('click',mudou);
function mudou() {
    h1.textContent = "You clicked in the Image";
    h1.style.color = "white";
    h1.style.backgroundColor = "blue";
    h1.style.padding = "10px";

}