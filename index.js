var name = "Darshan Umapathi";
console.log(`${name}`); 

function ReverseString(value){
    let reverseString="";

    value.split("").forEach((char)=>{
        reverseString = char+reverseString;
    });

    return reverseString;
}

console.log(ReverseString("I am Here"));

var spiltme = "Hope your good!!!";
console.log(spiltme.split(" ")); // Return type is an array

//alert(name);
//TODO:Do things here
//Todo: 
var x = 16 + "Volvo";
console.log(x);
var n ;
var n1 = "";
console.log("Type of Name: ",typeof(name));
console.log("Type of X:",typeof(x));
console.log("Type of Number (decimal):",typeof(3.14));
console.log("Type of var n; :",typeof(n));
console.log("Type of empty :",typeof(n1));


var person = {name:"John", age:30, city:"New York"};
//Adding new value
var extended_value = {country:"US"};
var extended_value1 = {birth:"Earth"};
var extended_value12 = {birth:"Mars"};
person = {...person,...extended_value}

document.getElementById("home").innerHTML = person.country;
document.getElementById("home").innerHTML = Object.values(person) ;

// getting an array
var myarray = Object.values(person);
document.getElementById("home").innerHTML = myarray;

// strigyfy name:value pair is there
var stringy = JSON.stringify(person);
document.getElementById("home").innerHTML = stringy;

// Trying merge and assign operations 

Object.assign(person,extended_value1);
console.log(person);
console.log(Object.values(person));


//Interview Questions 
let i1= 0;
while(++i1<3) alert(i);

// let i2=0;
// while(i++<3) alert(i);

for (let i=0; i<11; i+2){
    console.log(i);
  }
