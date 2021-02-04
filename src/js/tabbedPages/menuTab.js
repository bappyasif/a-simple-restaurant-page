function loadMenuTabContents() {
    let imageDiv = document.querySelector(".image-div");
    let descDiv = document.querySelector(".desc-div");
    let contentDiv = document.querySelector(".content-div");
    contentDiv.childNodes.forEach(item => item.textContent = "");
    // contentDiv.classList.add("menu", "active");

    let imageEl = document.createElement("img");
    imageEl.src = "../images/menu-01.jpg";
    imageEl.alt = "menu page";
    imageEl.classList.add("img");
    imageDiv.append(imageEl);
    let descEl = document.createElement("p");
    descEl.textContent = `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 
    to make a type specimen book.
    `;
    descDiv.append(descEl);
    contentDiv.append(imageDiv, descDiv);
    return contentDiv;
}

export {loadMenuTabContents}