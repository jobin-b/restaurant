import openRestaurant from "./load";
import openMenu from "./menu";
import openContact from "./contact";

openRestaurant();

const home = document.getElementById("home");
const contact = document.getElementById("contact");
const menu = document.getElementById("menu");
const content = document.getElementById("content");

home.addEventListener('click', (e) => {
    content.innerHTML = "";
    openRestaurant();
});

contact.addEventListener('click', (e) => {
    content.innerHTML = "";
    openContact();
});

menu.addEventListener('click', (e) => {
    content.innerHTML = "";
    openMenu();
});