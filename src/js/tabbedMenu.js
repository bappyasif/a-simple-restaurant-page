import {contactPage} from "./navigationTabs/contactPage.js";
import {menuPage} from "./navigationTabs/menuPage.js";
function tabbedNavigation() {
    let tabbedDiv = document.createElement("div");
    tabbedDiv.classList.add("flexed", "tabbed");
    tabbedDiv.append(contactPage(), menuPage());
    return tabbedDiv;
}
export {tabbedNavigation}


/**
 function tabbedNavigation() {
    let tabbedDiv = document.createElement("div");
    // tabbedDiv.textContent = "Menu Here";
    // tabbedDiv.style.display = "flex";
    // tabbedDiv.style.justifyContent = "space-around";
    // tabbedDiv.style.justifyContent = "space-between";
    tabbedDiv.classList.add("flexed", "tabbed");
    // tabbedDiv.style.height = "38px";
    tabbedDiv.append(contactPage(), menuPage());
    return tabbedDiv;
}
 */