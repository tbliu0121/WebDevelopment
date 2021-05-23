export default {    // 类似于computed, 调用内部的方法不能加括号~
  counterSquare(state) {
    return state.counter * state.counter;
  },
  over20years(state) {
    return state.students.filter(stu => stu.age >= 20);
  },
  over20yearsLen(state, getters) {       //可以传入getters, 从而获取到其他方法的结果
    return getters.over20years.length;
  },
  overYears(state) {                     //getters内的方法不接受用户自定的参数, 如age~！！！
    return age => {                      //让方法返回一个函数, 让这个函数节接受一个参数。
      return state.students.filter(stu => stu.age >= age)
    };
  }
}