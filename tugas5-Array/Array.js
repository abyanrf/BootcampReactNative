// console.log("no1");

// let range = (startNum, finishNum) => {
//   var arrayData = [];
//   if (startNum === undefined || finishNum === undefined) {
//     return -1;
//   } else {
//     if (startNum < finishNum) {
//       for (i = startNum; i <= finishNum; i++) {
//         arrayData.push(i);
//       }
//       return arrayData;
//     } else {
//       for (i = finishNum; i <= startNum; i++) {
//         arrayData.push(i);
//       }
//     }
//     return arrayData.reverse();
//   }
// };

// // console.log(range(1, 10));

// console.log("no2");

// let rangeWithStep = (startNum, finishNum, step) => {
//   var arrayData = [];
//   if (startNum === undefined || finishNum === undefined) {
//     return -1;
//   } else {
//     if (startNum < finishNum) {
//       for (i = startNum; i <= finishNum; i += step) {
//         arrayData.push(i);
//       }
//       return arrayData;
//     } else {
//       for (i = finishNum; i <= startNum; i += step) {
//         arrayData.push(i);
//       }
//     }
//     return arrayData.reverse();
//   }
// };

// // console.log(rangeWithStep(1, 10, 2));

// console.log("no3");

// let sum = (startNum, finishNum, step) => {
//   var arrayData = [];
//   var jumlah = [];
//   if (step === undefined) {
//     for (i = startNum; i <= finishNum; i++) {
//       arrayData.push(i);
//       jumlah = arrayData.reduce((a, b) => a + b);
//     }
//     return jumlah;
//   } else {
//     if (startNum < finishNum) {
//       for (i = startNum; i <= finishNum; i += step) {
//         arrayData.push(i);
//         jumlah = arrayData.reduce((a, b) => a + b);
//       }
//       return jumlah;
//     } else {
//       for (i = startNum; i <= finishNum; i += step) {
//         arrayData.push(i);
//         arrayData.reverse();
//         jumlah = arrayData.reduce((a, b) => a + b);
//       }
//       return jumlah;
//     }
//   }
// };

// // console.log(sum(5,50,2));

// console.log("no 4");

// let dataHandling = () => {
//   var input = [
//     ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//     ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//     ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//     ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
//   ];
//   for (var i = 0; i < input.length; i++) {
//     console.log("nomor Id : " + input[i][0]);
//     console.log("nama lengkap : " + input[i][1]);
//     console.log("TTL :" + input[i][2] + " " + input[i][3]);
//     console.log("hobi : " + input[i][4] + "\n");
//   }
// };

console.log("no5");

var input = [
  "0001",
  "Roman Alamsyah",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];
// input.splice(4, 1, "Pria", "SMA Internasional Metro");

// console.log(input);

// var data = input[3];
// console.log(data);
// var data1 = data.split("/").join("-");
// console.log(data1);
// var bulan = data1.split("-");

// switch (bulan[1]) {
//   case "01":
//     console.log("januari");
//     break;
//   case "02":
//     console.log("febuari");
//     break;
//   case "03":
//     console.log("maret");
//     break;
//   case "04":
//     console.log("april");
//     break;
//   case "05":
//     console.log("mei");
//     break;
//   case "06":
//     console.log("juni");
//     break;
//   case "07":
//     console.log("juli");
//     break;
//   case "08":
//     console.log("agustus");
//     break;
//   case "09":
//     console.log("september");
//     break;
//   case "10":
//     console.log("oktober");
//     break;
//   case "11":
//     console.log("november");
//     break;
//   case "12":
//     console.log("desember");
//     break;

//   default:
//     break;
// }

// console.log(bulan.sort((a, b) => b - a));

// console.log(input[1].slice(0, 15));

function dataHandling2(input) {
  input.splice(4, 1, "Pria", "SMA Internasional Metro");
  console.log(input);
  var data = input[3];

  var data1 = data.split("/").join("-");

  var bulan = data1.split("-");

  switch (bulan[1]) {
    case "01":
      console.log("januari");
      break;
    case "02":
      console.log("febuari");
      break;
    case "03":
      console.log("maret");
      break;
    case "04":
      console.log("april");
      break;
    case "05":
      console.log("mei");
      break;
    case "06":
      console.log("juni");
      break;
    case "07":
      console.log("juli");
      break;
    case "08":
      console.log("agustus");
      break;
    case "09":
      console.log("september");
      break;
    case "10":
      console.log("oktober");
      break;
    case "11":
      console.log("november");
      break;
    case "12":
      console.log("desember");
      break;

    default:
      break;
  }

  console.log(bulan.sort((a, b) => b - a));
  console.log(data1);
  console.log(input[1].slice(0, 15));
}

dataHandling2(input);
