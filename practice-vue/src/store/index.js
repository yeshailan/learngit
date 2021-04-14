import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

console.log(Vuex);

//全局状态对象（不变的，不能直接修改，需要通过计算改变）；
const state = {
    name: "全局数据",
    a: 0,
    b: 50
}
//计算属性
const getters = {
    count(st){
        return st.a + st.b;
    }
}
//触发状态（对状态进行修改）
const mutations = {
    modifyName(st,param){
        state.name = st.name;
        // console.log(st,param);
    }
}

//事件操作，执行事件并且执行触发状态
const actions = {
    selectCity(context,param){
        context.commit('modifyName',param);
    }
}
// mapState;
// mapMutations;
// mapGetters;
// mapActions

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})