import navbarSearchAndPinList from "@/layouts/components/navbar/navbarSearchAndPinList"
import themeConfig from "@/../themeConfig.js"
import colors from "@/../themeConfig.js"

const navMenuItems = [];

// const userDefaults = null
const userDefaults = {

  api_token: null,
  id: null,
  name: null,
  level: null,
}



const state = {
  AppActiveUser: localStorage.getItem('userInfo') != null ? JSON.parse(localStorage.getItem('userInfo')) : userDefaults,
  UserInfo: localStorage.getItem('userInfo') != null ? JSON.parse(localStorage.getItem('userInfo')) : null,
  navMenuItems: navMenuItems,
  isVerticalNavMenuActive: true,
  mainLayoutType: themeConfig.mainLayoutType || "vertical",
  navbarSearchAndPinList: navbarSearchAndPinList,
  reduceButton: themeConfig.sidebarCollapsed,
  verticalNavMenuWidth: "default",
  verticalNavMenuItemsMin: false,
  scrollY: 0,
  starredPages: navbarSearchAndPinList["pages"].data.filter((page) => page.is_bookmarked),
  theme: themeConfig.theme || "dark",
  themePrimaryColor: colors.primary,

  // Can be used to get current window with
  // Note: Above breakpoint state is for internal use of sidebar & navbar component
  windowWidth: null,
}

export default state
