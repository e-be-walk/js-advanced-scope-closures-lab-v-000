function produceDrivingRange(blockRange) {
  return function(start, end) {
    let dif = Math.abs(parseInt(start, 10) - parseInt(end, 10))
    if ((dif - blockRange) < 0)
      return `within range by ${Math.abs(dif - blockRange)}`;
    else {
      return `${Math.abs(dif - blockRange)} blocks out of range`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function(bill) {
    return Math.abs(percentage * bill)
  }
};

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
