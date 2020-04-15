

import siswaMenu from './siswaMenu.js'
import adminMenu from './adminMenu.js'
import guruMenu from './guruMenu.js'


const actions = {

  // /////////////////////////////////////////////
  // COMPONENTS
  // /////////////////////////////////////////////

  // Vertical NavMenu
  updateVerticalNavMenuWidth({ commit }, width) {
    commit('UPDATE_VERTICAL_NAV_MENU_WIDTH', width)
  },

  // VxAutoSuggest
  updateStarredPage({ commit }, payload) {
    commit('UPDATE_STARRED_PAGE', payload)
  },

  // The Navbar
  arrangeStarredPagesLimited({ commit }, list) {
    commit('ARRANGE_STARRED_PAGES_LIMITED', list)
  },
  arrangeStarredPagesMore({ commit }, list) {
    commit('ARRANGE_STARRED_PAGES_MORE', list)
  },

  // /////////////////////////////////////////////
  // UI
  // /////////////////////////////////////////////

  toggleContentOverlay({ commit }) {
    commit('TOGGLE_CONTENT_OVERLAY')
  },
  updateTheme({ commit }, val) {
    commit('UPDATE_THEME', val)
  },

  // /////////////////////////////////////////////
  // User/Account
  // /////////////////////////////////////////////
  updateApiToken({ commit }, val) {
    commit('UPDATE_API_TOKEN', val)
  },
  updateLoginStatus({ commit }, val) {
    commit('UPDATE_LOGIN_STATUS', val)
  },
  updateMenuItem({ commit }, val) {
    console.log(val)
    if (val == "SISWA") {
      console.log('set siswa')
      commit('UPDATE_MENU_ITEM', siswaMenu)

    }
    else if (val == "ADMIN") {
      commit('UPDATE_MENU_ITEM', adminMenu)
    }
    else if (val == "GURU") {
      commit('UPDATE_MENU_ITEM', guruMenu)

    }

  },

  updateUserInfo({ commit }, payload) {
    commit('UPDATE_USER_INFO', payload)
  },

}

export default actions
