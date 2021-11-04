const books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000}
]

function readBooks(time, book, callback) {
  console.log(`saya membaca buku ${books.name}`);
  setTimeout(() => {
    let sisaWaktu = 0;
    if (time <= books.timeSpent) {
      sisaWaktu = time - book.timeSpent;
      console.log(
        `saya sudah membaca ${books.name},sisa waktu saya ${sisaWaktu}`
      );
      callback(sisaWaktu);
    } else {
      console.log("waktu saya habis");
      callback(time);
    }
  }, books.timeSpent);
}

module.exports =readBooks