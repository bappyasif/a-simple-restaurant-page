import {loadWWDTabContents} from "../tabbedPages/wwdTab.js";
function wwdPage() {
    let menusDiv = document.createElement("div");
    let menuIcon = document.createElement("img");

    menuIcon.src = "../images/icons/we-02.svg";
    menuIcon.classList.add("svgd");

    let textDiv = document.createElement("div");
    textDiv.textContent = "What We Do";

    menusDiv.classList.add("flexed");
    menusDiv.addEventListener("click", () => {
        document.querySelectorAll(".menu-active").forEach(item => item.classList.remove("menu-active"));
        menusDiv.classList.add("menu-active");
        loadWWDTabContents();
    });
    menusDiv.classList.add("menufied", "grow", "boxed", "mPage");
    menusDiv.append(menuIcon, textDiv);
    return menusDiv;
}

export {wwdPage}