function contactPage() {
    let contactDiv = document.createElement("div");
    let iconDiv = document.createElement("img");
    
    iconDiv.src = "../images/icons/contact-02.svg";
    iconDiv.classList.add("svgd");

    let textDiv = document.createElement("div");
    textDiv.textContent = "Contact Page";
    
    contactDiv.classList.add("flexed");
    contactDiv.classList.add("menufied", "grow", "bordered", "cPage");
    contactDiv.append(iconDiv, textDiv);
    return contactDiv;
}
export {contactPage}


/**
 function contactPage() {
    let contactDiv = document.createElement("div");
    let iconDiv = document.createElement("img");
    iconDiv.src = "../images/icons/contact-02.svg";
    // iconDiv.height = "17";
    // iconDiv.width = "17";
    iconDiv.classList.add("svgd");
    let textDiv = document.createElement("div");
    textDiv.textContent = "Contact Page";
    // iconDiv.append(textDiv);
    // contactDiv.append(iconDiv, textDiv);
    // contactDiv.style.display = "flex";
    // contactDiv.style.justifyContent = "space-around";
    contactDiv.classList.add("flexed");
    contactDiv.append(iconDiv, textDiv);
    return contactDiv;
}
 */