const state = {
    totalPrice: 0
}

const getters = {
    getTotal(state) {
        return state.totalPrice;
    }
}

const mutations = { //同步, 执行者
    priceIncrement(state, price) {
        state.totalPrice += price;
    },
    priceDecrement(state, price) {
        state.totalPrice -= price;
    }
}

const actions = { //决策者, 异步, 中转
    increasePrice(context, price) {
        context.commit('priceIncrement', price)
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}