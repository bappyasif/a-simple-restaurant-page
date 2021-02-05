import {dropdownMenuLinkClicked} from "../tabbedPages/ddClicked.js";
import {loadHomeTabContents} from "../tabbedPages/homeTab";
import {loadWWDTabContents} from "../tabbedPages/wwdTab.js";
import {loadContactTabContents} from "../tabbedPages/contactTab.js";
import {loadMenuTabContents} from "../tabbedPages/menuTab.js";
function showMenuLinks() {
    // hoverable dropdowns
    let hoverLinks = document.createElement("div");
    let ddContents = document.createElement("div");

    let hoverLink01 = document.createElement("a");
    let hoverLink02 = document.createElement("a");
    let hoverLink03 = document.createElement("a");
    let hoverLink04 = document.createElement("a");
    
    hoverLink01.textContent = "Home Page";
    hoverLink01.classList.add("homePage");
    hoverLink01.href = "#homePage";
    // hoverLink01.addEventListener("click", ()=>{alert("homepage")})
    
    hoverLink02.textContent = "What We Do Page";
    hoverLink02.classList.add("wwdPage");
    hoverLink02.href = "#wwdPage";
    // hoverLink02.addEventListener("click", () => {
    //     console.log(loadWWDTabContents());
    //     loadWWDTabContents();
    // });
    
    hoverLink03.textContent = "Contact Page";
    hoverLink03.classList.add("contactPage");
    hoverLink03.href = "#contactPage";
    // hoverLink03.addEventListener("click", () => console.log(loadContactTabContents()));
    
    hoverLink04.textContent = "Menu Page";
    hoverLink04.classList.add("menuPage");
    hoverLink04.href = "#menuPage";
    
    hoverLinks.classList.add("dropdown");
    ddContents.classList.add("dropdown-content");
    
    ddContents.append(hoverLink01, hoverLink02, hoverLink03, hoverLink04);
    hoverLinks.append(ddContents);
    return hoverLinks;
}

export {showMenuLinks}


/**
 function showMenuLinks() {
    // let contentDiv = document.querySelector(".content-div");
    // contentDiv.childNodes.forEach(item => item.textContent = "");
    
    // hoverable dropdowns
    let hoverLinks = document.createElement("div");
    let ddContents = document.createElement("div");

    let hoverLink01 = document.createElement("a");
    let hoverLink02 = document.createElement("a");
    let hoverLink03 = document.createElement("a");
    let hoverLink04 = document.createElement("a");
    
    hoverLink01.textContent = "Home Page";
    // hoverLinke01.id = "homePage";
    // hoverLink01.setAttribute("data-home");
    hoverLink01.classList.add("homePage");
    hoverLink01.href = "#Homepage";
    // hoverLink01.addEventListener("click", () => {
    //     dropdownMenuLinkClicked("homePage");
    // });
    // hoverLink01.href = dropdownMenuLinkClicked("homePage");
    
    hoverLink02.textContent = "What We Do Page";
    // hoverLinke02.id = "wwdPage";
    // hoverLink02.setAttribute("data-wwd");
    hoverLink02.classList.add("wwdPage");
    hoverLink02.href = "#WhatWeDoPage";
    
    hoverLink03.textContent = "Contact Page";
    // hoverLinke03.id = "contactPage";
    // hoverLink03.setAttribute("data-contact");
    hoverLink03.classList.add("contactPage");
    hoverLink03.href = "#ContactPage";
    
    hoverLink04.textContent = "Menu Page";
    // hoverLinke04.id = "menuPage";
    // hoverLink04.setAttribute("data-menu");
    hoverLink04.classList.add("menuPage");
    hoverLink04.href = "#MenuPage";
    
    hoverLinks.classList.add("dropdown");
    ddContents.classList.add("dropdown-content");
    
    ddContents.append(hoverLink01, hoverLink02, hoverLink03, hoverLink04);
    hoverLinks.append(ddContents);
    return hoverLinks;
}
 */