console.log("its working.....");

let element=document.getElementById("me")
// element=element.childNodes
// element=element.parentNode
element.style.color="red"
element.innerText="updated inner text"
element.innerHTML="<h1>hello buddy</h1>"
// console.log(element);
// console.log(element.innerText);

element=document.getElementsByClassName("firstdiv")
// console.log(element.innerHTML);
// console.log(element[0].getElementsByClassName("child"));

let elems= document.getElementsByTagName('div')
// console.log(elems);

// elems.forEach(elements => {
//     console.log(elems);
// });

// Array.from(elems).forEach(elems=>{
//     console.log(elems);
// })

let cont= document.querySelector(".container");
// console.log(cont);  
// console.log(cont.childNodes);
// console.log(cont.children);  
// console.log(cont);  

// let nodeName=cont.childNodes[0].nodeName
// let nodeName=cont.childNodes[2].nodeType
// let nodeName=cont.childNodes[2].nodeType
// let nodeName=cont.firstChild
// let nodeName=cont.firstElementChild
// let nodeName=cont.lastChild
// let nodeName=cont.lastElementChild
// let nodeName=cont.childElementCount
// console.log(nodeName);


//creating an element by using javascript

let newelem= document.createElement('li')
newelem.className="newelm"
newelem.id="createdli"
newelem.setAttribute("title","mytitle");

var ul =  document.querySelector('ul');
newelem.innerText="hey i just created it...by using js"
ul.appendChild(newelem)


let text=document.createTextNode("new text node by js")
var eleg=document.getElementsByClassName("container")
console.log(eleg);

eleg[0].appendChild(text)



let elem2=document.createElement("h3")
elem2.className="elem2"
elem2.id="ele"
let tn=document.createTextNode("this is a create text node for elem2")
elem2.appendChild(tn)
text.replaceWith(elem2)