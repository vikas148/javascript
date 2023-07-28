let str ="python";

let links= document.links;
let href;

console.log(links);
Array.from(links).forEach(function(element){
    href =element.href; 
    if (href.includes(str)) {
        console.log(href);
    }
    // console.log(href);
});