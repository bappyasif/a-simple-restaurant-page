import { loadMenuTabContents } from "../tabbedPages/menuTab.js";
import {showMenuLinks} from "./linksPage.js";
function menuPage() {
    let menusDiv = document.createElement("div");
    let menuIcon = document.createElement("img");

    menuIcon.src = "../images/icons/menu-01.svg";
    menuIcon.classList.add("svgd");

    let textDiv = document.createElement("div");
    textDiv.textContent = "Menus";

    menusDiv.addEventListener("click", () => {
        document.querySelectorAll(".menu-active").forEach(item => item.classList.remove("menu-active"));
        menusDiv.classList.add("menu-active");
        loadMenuTabContents();
    });
    // adding classes to menusDiv
    menusDiv.classList.add("flexed", "dropdown");
    menusDiv.classList.add("menufied", "grow", "boxed", "mPage");
    // adding hoverable menu links along with other elements
    menusDiv.append(showMenuLinks(), menuIcon, textDiv);
    return menusDiv;
}
export { menuPage }


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


function menuPage() {
    let menusDiv = document.createElement("div");
    let menuIcon = document.createElement("img");

    menuIcon.src = "../images/icons/menu-01.svg";
    menuIcon.classList.add("svgd");

    let textDiv =  document.createElement("div");
    textDiv.textContent = "Menus";

    menusDiv.classList.add("flexed");
    // menusDiv.classList.add("menufied", "grow", "boxed", "mPage");
    // menusDiv.append(menuIcon, textDiv);
    // menusDiv.addEventListener("click", () => {alert("menu page");});
    menusDiv.addEventListener("click", () => {
        document.querySelectorAll(".menu-active").forEach(item=>item.classList.remove("menu-active"));
        menusDiv.classList.add("menu-active");
        loadMenuTabContents();
    });
    menusDiv.classList.add("menufied", "grow", "boxed", "mPage");
    menusDiv.append(menuIcon, textDiv);
    return menusDiv;
}


function menuPage() {
    let menusDiv = document.createElement("div");
    let menuIcon = document.createElement("img");

    menuIcon.src = "../images/icons/menu-01.svg";
    menuIcon.classList.add("svgd");

    let textDiv = document.createElement("div");
    textDiv.textContent = "Menus";

    menusDiv.addEventListener("click", () => {
        document.querySelectorAll(".menu-active").forEach(item => item.classList.remove("menu-active"));
        menusDiv.classList.add("menu-active");
        loadMenuTabContents();
        // hoverLinks.style.display = "block";
    });
    // adding classes to menusDiv
    menusDiv.classList.add("flexed", "dropdown");
    menusDiv.classList.add("menufied", "grow", "boxed", "mPage");
    // adding hoverable menu links along with other elements
    // console.log(showMenuLinks());
    // menusDiv.append(menuIcon, textDiv);
    // menusDiv.append(menuIcon, textDiv, showMenuLinks());
    menusDiv.append(showMenuLinks(), menuIcon, textDiv);
    return menusDiv;
}
 */