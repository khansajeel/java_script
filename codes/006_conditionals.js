let a = prompt("Hey whats you age?"); //prompt takes everything as a string
console.log(typeof a)
let age = Number.parseInt(a); // Converting the string to a number
console.log(typeof age)
if(age<0){
  alert("This is an invalid age");
}
else if(a<9){
  alert("you a kid");
}
else if(a>=9 && a<18){
  alert("focus on studies");
}
else{
  alert("you are eligible");
}

console.log("are you getting a dl:---->", (a>18?"yes":"no"));


let age2 = prompt("What is your age?")
switch (age2) {
  case '12':
    console.log("Your age is 12")
    break
  case '13':
    console.log("Your age is 13")
    break
  case '14':
    console.log("Your age is 14")
    break
  case '15':
    console.log("Your age is 15")
    break
  default:
    console.log("Your age is not special")
}