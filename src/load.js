import Icon from './Egg.jpeg';

function openRestaurant(){
    const content = document.getElementById("content");

    const img = new Image();
    img.src = Icon;
    content.appendChild(img);

    const title = document.createElement("h1");
    title.innerText = "Eggselent Restaurant";
    content.appendChild(title);

    const p = document.createElement("p");
    p.innerText = "If you like eggs, you have to try this place";
    content.appendChild(p);
}

export default openRestaurant;