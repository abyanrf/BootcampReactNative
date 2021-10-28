//no1

function teriak() {
  return "hallo sanbers";
}
console.log(teriak());

// no2

var num1 = 12;
var num2 = 4;

function kalikan(num1, num2) {
  return num1 * num2;
}

hasilKalikan = kalikan(num1, num2);

console.log(hasilKalikan);

// no4

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogyakarta";
var hobby = "Gaming";

var introduce = (name, age, addres, hobby) => {
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${addres}, dan saya punya hobby yaitu ${hobby}`;
};

var perkenalan =introduce(name,age,address,hobby);

console.log(perkenalan);