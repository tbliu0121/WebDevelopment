import '../css/index.css';
import { mul } from './test'; // 只使用了test.js中的mul方法, 未使用sub方法~

function sum(...args) {
  return args.reduce((acc, cur) => acc + cur, 0);
}
// eslint-disable-next-line
console.log(sum(1, 2, 3));

// eslint-disable-next-line
console.log(mul(2, 3));