export default {
  // 还有一个问题就是template和js没有分开, 因此进化到app.vue
  template: `
    <div>
      <h3>{{msg}}</h3>
      <button>这是一个按钮</button>
      <h3>{{name}}</h3>
    </div>
  `,
  data() {
    return {
      msg: "Hello Vue~, I'm webpack~~",
      name: "tbliu"
    } 
  },
  methods: {
    bthClick() {
      //TODO, 见最终的vue文件内
    }
  }
}