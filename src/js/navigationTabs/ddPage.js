import {dropdownMenuLinkClicked} from "../tabbedPages/ddClicked.js";
function routingPages() {
    let aTags = [];

    Array.from(document.querySelectorAll("a")).forEach(item=>{
        aTags.push(item.href.split("#")[1]);
        item.addEventListener("click", () => {
            // dropdownMenuLinkClicked(item.href.split("#")[1]);
            return dropdownMenuLinkClicked(item.href.split("#")[1]);
            console.log(item);
        });
    });

    console.log(aTags);
}
export {routingPages}


/**
 function routingPages() {
    let aTags = [];
    // document.querySelectorAll("a").forEach(item=>aTags.push(item.href));
    Array.from(document.querySelectorAll("a")).forEach(item=>aTags.push(item.href));
    // let links = document.querySelectorAll("a");
    // for(let i = 0; i < links.length; i++) aTags.push(links[i].href);
    console.log(aTags);
    // return aTags;
    let hrefs = [];
    aTags.forEach(el=> hrefs.push(el.split("#")[1]));
    console.log(hrefs);
    
    hrefs.forEach(el => {
        
    })
}
 */