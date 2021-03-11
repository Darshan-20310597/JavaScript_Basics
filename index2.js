// Conversions in JS 
let num1 = "5";
let num2 = "5";
let num3 = num1+num2;

console.log(`${num3}`); // We get 55 


let num4 = Number(num1);
let num5 = Number(num2);
let num6 = num4+num5;

console.log(`${num6}`) // We get 10

// For string we use String(value to be converted)
let value = 6;
let con_value = String(value);
console.log(typeof con_value); // String 

// Always the operations happens from left to right 
console.log("$" + 4 + 5 ); // Result $45
console.log( 4 + 5 +"$" ); // 9$

let age = Number("an arbitrary string instead of a number");
//alert(age); // NaN, conversion failed uncomment and check Please note that null and undefined behave differently here: null becomes zero while undefined becomes NaN.


// let s1 = 0;
// while (true) {
//   let value = +prompt("Enter a number", '');
//   if (!value) break; // (*)
//   s1 += value;
// }
// alert( 'Sum: ' + s1 );  Uncomment and check while if and break working 

let o=2;
while(o){
    alert(o--);
}

let vals = 0;
while(true){
    let numberentered = prompt("Enter a number");
    if(numberentered>100)  {
        vals = numberentered;
    break;
    }
    } 
alert(vals);