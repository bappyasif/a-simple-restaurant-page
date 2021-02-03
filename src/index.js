// when we run "npx webpack --watch" then we dont have to rerun webpack every time there is a change
console.log("restaurant page");
import { initialPageLoad } from "./js/init.js";
import {tabbedNavigation} from "./js/tabbedMenu.js";
let contentElem = document.querySelector("#content");
contentElem.appendChild(initialPageLoad());
contentElem.insertAdjacentElement("beforebegin", tabbedNavigation());
// console.log(tabbedNavigation().querySelector(".mPage"));
let menuPg = tabbedNavigation().querySelector(".mPage");
let contactPg = tabbedNavigation().querySelector(".cPage");
console.log(menuPg, contactPg);
menuPg.addEventListener("mouseover", () => {
    alert("menu page");
});
contactPg.addEventListener("click", () => {
    alert("contact page");
});

/**
 // import contentDiv from "./js/init.js";
import {initialPageLoad} from "./js/init.js";
let contentElem = document.querySelector("#content");
// console.log(initialPageLoad, initialPageLoad());
// contentElem.appendChild(contentDiv());
contentElem.appendChild(initialPageLoad());
 */