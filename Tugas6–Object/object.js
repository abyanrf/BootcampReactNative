console.log('no 1');
console.log("\n");

var input =  [["Abduh", "Muhamad", "male", 1992], ["Ahmad", "Taufik", "male", 1985]]

function arrayToObject(input) {
    var now = new Date();
    var thisYear =now.getFullYear()
    var temp = thisYear -  input[0][3]
    var umur =temp ? temp : 'Invalid Birth Year'
        
    
    var temp1 = thisYear - input[1][3]
    var umur1 =temp1 ? temp1 : 'Invalid Birth Year'

  var people = {};
  (people.firstname = input[0][0]),
    (people.lastname = input[0][1]),
    (people.gender = input[0][2]),
    people.age =umur


  var people2 = {};
  (people2.firstname = input[1][0]),
    (people2.lastname = input[1][1]),
    (people2.gender = input[1][2]),
    people2.age=umur1

  console.log("1.", people.firstname, " ", people.lastname, " : ", people);
  console.log("\n");
  console.log("2.", people2.firstname, " ", people2.lastname, " : ", people2);
  
}
arrayToObject(input);

console.log("\n");
console.log('no2 ');
console.log("\n");
function shoppingTime(memberId, money){
    changeMoney: 0 
    var stok=[
        {
            nama:'sepatu Stacattu ',
            harga:1500000
        },
        {
            nama:'baju zoro',
            harga:500000
        },
        {
            nama:'baju H&N',
            harga:250000
        },
        {
            nama:'uniklohh',
            harga:175000
        },
        {
            nama:'casing hp',
            harga:50000
        }
    ]

    if(memberId === undefined){
        console.log('“Mohon maaf, toko X hanya berlaku untuk member saja”');
    }if(money <= 50000){
        console.log('“Mohon maaf, uang tidak cukup”');
    }for(i=0;i<stok.length;i++){
        changeMoney= money - stok[0].harga - stok[1].harga - stok[2].harga - stok[3].harga - stok[4].harga 
    }
    console.log('memberId :'+ memberId);
    console.log('money : ' + money);
    console.log('changeMoney : ' + changeMoney);
}
shoppingTime('1820RzKrnWn08', 2475000)
console.log("\n");

console.log('no4');

