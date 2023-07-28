console.log("okkk i am working......");
let a =document;
a=document.all;
a=document.body;
a=document.forms;
a=document.links
a=document.links[0].href
a=document.scripts
a=document.images[0]
console.log(a);





//web croller

let str ="video"
let links=document.links;

let href;

Array.from(links).forEach(function(element){
    href=element.href;
    if(href.includes(str)){
        console.log(href);
    }
    console.log(href);
})