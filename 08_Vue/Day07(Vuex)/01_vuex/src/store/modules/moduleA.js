export default {
  // module中的数据不要和store中的重复
  state: {
    name: "Jerry"
  },
  getters: {
    fullname01(state) {
      return state.name + ". Kim";
    },
    fullname02(state, getters) {
      return getters.fullname01 + ". Rose";
    },
    fullname03(state, getters, rootState) {
      // 通过rootState获取根store中的state
      // 同理, rootGetters可以获取store中的getters中的内容。
      return getters.fullname02 + ". " + rootState.info.name;
    }
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload;
    }
  },
  actions: {
    asynUpdateName(context) {  // Module中的context只针对模块自己的mutations
      setTimeout(() => {
        context.commit("updateName", "Ven De Kamp");
      }, 1000);
    }
  }
};