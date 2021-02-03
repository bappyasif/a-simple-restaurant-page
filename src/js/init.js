let imageDiv = document.querySelector(".image-div");
let descDiv = document.querySelector(".desc-div");
let contentDiv = document.querySelector(".content-div");
// let contentElem = document.querySelector("#content");

function initialPageLoad() {
    let imageEl = document.createElement("img");
    imageEl.src = "../images/example.jpg";
    imageEl.alt = "restaurant example";
    imageEl.classList.add("img");
    imageDiv.append(imageEl);
    let descEl = document.createElement("p");
    descEl.textContent = `
    Everyone has a favorite restaurant that he or she loves to eat at. 
    The best restaurant to go to in Altoona is The Olive Garden. 
    This peaceful place has the most delicious food for all the Italian food lovers out there. 
    The Olive Garden is the most exquisite place to eat and is truly the finest restaurant in town.
    `;
    descDiv.append(descEl);
    contentDiv.append(imageDiv, descDiv);
    return contentDiv;
}

export {initialPageLoad}