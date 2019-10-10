class GuessingGame {
  constructor(min, max, arr, point) {
    this.min = min;
    this.max = max;
    this.arr = arr;
    this.point = point;
  }

  setRange(min, max) {
  let arr = [];
    for (let i = min; i <= max; i++) {
      arr.push(i);
    }
    this.min = min;
    this.max = max;
    this.arr = arr;
  }

  guess() {
    this.point = this.arr[Math.floor(this.arr.length / 2)];
    return this.point;
  }

  lower() {
    let arr = [],
        max = this.point;
    for (let i = this.min; i <= max; i++) {
        arr.push(i);
    }
    this.min = arr[0];
    this.max = arr[arr.length - 1];
    this.arr = arr;
  }

  greater() {
    let arr = [],
        min = this.point;
    for (let i = min; i <= this.max; i++) {
      arr.push(i);
    }
    this.min = arr[0];
    this.max = arr[arr.length - 1];
    this.arr = arr;
  }
}

module.exports = GuessingGame;
