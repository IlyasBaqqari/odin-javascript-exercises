const leapYears = function(y) {
  return (y % 4 === 0 && (y % 100 != 0 || y % 400 === 0)) ? true : false;
};

// Do not edit below this line
module.exports = leapYears;
