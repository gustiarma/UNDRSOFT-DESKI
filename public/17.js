(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/Chat.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatContact_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatContact.vue */ "./resources/js/src/views/apps/chat/ChatContact.vue");
/* harmony import */ var _ChatLog_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatLog.vue */ "./resources/js/src/views/apps/chat/ChatLog.vue");
/* harmony import */ var _ChatNavbar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatNavbar.vue */ "./resources/js/src/views/apps/chat/ChatNavbar.vue");
/* harmony import */ var _UserProfile_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserProfile.vue */ "./resources/js/src/views/apps/chat/UserProfile.vue");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@/store/chat/moduleChat.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      active: true,
      isHidden: false,
      searchContact: "",
      activeProfileSidebar: false,
      activeChatUser: null,
      userProfileId: -1,
      typedMessage: "",
      isChatPinned: false,
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.70
      },
      clickNotClose: true,
      isChatSidebarActive: true,
      isLoggedInUserProfileView: false
    };
  },
  watch: {
    windowWidth: function windowWidth() {
      this.setSidebarWidth();
    }
  },
  computed: {
    chatLastMessaged: function chatLastMessaged() {
      var _this = this;

      return function (userId) {
        return _this.$store.getters['chat/chatLastMessaged'](userId);
      };
    },
    chatUnseenMessages: function chatUnseenMessages() {
      var _this2 = this;

      return function (userId) {
        var unseenMsg = _this2.$store.getters['chat/chatUnseenMessages'](userId);

        if (unseenMsg) return unseenMsg;
      };
    },
    activeUser: function activeUser() {
      return this.$store.state.AppActiveUser;
    },
    getStatusColor: function getStatusColor() {
      var _this3 = this;

      return function (isActiveUser) {
        var userStatus = _this3.getUserStatus(isActiveUser);

        if (userStatus == "online") {
          return "success";
        } else if (userStatus == "do not disturb") {
          return "danger";
        } else if (userStatus == "away") {
          return "warning";
        } else {
          return "grey";
        }
      };
    },
    chatContacts: function chatContacts() {
      return this.$store.getters['chat/chatContacts'];
    },
    contacts: function contacts() {
      return this.$store.getters['chat/contacts'];
    },
    searchQuery: {
      get: function get() {
        return this.$store.state.chat.chatSearchQuery;
      },
      set: function set(val) {
        this.$store.dispatch('chat/setChatSearchQuery', val);
      }
    },
    isActiveChatUser: function isActiveChatUser() {
      var _this4 = this;

      return function (userId) {
        return userId == _this4.activeChatUser;
      };
    },
    windowWidth: function windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  methods: {
    getUserStatus: function getUserStatus(isActiveUser) {
      // return "active"
      return isActiveUser ? this.$store.state.AppActiveUser.status : this.contacts[this.activeChatUser].status;
    },
    closeProfileSidebar: function closeProfileSidebar(value) {
      this.activeProfileSidebar = value;
    },
    updateActiveChatUser: function updateActiveChatUser(contactId) {
      this.activeChatUser = contactId;

      if (this.$store.getters['chat/chatDataOfUser'](this.activeChatUser)) {
        this.$store.dispatch('chat/markSeenAllMessages', contactId);
      }

      var chatData = this.$store.getters['chat/chatDataOfUser'](this.activeChatUser);
      if (chatData) this.isChatPinned = chatData.isPinned;else this.isChatPinned = false;
      this.toggleChatSidebar();
      this.typedMessage = '';
    },
    showProfileSidebar: function showProfileSidebar(userId) {
      var openOnLeft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.userProfileId = userId;
      this.isLoggedInUserProfileView = openOnLeft;
      this.activeProfileSidebar = !this.activeProfileSidebar;
    },
    sendMsg: function sendMsg() {
      if (!this.typedMessage) return;
      var payload = {
        isPinned: this.isChatPinned,
        'msg': {
          'textContent': this.typedMessage,
          'time': String(new Date()),
          'isSent': true,
          'isSeen': false
        },
        'id': this.activeChatUser
      };
      this.$store.dispatch('chat/sendChatMessage', payload);
      this.typedMessage = '';
      this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
    },
    toggleIsChatPinned: function toggleIsChatPinned(value) {
      this.isChatPinned = value;
    },
    setSidebarWidth: function setSidebarWidth() {
      if (this.windowWidth < 1200) {
        this.isChatSidebarActive = this.clickNotClose = false;
      } else {
        this.isChatSidebarActive = this.clickNotClose = true;
      }
    },
    toggleChatSidebar: function toggleChatSidebar() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!value && this.clickNotClose) return;
      this.isChatSidebarActive = value;
    }
  },
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a,
    ChatContact: _ChatContact_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    UserProfile: _UserProfile_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ChatNavbar: _ChatNavbar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ChatLog: _ChatLog_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    this.$store.registerModule('chat', !(function webpackMissingModule() { var e = new Error("Cannot find module '@/store/chat/moduleChat.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    this.$store.dispatch('chat/fetchContacts');
    this.$store.dispatch('chat/fetchChatContacts');
    this.$store.dispatch('chat/fetchChats');
    this.setSidebarWidth();
  },
  beforeDestroy: function beforeDestroy() {
    this.$store.unregisterModule('chat');
  },
  mounted: function mounted() {
    this.$store.dispatch("chat/setChatSearchQuery", "");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    contact: {
      type: Object,
      required: true
    },
    isActiveChatUser: {
      type: Boolean
    },
    lastMessaged: {
      type: String,
      "default": ""
    },
    showLastMsg: {
      type: Boolean,
      "default": false
    },
    unseenMsg: {
      type: Number,
      "default": 0
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  computed: {
    chatData: function chatData() {
      return this.$store.getters['chat/chatDataOfUser'](this.userId);
    },
    activeUserImg: function activeUserImg() {
      return this.$store.state.AppActiveUser.photoURL;
    },
    senderImg: function senderImg() {
      var _this = this;

      return function (isSentByActiveUser) {
        if (isSentByActiveUser) return _this.$store.state.AppActiveUser.photoURL;else return _this.$store.getters['chat/contact'](_this.userId).photoURL;
      };
    },
    hasSentPreviousMsg: function hasSentPreviousMsg() {
      return function (last_sender, current_sender) {
        return last_sender == current_sender;
      };
    }
  },
  methods: {
    isSameDay: function isSameDay(time_to, time_from) {
      var date_time_to = new Date(Date.parse(time_to));
      var date_time_from = new Date(Date.parse(time_from));
      return date_time_to.getFullYear() === date_time_from.getFullYear() && date_time_to.getMonth() === date_time_from.getMonth() && date_time_to.getDate() === date_time_from.getDate();
    },
    toDate: function toDate(time) {
      var locale = "en-us";
      var date_obj = new Date(Date.parse(time));
      var monthName = date_obj.toLocaleString(locale, {
        month: 'short'
      });
      return date_obj.getDate() + ' ' + monthName;
    },
    scrollToBottom: function scrollToBottom() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.$parent.$el.scrollTop = _this2.$parent.$el.scrollHeight;
      });
    }
  },
  updated: function updated() {
    this.scrollToBottom();
  },
  mounted: function mounted() {
    this.scrollToBottom();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    userId: {
      type: Number,
      required: true
    },
    isPinnedProp: {
      type: Boolean,
      required: true
    },
    isSidebarCollapsed: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    isPinnedLocal: {
      get: function get() {
        return this.isPinnedProp;
      },
      set: function set(val) {
        var _this = this;

        var chatData = this.$store.getters['chat/chatDataOfUser'](this.userId);

        if (chatData) {
          var payload = {
            id: this.userId,
            value: val
          };
          this.$store.dispatch('chat/toggleIsPinned', payload).then(function () {
            _this.$emit('toggleIsChatPinned', val);
          })["catch"](function (err) {
            console.error(err);
          });
        } else {
          this.$emit('toggleIsChatPinned', val);
        }
      }
    },
    userDetails: function userDetails() {
      return this.$store.getters['chat/contact'](this.userId);
    },
    getStatusColor: function getStatusColor() {
      var _this2 = this;

      return function (isActiveUser) {
        var userStatus = _this2.getUserStatus(isActiveUser);

        if (userStatus == "online") {
          return "success";
        } else if (userStatus == "do not disturb") {
          return "danger";
        } else if (userStatus == "away") {
          return "warning";
        } else {
          return "grey";
        }
      };
    }
  },
  methods: {
    getUserStatus: function getUserStatus(isActiveUser) {
      return isActiveUser ? this.$store.state.AppActiveUser.status : this.userDetails.status;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    userId: {
      type: Number,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    },
    isLoggedInUser: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      counterDanger: false,
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    };
  },
  computed: {
    chatUser: function chatUser() {
      return this.$store.getters['chat/chatUser'](this.userId);
    },
    activeLocal: {
      get: function get() {
        return this.active;
      },
      set: function set(value) {
        this.$emit('closeProfileSidebar', value);
      }
    },
    about: {
      get: function get() {
        return this.chatUser.about;
      },
      set: function set(value) {
        this.$store.dispatch('updateUserInfo', {
          about: value
        });
      }
    },
    status: {
      get: function get() {
        return this.chatUser.status;
      },
      set: function set(value) {
        this.$store.dispatch('updateUserInfo', {
          status: value
        });
      }
    },
    statusColor: function statusColor() {
      var userStatus = this.chatUser.status;

      if (userStatus == "online") {
        return "success";
      } else if (userStatus == "do not disturb") {
        return "danger";
      } else if (userStatus == "away") {
        return "warning";
      } else {
        return "grey";
      }
    }
  },
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n    ╷\n243 │ @import \"@sass/vuexy/apps/chat.scss\";\n    │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n    ╵\n  D:\\MASTER PROJECT\\SOFTWAREHOUSE\\ProjectDeski\\ProjectDeski-BackendNew\\resources\\js\\src\\views\\apps\\chat\\Chat.vue 243:9  root stylesheet");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=template&id=9701a608&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/Chat.vue?vue&type=template&id=9701a608& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "border border-solid d-theme-border-grey-light rounded relative overflow-hidden",
      attrs: { id: "chat-app" }
    },
    [
      _c(
        "vs-sidebar",
        {
          staticClass: "items-no-padding",
          attrs: {
            parent: "#chat-app",
            "click-not-close": _vm.clickNotClose,
            "hidden-background": _vm.clickNotClose,
            id: "chat-list-sidebar"
          },
          model: {
            value: _vm.isChatSidebarActive,
            callback: function($$v) {
              _vm.isChatSidebarActive = $$v
            },
            expression: "isChatSidebarActive"
          }
        },
        [
          _c("user-profile", {
            staticClass: "user-profile-container",
            attrs: {
              active: _vm.activeProfileSidebar,
              userId: _vm.userProfileId,
              isLoggedInUser: _vm.isLoggedInUserProfileView
            },
            on: { closeProfileSidebar: _vm.closeProfileSidebar }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "chat__profile-search flex p-4" },
            [
              _c(
                "div",
                { staticClass: "relative inline-flex" },
                [
                  _vm.activeUser.photoURL
                    ? _c("vs-avatar", {
                        staticClass: "m-0 border-2 border-solid border-white",
                        attrs: { src: _vm.activeUser.photoURL, size: "40px" },
                        on: {
                          click: function($event) {
                            _vm.showProfileSidebar(
                              Number(_vm.activeUser.uid),
                              true
                            )
                          }
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", {
                    staticClass:
                      "h-3 w-3 border-white border border-solid rounded-full absolute right-0 bottom-0",
                    class: "bg-" + _vm.getStatusColor(true)
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "w-full mx-5 input-rounded-full",
                attrs: {
                  "icon-no-border": "",
                  icon: "icon-search",
                  "icon-pack": "feather",
                  placeholder: "Search or start a new chat"
                },
                model: {
                  value: _vm.searchQuery,
                  callback: function($$v) {
                    _vm.searchQuery = $$v
                  },
                  expression: "searchQuery"
                }
              }),
              _vm._v(" "),
              _c("feather-icon", {
                staticClass: "md:inline-flex lg:hidden -ml-3 cursor-pointer",
                attrs: { icon: "XIcon" },
                on: {
                  click: function($event) {
                    return _vm.toggleChatSidebar(false)
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("vs-divider", { staticClass: "d-theme-border-grey-light m-0" }),
          _vm._v(" "),
          _c(
            "VuePerfectScrollbar",
            {
              key: _vm.$vs.rtl,
              staticClass: "chat-scroll-area pt-4",
              attrs: { settings: _vm.settings }
            },
            [
              _c("div", { staticClass: "chat__chats-list mb-8" }, [
                _c("h3", { staticClass: "text-primary mb-5 px-4" }, [
                  _vm._v("Chats")
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "chat__active-chats bordered-items" },
                  _vm._l(_vm.chatContacts, function(contact, index) {
                    return _c(
                      "li",
                      {
                        key: index,
                        staticClass: "cursor-pointer",
                        on: {
                          click: function($event) {
                            return _vm.updateActiveChatUser(contact.uid)
                          }
                        }
                      },
                      [
                        _c("chat-contact", {
                          attrs: {
                            showLastMsg: "",
                            contact: contact,
                            lastMessaged: _vm.chatLastMessaged(contact.uid)
                              .time,
                            unseenMsg: _vm.chatUnseenMessages(contact.uid),
                            isActiveChatUser: _vm.isActiveChatUser(contact.uid)
                          }
                        })
                      ],
                      1
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "chat__contacts" }, [
                _c("h3", { staticClass: "text-primary mb-5 px-4" }, [
                  _vm._v("Contacts")
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "chat__contacts bordered-items" },
                  _vm._l(_vm.contacts, function(contact) {
                    return _c(
                      "li",
                      {
                        key: contact.uid,
                        staticClass: "cursor-pointer",
                        on: {
                          click: function($event) {
                            return _vm.updateActiveChatUser(contact.uid)
                          }
                        }
                      },
                      [_c("chat-contact", { attrs: { contact: contact } })],
                      1
                    )
                  }),
                  0
                )
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "chat__bg no-scroll-content chat-content-area border border-solid d-theme-border-grey-light border-t-0 border-r-0 border-b-0",
          class: {
            "sidebar-spacer--wide": _vm.clickNotClose,
            "flex items-center justify-center": _vm.activeChatUser === null
          }
        },
        [
          _vm.activeChatUser
            ? [
                _c(
                  "div",
                  { staticClass: "chat__navbar" },
                  [
                    _c("chat-navbar", {
                      attrs: {
                        isSidebarCollapsed: !_vm.clickNotClose,
                        "user-id": _vm.activeChatUser,
                        isPinnedProp: _vm.isChatPinned
                      },
                      on: {
                        openContactsSidebar: function($event) {
                          return _vm.toggleChatSidebar(true)
                        },
                        showProfileSidebar: _vm.showProfileSidebar,
                        toggleIsChatPinned: _vm.toggleIsChatPinned
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "VuePerfectScrollbar",
                  {
                    key: _vm.$vs.rtl,
                    ref: "chatLogPS",
                    staticClass:
                      "chat-content-scroll-area border border-solid d-theme-border-grey-light",
                    attrs: { settings: _vm.settings }
                  },
                  [
                    _c(
                      "div",
                      { ref: "chatLog", staticClass: "chat__log" },
                      [
                        _vm.activeChatUser
                          ? _c("chat-log", {
                              attrs: { userId: _vm.activeChatUser }
                            })
                          : _vm._e()
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "chat__input flex p-4 bg-white" },
                  [
                    _c("vs-input", {
                      staticClass: "flex-1",
                      attrs: { placeholder: "Type Your Message" },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.sendMsg($event)
                        }
                      },
                      model: {
                        value: _vm.typedMessage,
                        callback: function($$v) {
                          _vm.typedMessage = $$v
                        },
                        expression: "typedMessage"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "vs-button",
                      {
                        staticClass: "bg-primary-gradient ml-4",
                        attrs: { type: "filled" },
                        on: { click: _vm.sendMsg }
                      },
                      [_vm._v("Send")]
                    )
                  ],
                  1
                )
              ]
            : [
                _c(
                  "div",
                  { staticClass: "flex flex-col items-center" },
                  [
                    _c("feather-icon", {
                      staticClass: "mb-4 bg-white p-8 shadow-md rounded-full",
                      attrs: {
                        icon: "MessageSquareIcon",
                        svgClasses: "w-16 h-16"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "h4",
                      {
                        staticClass:
                          " py-2 px-4 bg-white shadow-md rounded-full cursor-pointer",
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.toggleChatSidebar(true)
                          }
                        }
                      },
                      [_vm._v("Start Conversation")]
                    )
                  ],
                  1
                )
              ]
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=template&id=4fb83bb4&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=template&id=4fb83bb4& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "chat__contact flex items-center px-2 pt-4 pb-2",
      class: {
        "bg-primary-gradient text-white shadow-lg": _vm.isActiveChatUser
      }
    },
    [
      _c(
        "div",
        { staticClass: "contact__avatar mr-1" },
        [
          _c("vs-avatar", {
            staticClass: "border-2 border-solid border-white",
            attrs: { src: _vm.contact.photoURL, size: "42px" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "contact__container w-full flex items-center justify-between overflow-hidden"
        },
        [
          _c(
            "div",
            { staticClass: "contact__info flex flex-col truncate w-5/6" },
            [
              _c(
                "h5",
                {
                  staticClass: "font-semibold",
                  class: { "text-white": _vm.isActiveChatUser }
                },
                [_vm._v(_vm._s(_vm.contact.displayName))]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "truncate" }, [
                _vm._v(
                  _vm._s(
                    _vm.showLastMsg
                      ? _vm.$store.getters["chat/chatLastMessaged"](
                          _vm.contact.uid
                        ).textContent
                      : _vm.contact.about
                  )
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "chat__contact__meta flex self-start flex-col items-end w-1/6"
            },
            [
              _c("span", { staticClass: "whitespace-no-wrap" }, [
                _vm._v(_vm._s(_vm._f("date")(_vm.lastMessaged)))
              ]),
              _vm._v(" "),
              _vm.unseenMsg
                ? _c(
                    "vs-chip",
                    { staticClass: "number", attrs: { color: "primary" } },
                    [_vm._v(_vm._s(_vm.unseenMsg))]
                  )
                : _vm._e()
            ],
            1
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=template&id=7c7f3250&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=template&id=7c7f3250& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.chatData
    ? _c(
        "div",
        { staticClass: "m-8", attrs: { id: "component-chat-log" } },
        _vm._l(_vm.chatData.msg, function(msg, index) {
          return _c(
            "div",
            { key: index, staticClass: "msg-grp-container" },
            [
              _vm.chatData.msg[index - 1]
                ? [
                    !_vm.isSameDay(msg.time, _vm.chatData.msg[index - 1].time)
                      ? _c("vs-divider", { staticClass: "msg-time" }, [
                          _c("span", [_vm._v(_vm._s(_vm.toDate(msg.time)))])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.hasSentPreviousMsg(
                      _vm.chatData.msg[index - 1].isSent,
                      msg.isSent
                    )
                      ? _c("div", { staticClass: "spacer mt-8" })
                      : _vm._e()
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "flex items-start",
                  class: [{ "flex-row-reverse": msg.isSent }]
                },
                [
                  _vm.chatData.msg[index - 1]
                    ? [
                        !_vm.hasSentPreviousMsg(
                          _vm.chatData.msg[index - 1].isSent,
                          msg.isSent
                        ) ||
                        !_vm.isSameDay(
                          msg.time,
                          _vm.chatData.msg[index - 1].time
                        )
                          ? [
                              _c("vs-avatar", {
                                staticClass:
                                  "border-2 shadow border-solid border-white m-0 flex-shrink-0",
                                class: msg.isSent
                                  ? "sm:ml-5 ml-3"
                                  : "sm:mr-5 mr-3",
                                attrs: {
                                  size: "40px",
                                  src: _vm.senderImg(msg.isSent)
                                }
                              })
                            ]
                          : _vm._e()
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  index == 0
                    ? [
                        _c("vs-avatar", {
                          staticClass:
                            "border-2 shadow border-solid border-white m-0 flex-shrink-0",
                          class: msg.isSent ? "sm:ml-5 ml-3" : "sm:mr-5 mr-3",
                          attrs: {
                            size: "40px",
                            src: _vm.senderImg(msg.isSent)
                          }
                        })
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.chatData.msg[index - 1]
                    ? [
                        !(
                          !_vm.hasSentPreviousMsg(
                            _vm.chatData.msg[index - 1].isSent,
                            msg.isSent
                          ) ||
                          !_vm.isSameDay(
                            msg.time,
                            _vm.chatData.msg[index - 1].time
                          )
                        )
                          ? _c("div", { staticClass: "mr-16" })
                          : _vm._e()
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "msg break-words relative shadow-md rounded py-3 px-4 mb-2 rounded-lg max-w-sm",
                      class: {
                        "bg-primary-gradient text-white": msg.isSent,
                        "border border-solid border-grey-light bg-white": !msg.isSent
                      }
                    },
                    [_c("span", [_vm._v(_vm._s(msg.textContent))])]
                  )
                ],
                2
              )
            ],
            2
          )
        }),
        0
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=template&id=da997ba8&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=template&id=da997ba8& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.userId != null
    ? _c(
        "div",
        { staticClass: "chat__header" },
        [
          _c(
            "vs-navbar",
            {
              staticClass: "p-4 flex navbar-custom",
              attrs: { color: "white", type: "flat" }
            },
            [
              _c(
                "div",
                { staticClass: "relative flex mr-4" },
                [
                  _vm.isSidebarCollapsed
                    ? _c("feather-icon", {
                        staticClass: "mr-4 cursor-pointer",
                        attrs: { icon: "MenuIcon" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.$emit("openContactsSidebar")
                          }
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("vs-avatar", {
                    staticClass: "m-0 border-2 border-solid border-white",
                    attrs: { size: "40px", src: _vm.userDetails.photoURL },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.$emit("showProfileSidebar", _vm.userId)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass:
                      "h-3 w-3 border-white border border-solid rounded-full absolute right-0 bottom-0",
                    class: "bg-" + _vm.getStatusColor(false)
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("h6", [_vm._v(_vm._s(_vm.userDetails.displayName))]),
              _vm._v(" "),
              _c("vs-spacer"),
              _vm._v(" "),
              _c("feather-icon", {
                staticClass: "cursor-pointer",
                attrs: {
                  icon: "StarIcon",
                  svgClasses: [
                    { "text-warning stroke-current": _vm.isPinnedLocal },
                    "w-6",
                    "h-6"
                  ]
                },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    _vm.isPinnedLocal = !_vm.isPinnedLocal
                  }
                }
              })
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=template&id=087da66a&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=template&id=087da66a& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "parentx-demo-2" } },
    [
      _c(
        "vs-sidebar",
        {
          staticClass: "items-no-padding",
          attrs: {
            parent: "#chat-app",
            "position-right": !_vm.isLoggedInUser,
            "hidden-background": false,
            id: "chat-profile-sidebar"
          },
          model: {
            value: _vm.activeLocal,
            callback: function($$v) {
              _vm.activeLocal = $$v
            },
            expression: "activeLocal"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "header-sidebar relative flex flex-col p-0",
              attrs: { slot: "header" },
              slot: "header"
            },
            [
              _c("feather-icon", {
                attrs: {
                  icon: "XIcon",
                  svgClasses: "m-2 cursor-pointer absolute top-0 right-0"
                },
                on: {
                  click: function($event) {
                    return _vm.$emit("closeProfileSidebar", false)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "relative inline-flex mx-auto mb-5 mt-6" },
                [
                  _c("vs-avatar", {
                    staticClass:
                      "m-0 border-white border-2 border-solid shadow-md",
                    attrs: { src: _vm.chatUser.photoURL, size: "70px" }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass:
                      "h-5 w-5 border-white border-2 border-solid rounded-full absolute right-0 bottom-0",
                    class: "bg-" + _vm.statusColor
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "mr-2 self-center" }, [
                _vm._v(_vm._s(_vm.chatUser.displayName))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "VuePerfectScrollbar",
            {
              key: _vm.$vs.rtl,
              staticClass: "scroll-area",
              attrs: { settings: _vm.settings }
            },
            [
              _c(
                "div",
                { staticClass: "p-8" },
                [
                  _c(
                    "h6",
                    {
                      staticClass: "mb-2",
                      class: { "ml-4": _vm.isLoggedInUser }
                    },
                    [_vm._v("About")]
                  ),
                  _vm._v(" "),
                  _vm.isLoggedInUser
                    ? _c("vs-textarea", {
                        staticClass: "mb-10",
                        attrs: {
                          counter: "120",
                          maxlength: "120",
                          "counter-danger": _vm.counterDanger,
                          rows: "5"
                        },
                        on: {
                          "update:counterDanger": function($event) {
                            _vm.counterDanger = $event
                          },
                          "update:counter-danger": function($event) {
                            _vm.counterDanger = $event
                          }
                        },
                        model: {
                          value: _vm.about,
                          callback: function($$v) {
                            _vm.about = $$v
                          },
                          expression: "about"
                        }
                      })
                    : _c("p", [_vm._v(_vm._s(_vm.chatUser.about))]),
                  _vm._v(" "),
                  _vm.isLoggedInUser
                    ? _c("div", { staticClass: "userProfile__status" }, [
                        _c("h6", { staticClass: "mb-4" }, [_vm._v("Status")]),
                        _vm._v(" "),
                        _c("ul", [
                          _c(
                            "li",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "vs-radio",
                                {
                                  attrs: {
                                    "vs-value": "online",
                                    color: "success"
                                  },
                                  model: {
                                    value: _vm.status,
                                    callback: function($$v) {
                                      _vm.status = $$v
                                    },
                                    expression: "status"
                                  }
                                },
                                [_vm._v("Active")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "vs-radio",
                                {
                                  attrs: {
                                    "vs-value": "do not disturb",
                                    color: "danger"
                                  },
                                  model: {
                                    value: _vm.status,
                                    callback: function($$v) {
                                      _vm.status = $$v
                                    },
                                    expression: "status"
                                  }
                                },
                                [_vm._v("Do Not Disturb")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "vs-radio",
                                {
                                  attrs: {
                                    "vs-value": "away",
                                    color: "warning"
                                  },
                                  model: {
                                    value: _vm.status,
                                    callback: function($$v) {
                                      _vm.status = $$v
                                    },
                                    expression: "status"
                                  }
                                },
                                [_vm._v("Away")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "vs-radio",
                                {
                                  attrs: {
                                    "vs-value": "offline",
                                    color: "grey"
                                  },
                                  model: {
                                    value: _vm.status,
                                    callback: function($$v) {
                                      _vm.status = $$v
                                    },
                                    expression: "status"
                                  }
                                },
                                [_vm._v("Offline")]
                              )
                            ],
                            1
                          )
                        ])
                      ])
                    : _vm._e()
                ],
                1
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/apps/chat/Chat.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/apps/chat/Chat.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chat_vue_vue_type_template_id_9701a608___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=9701a608& */ "./resources/js/src/views/apps/chat/Chat.vue?vue&type=template&id=9701a608&");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/chat/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chat_vue_vue_type_template_id_9701a608___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chat_vue_vue_type_template_id_9701a608___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/chat/Chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/chat/Chat.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/Chat.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/apps/chat/Chat.vue?vue&type=template&id=9701a608&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/Chat.vue?vue&type=template&id=9701a608& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_9701a608___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=template&id=9701a608& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=template&id=9701a608&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_9701a608___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_9701a608___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatContact.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatContact.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatContact_vue_vue_type_template_id_4fb83bb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatContact.vue?vue&type=template&id=4fb83bb4& */ "./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=template&id=4fb83bb4&");
/* harmony import */ var _ChatContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatContact.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatContact_vue_vue_type_template_id_4fb83bb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatContact_vue_vue_type_template_id_4fb83bb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/chat/ChatContact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatContact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=template&id=4fb83bb4&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=template&id=4fb83bb4& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_template_id_4fb83bb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatContact.vue?vue&type=template&id=4fb83bb4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=template&id=4fb83bb4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_template_id_4fb83bb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_template_id_4fb83bb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatLog.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatLog.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatLog_vue_vue_type_template_id_7c7f3250___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatLog.vue?vue&type=template&id=7c7f3250& */ "./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=template&id=7c7f3250&");
/* harmony import */ var _ChatLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatLog.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatLog_vue_vue_type_template_id_7c7f3250___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatLog_vue_vue_type_template_id_7c7f3250___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/chat/ChatLog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatLog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=template&id=7c7f3250&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=template&id=7c7f3250& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_template_id_7c7f3250___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatLog.vue?vue&type=template&id=7c7f3250& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=template&id=7c7f3250&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_template_id_7c7f3250___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_template_id_7c7f3250___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatNavbar.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatNavbar.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatNavbar_vue_vue_type_template_id_da997ba8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatNavbar.vue?vue&type=template&id=da997ba8& */ "./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=template&id=da997ba8&");
/* harmony import */ var _ChatNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatNavbar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatNavbar_vue_vue_type_template_id_da997ba8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatNavbar_vue_vue_type_template_id_da997ba8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/chat/ChatNavbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatNavbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=template&id=da997ba8&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=template&id=da997ba8& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatNavbar_vue_vue_type_template_id_da997ba8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatNavbar.vue?vue&type=template&id=da997ba8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=template&id=da997ba8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatNavbar_vue_vue_type_template_id_da997ba8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatNavbar_vue_vue_type_template_id_da997ba8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/chat/UserProfile.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/apps/chat/UserProfile.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfile_vue_vue_type_template_id_087da66a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=template&id=087da66a& */ "./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=template&id=087da66a&");
/* harmony import */ var _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfile_vue_vue_type_template_id_087da66a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserProfile_vue_vue_type_template_id_087da66a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/chat/UserProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=template&id=087da66a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=template&id=087da66a& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_087da66a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=template&id=087da66a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=template&id=087da66a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_087da66a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_087da66a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);