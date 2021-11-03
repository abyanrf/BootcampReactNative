console.log("no1" + "\n");

const golden = () => {
  console.log("this is golden!!");
};

golden();

console.log("\n" + "no2");

const newFunction = function literal(firstName, lastName){
  return {
    firstName,
    lastName,
    fullName: function(){
      console.log(firstName + " " + lastName)
      return 
    }
  }
}

const person = newFunction("William", "Imoh");
console.log(person);
person.fullName();  

console.log("\n" + "no3");

const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!",
};

let { firstName, lastName, destination, occupation, spell } = newObject;

console.log(firstName, lastName, destination, occupation, spell);

console.log("\n" + "no4");

const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];

const combined =[...west,...east]

console.log(combined)

console.log('\n' + 'no 5');

const planet = "earth"
const view = "glass"
var before = 'Lorem ' + view + ' dolor sit amet, ' +  
    'consectetur adipiscing elit, ' + planet + ' do eiusmod tempor ' +
    'incididunt ut labore et dolore magna aliqua. Ut enim' +
    ' ad minim veniam'

let after = ` lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam`

console.log( before +'\n' );
console.log(after);
