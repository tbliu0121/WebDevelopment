export default {
  // 将VUE实例中的数据和template抽离出来
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
      //TODO
    }
  }
}