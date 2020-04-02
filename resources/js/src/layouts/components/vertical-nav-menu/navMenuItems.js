/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
==========================================================================================*/

import adminMenu from '../../../adminMenu'
import siswaMenu from '../../../siswaMenu'
import guruMenu from '../../../guruMenu'
import state from '../../../store/state'

let userInfo = localStorage.getItem('userInfo')
console.log(userInfo)
var x = 'non'
if (userInfo != null) {

  x = JSON.parse(userInfo).level
}

const showMenu = (x) => {

  if (x == 'SISWA') {
    return siswaMenu
  } else if (x == 'ADMIN') {
    return adminMenu
  }
  else {
    return []
  }

}
var menu = showMenu(x);
export default menu




// const adminMenu = [
//   {
//     url: "/dashboard",
//     name: "Homeasa",
//     slug: "dashboard",
//     icon: "HomeIcon",
//   },
//   {
//     url: "/page2",
//     name: "Page 2",
//     slug: "page2",
//     icon: "FileIcon",
//   },
//   {
//     url: "/page2",
//     name: "Page 2",
//     slug: "page2",
//     icon: "FileIcon",
//   }
// ]

// export default adminMenu
