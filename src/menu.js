import Icon from './Egg.jpeg';
function openMenu(){
    const content = document.getElementById("content");
    
    const title = document.createElement("h1");
    title.innerText = "Our Menu";
    content.appendChild(title);

    const img = new Image();
    img.src = Icon;
    content.appendChild(img);


    const p = document.createElement("p");
    p.innerText = "Order our house Speacial!\nHighest Quality Eggs - $99.99";
    content.appendChild(p);
}

export default openMenu;