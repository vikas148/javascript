console.log("hiii i am working good....");
let name="skillf";
// console.log("happy birthd"+ " "+ name);


//greeting by using function

function greet(name){
    console.log("happy birthday "+ name);
}

// greet(name)

let greet_adv=function (name,thank="thank you"){
   return `console.log("happy birthday") ${name} and ${thank} for party`;
}

console.log(typeof(greet_adv));

const myobj={
name:"skillf",
game: function(){
    return"gta"
}

}
console.log(myobj);
console.log(myobj.game());