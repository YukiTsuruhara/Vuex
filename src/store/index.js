import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //初期値
    count:0,
    users:[
      {id:1,name:'大谷',isVisible:true},
      {id:2,name:'筒香',isVisible:true},
      {id:3,name:'坂本',isVisible:true}
    ]
  },
  getters:{
    visibleUsers:state => state.users.filter(user => user.isVisible),
    getUserById: state => id => {
      return state.users.find(user => user.id === id)
    }
  },
  mutations: {//stateの状態を変更
    increment(state){
      state.count ++
    },
    addCount(state,payload){
      state.count += payload.value//基本的にオブジェクトで渡す
    }
  },
  actions: {
    incrementAction({ commit }){
      commit('increment')
    },
    addCountAction({ commit },payload){
      commit('addCount',payload)
    }
  },
  modules: {
    auth
  }
})
