function openContact(){
    const content = document.getElementById("content");

    const title = document.createElement("h1");
    title.innerText = "Contact Us";
    content.appendChild(title);

    const h = document.createElement("h2");
    h.innerText = "If you need help with anything contact us at 000-000-0000. (The zeros are like eggs)";
    content.appendChild(h);
}

export default openContact;