import sub from "./sub"

console.log("index.js加载了");

import("./add").then(({add}) => {
  console.log(add(2, 3));
});

console.log(sub(1, 2));