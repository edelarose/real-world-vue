import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/store/modules/user'
import * as event from '@/store/modules/event'
import * as notification from '@/store/modules/notification'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    event,
    notification,
  },
  state: {
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  }
})

console.info(store)

export default store;