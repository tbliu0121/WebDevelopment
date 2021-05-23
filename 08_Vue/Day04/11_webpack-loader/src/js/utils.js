function add(num1, num2) {
  return num1 + num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

// commonJS模块化标准语法
module.exports = {
  add,
  mul
}