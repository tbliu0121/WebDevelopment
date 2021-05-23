import {INCREMENT, DECREMENT, INCREMENT_N, ADD_STUDENT, CHANGE_INFO} from "./mutations-type.js"

export default  {  // 方法, 类似于methods; 必须是同步操作
  [INCREMENT](state) {                   //有一个state参数会自动被传入
    state.counter++;
  },
  [DECREMENT](state) {
    state.counter--;
  },
  // incrementN(state, n) {              //mutation中的方法可以接受用户传入的自定义参数！和getters下的不同！
  //   state.counter += n;
  // },
  [INCREMENT_N](state, payload) {        //另一种接受数据的方式
    state.counter += payload.N;
  },
  [ADD_STUDENT](state, stu) {           
    state.students.push(stu);
  },
  [CHANGE_INFO](state) {
    state.info.name = "Utnapishtim";
    /**高版本已经把下面的两个方法变成了响应式的了？？ */
    //不是在state中定义的不在响应式系统之内; 尽管可以加进去~但是如果有其他的响应式语句, 则会被刷新出来哦~
    // state.info["city"] = "Los Angeles";  
    delete state.info.name;

    Vue.set(state.info, "address", "Chicago");  //响应式方法
    // Vue.delete(state.info.name);                //响应式删除, 会报错。。。。
  }
}