console.log("it is working...");

let name= "harry";
let greeting="Good morning"

console.log(name+" "+greeting);

let html="<h1>hello </h1>"+"<p>${name}</p>";
console.log(html);
html=html.concat("this","str2")
console.log(html);

console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html.indexOf("h"));
console.log(html.lastIndexOf("h"));
console.log(html.charAt(5));
console.log(html.endsWith("str2"));
console.log(html.includes("</h1>"));
console.log(html.substring(0,4));
console.log(html.slice(0,4));
console.log(html.split(">"));
console.log(html.replace('this','yuuuuu'));
console.log(html);
// document.body.innerHTML=html 
let fruit= "orange";
let fruit2="banana";

let myhtml=`hello ${name} <h1> this is my page </h1>
<p>you like ${fruit} and ${fruit2}
`
document.body.innerHTML=myhtml