class Animal {
  constructor(name) {
    this.name = name;
    this.legs = 4;
    this.cold_blooded = false;
  }
  get cname() {
    return this.name;
  }
}

console.log("release 0");
const sheep = new Animal("shaun");

console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);
// console.log(sheep.cname);

console.log("\n" + "release 1");

class Ape extends Animal {
  constructor(name) {
    super(name);
    this.legs = 2;
  }
  yell() {
    console.log("auooooo");
  }
}

const sungokong = new Ape("kera sakti");
console.log(sungokong.name);
console.log(sungokong.legs);
console.log(sungokong.cold_blooded);
sungokong.yell();

console.log("\n");

class Frog extends Animal {
  constructor(name) {
    super(name);
    this.cold_blooded = true;
  }
  jump() {
    console.log("hop hop");
  }
}

const kodok = new Frog("buduk");
console.log(kodok.name); // "buduk"
console.log(kodok.legs); // 4
console.log(kodok.cold_blooded); // true
kodok.jump(); // "hop hop"

console.log("\n" + "no 2");

class Clock {
  constructor({ template }) {
    this.timer;
    this.format = template;
  }
  render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    var output = this.format
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);
    console.log(output);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(this.render.bind(this), 1000);
  }
}

var clock = new Clock({ template: "h:m:s" });
clock.start();
