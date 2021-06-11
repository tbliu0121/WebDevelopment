import '../css/index.css';
import { mul } from './test'; // 只使用了test.js中的mul方法, 未使用sub方法~

function sum(...args) {
  return args.reduce((acc, cur) => acc + cur, 0);
}
// eslint-disable-next-line
console.log(sum(1, 2, 3));

// eslint-disable-next-line
console.log(mul(2, 3));

/**             注 意
 *   - eslint无法识别BOM等全局对象
 *   - 需要在package.json修改eslintConfig配置
 *     "env": {
 *       "browser": true
 *     }
 *   - 如果需要支持nodejs端全局变量, 加上"nodejs": true即可。
 *
 *   - sw(service worker)代码必须运行在服务器上
 *     - 01 用nodejs写一个服务器代码
 *     - 02 npm i srve -g   // 全局安装serve
 *          serve -s build  // 会启动一个服务器, 将build目录下的资源做为静态资源暴露出去。
*/
// 注册serviceWorker; 同时需要处理兼容性问题。
// 当网络断开之后, 下面的内容会失效, 会去之前注册过的serviceworker中读取资源。
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // 注册servie-worker; service-worker文件是由servicebox这个插件生成的。
    // 注册的文件会通过构建后的文件生成
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        console.log('ServiecerWorker 注册成功');
      })
      .catch(() => {
        console.log('Service worker 注册失败');
      });
  });
}
