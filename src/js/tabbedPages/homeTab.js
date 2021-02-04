import {initialPageLoad} from "../init.js";

function loadHomeTabContents() {
    let contentDiv = document.querySelector(".content-div");
    contentDiv.childNodes.forEach(item => item.textContent = "");
    // contentDiv.append(initialPageLoad());
    initialPageLoad();
}
export {loadHomeTabContents}