import {loadHomeTabContents} from "../tabbedPages/homeTab.js";
function homePage() {
    let menusDiv = document.createElement("div");
    let menuIcon = document.createElement("img");

    menuIcon.src = "../images/icons/home-01.svg";
    menuIcon.classList.add("svgd");

    let textDiv = document.createElement("div");
    textDiv.textContent = "Home Page";

    menusDiv.classList.add("flexed");
    menusDiv.addEventListener("click", () => {
        document.querySelectorAll(".menu-active").forEach(item => item.classList.remove("menu-active"));
        menusDiv.classList.add("menu-active");
        loadHomeTabContents();
    });
    menusDiv.classList.add("menufied", "grow", "bordered", "mPage");
    menusDiv.append(menuIcon, textDiv);
    return menusDiv;
}
export { homePage }



/**
 import {initialPageLoad} from "../init.js";

function homePage() {
    // let pageDiv = document.createElement("div");
    // pageDiv = initialPageLoad();
    // return pageDiv;

}
 */