import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import priceMaker from './modules/priceMaker';

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    mutations,
    modules: {
        priceMaker
    }
})
