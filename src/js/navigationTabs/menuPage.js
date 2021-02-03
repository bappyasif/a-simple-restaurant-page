function menuPage() {
    let menusDiv = document.createElement("div");
    let menuIcon = document.createElement("img");

    menuIcon.src = "../images/icons/menu-01.svg";
    menuIcon.classList.add("svgd");
    
    let textDiv =  document.createElement("div");
    textDiv.textContent = "Menus";
    
    menusDiv.classList.add("flexed");
    menusDiv.classList.add("menufied", "grow", "boxed", "mPage");
    menusDiv.append(menuIcon, textDiv);
    return menusDiv;
}
export {menuPage}


/**
 function menuPage() {
    let menusDiv = document.createElement("div");
    let menuIcon = document.createElement("img");
    menuIcon.src = "../images/icons/menu-01.svg";
    // menuIcon.height = "17";
    // menuIcon.width = "17";
    menuIcon.classList.add("svgd");
    let textDiv =  document.createElement("div");
    textDiv.textContent = "Menus";
    // menusDiv.style.display = "flex";
    menusDiv.classList.add("flexed");
    menusDiv.append(menuIcon, textDiv);
    return menusDiv;
}
 */