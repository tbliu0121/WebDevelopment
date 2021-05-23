// tsc 01_compileOption.ts -w
// 表示一次编译后开始动态监视文件(无需多次手动编译); 但是只针对当前文件。
// __FINAL__: 在项目下设置一个tsconfig.json配置文件(即使配置为空可以), 然后通过tsc一个命令即可编译所有的ts文件。
// 配置了对应的配置文件后, 使用tsc -w会持续监视所有的ts文件。
// tsconfig.json是可以写注释的！！！正常的JSON文件是不允许写注释的。
console.log("Hello TS compile option~");
console.log("Hello Typescript");
const MAX_SIZE = 1024;
const price = 25;

const PATH = "/feedback/add"

