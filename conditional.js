console.log("no 5");

console.log("if-else");
var nama = "abyan";
var peran = "Guard";

if (!nama) {
  console.log("nama harus di isi");
}
if (!peran) {
  console.log(`hai ${nama},pilih peran mu untuk memulai game `);
}
if (peran == "Penyihir") {
  console.log(`Selamat datang di Dunia Werewolf,${nama}`);
  console.log(
    `Halo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`
  );
} else if (peran == "Guard") {
  console.log(`Selamat datang di Dunia Werewolf,${nama}`);
  console.log(
    `Halo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`
  );
} else if (peran == "WereWolf") {
  console.log(`Selamat datang di Dunia Werewolf,${nama}`);
  console.log(`Halo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!`);
}

console.log("switch case");

var hari = 21;
var bulan = 6;
var tahun = 1945;
var bulanStr = console.log("");

switch (bulan) {
  case 1:
    bulanStr = "januari";
    break;
  case 2:
    bulanStr = "febuari";
    break;
  case 3:
    bulanStr = "maret";
    break;
  case 4:
    bulanStr = "april";
    break;
  case 5:
    bulanStr = "mei";
    break;
  case 6:
    bulanStr = "juni";
    break;
  case 7:
    bulanStr = "juli";
    break;
  case 8:
    bulanStr = "agustus";
    break;
  case 9:
    bulanStr = "september";
    break;
  case 10:
    bulanStr = "oktober";
    break;
  case 11:
    bulanStr = "november";
    break;
  case 12:
    bulanStr = "desember";
    break;

  default:
    break;
}

console.log(`${hari} ${bulanStr} ${tahun}`);