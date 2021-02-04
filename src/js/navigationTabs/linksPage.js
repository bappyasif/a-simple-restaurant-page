function showMenuLinks() {
    // hoverable dropdowns
    let hoverLinks = document.createElement("div");
    let ddContents = document.createElement("div");

    let hoverLink01 = document.createElement("a");
    let hoverLink02 = document.createElement("a");
    let hoverLink03 = document.createElement("a");
    let hoverLink04 = document.createElement("a");
    
    hoverLink01.textContent = "Home Page";
    hoverLink01.href = "Home page"
    
    hoverLink02.textContent = "What We Do Page";
    hoverLink02.href = "What We Do Page";
    
    hoverLink03.textContent = "Contact Page";
    hoverLink03.href = "Contact Page";
    
    hoverLink04.textContent = "Menu Page";
    hoverLink04.href = "Menu Page";
    
    hoverLinks.classList.add("dropdown");
    ddContents.classList.add("dropdown-content");
    
    ddContents.append(hoverLink01, hoverLink02, hoverLink03, hoverLink04);
    hoverLinks.append(ddContents);
    return hoverLinks;
}

export {showMenuLinks}