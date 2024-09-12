const ftoc = function(tempC) {
  let celsious = (tempC-32)*5/9;
  return parseFloat(celsious.toFixed(1));
}

const ctof = function(tempF) {
  let fahrenheit = (tempF*9/5)+32;
  return parseFloat(fahrenheit.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
