function basicTeenager(age) {

}

function teenager(age) {

}

function ageChecker(age) {

}

function ternaryTeenager(age) {
//if  (age > 12 && age < 20) { return "You are a teenager" }
//return "You are not a teenager"
return (age > 12 && age < 20) ?
"You are a teenager":
"You are not a teenager"
}

function switchAge(age) {
switch(age) {
  case 13:
  case 14:
  case 15:
    return "You are a teenager"
  default:
     return "You are not a teenager"
}
}


console.log(switchAge(12))
console.log(switchAge(19))
console.log(switchAge(20))