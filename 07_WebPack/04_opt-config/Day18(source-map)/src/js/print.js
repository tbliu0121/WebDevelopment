console.log("print.js被加载");

function print() {
  const content = "Hello Hot Module Replace(HMR)";
  console.log(content)();
}

export default print;
