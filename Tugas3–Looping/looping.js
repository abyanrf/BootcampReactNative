console.log("-no1-");
console.log("loopingke1");
var i = 2;

while (i <= 20) {
  console.log(i + ". I love coding");
  i += 2;
}

console.log("looping ke 2");

var x = 20;
while (x >= 2) {
  console.log(x + ". I will become a mobile developer");
  x -= 2;
}

console.log("-no2-");

for (i = 1; i <= 20; i++) {
  if (i == 3 || i == 9 || i == 15) {
    console.log(i + "-" + "I love coding");
  } else if (i % 2 == 1) {
    console.log(i + "-" + "santai");
  } else if (i % 2 == 0) {
    console.log(i + "-" + "berkualitas");
  }
}

console.log("-no3-");
var p = 8;
var l = 4;
var i = 1;
var j = 1;
var pagar = "";

while (j <= l) {
  while (i <= p) {
    pagar += "#";
    i++;
  }
  console.log(pagar);
  pagar = "";
  i = 1;
  j++;
}

console.log("-no4-");

var total = 7;
var output = "";
for (var i = 1; i <= total; i++) {
  for (var j = 1; j <= i; j++) {
    output += "#";
  }
  console.log(output);
  output = "";
}

console.log("-no5-");
var panjang = 8;
var lebar = 8;
var papan = "";

for (x = 1; x <= lebar; x++) {
  if (x % 2 == 1) {
    for (y = 1; y <= panjang; y++) {
      if (y % 2 == 1) {
        papan += " ";
      } else {
        papan += "#";
      }
    }
  } else {
    for (y = 1; y <= panjang; y++) {
      if (y % 2 == 1) {
        papan += "#";
      } else {
        papan += " ";
      }
    }
  }
  console.log(papan);
  papan = "";
}
