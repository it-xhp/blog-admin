
const state = {
  collapsed: false
}

const getters = {
  collapsed: (state) => state.collapsed
}

const mutations = {
  taggleSideMenu(state) {
    state.collapsed = !state.collapsed
  },
  openSideMenu(state) {
    state.collapsed = false
  },
  closeSideMenu(state) {
    state.collapsed = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
