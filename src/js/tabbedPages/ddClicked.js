import {loadHomeTabContents} from "./homeTab.js";
import {initialPageLoad} from "../init.js";
import {loadWWDTabContents} from "./wwdTab.js";
import {loadContactTabContents} from "./contactTab.js";
import {loadMenuTabContents} from "./menuTab.js";

function dropdownMenuLinkClicked(menuLink) {
    let contentDiv = document.querySelector(".content-div");
    contentDiv.childNodes.forEach(item => item.textContent = "");
    switch(menuLink) {
        case "homePage":
            // initialPageLoad();
            // document.querySelectorAll(".menu-active").forEach(item => item.classList.remove("menu-active"));

            loadHomeTabContents();
            // console.log(menuLink, initialPageLoad());
            // contentDiv.append(initialPageLoad());
            break;
        case "wwdPage":
            loadWWDTabContents();
            console.log(menuLink, loadWWDTabContents());
            // contentDiv.append(loadWWDTabContents());
            // document.querySelector("#content").insertAdjacentElement("afterbegin", loadWWDTabContents());
            break;
        case "contactPage":
            loadContactTabContents();
            console.log(menuLink, loadContactTabContents());
            // contentDiv.append(loadContactTabContents());
            break;
        case "menuPage":
            loadMenuTabContents();
            console.log(menuLink, loadMenuTabContents());
            // contentDiv.append(loadMenuTabContents());
            break;
    }
    return contentDiv;
}

export {dropdownMenuLinkClicked}


/**
 function dropdownMenuLinkClicked() {
    let homePage = document.querySelector(".homePage");
    let wwdPage = document.querySelector(".wwdPage");
    let contactPage = document.querySelector(".contactPage");
    let menuPage = document.querySelector(".menuPage");

    homePage.addEventListener("click", () => {alert("home page")});
    wwdPage.addEventListener("click", () => {alert("wwd page")});
    contactPage.addEventListener("click", () => {alert("contact page")});
    menuPage.addEventListener("click", () => {alert("menu page")});
}
 */