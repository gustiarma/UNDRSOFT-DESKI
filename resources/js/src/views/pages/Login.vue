<template>
  <div
    class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    id="page-login"
  >
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter justify-center items-center">
            <div class="vx-col hidden lg:block lg:w-1/2">
              <img src="@assets/images/pages/login.png" alt="login" class="mx-auto" />
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="p-8 login-tabs-container">
                <div class="vx-card__title mb-4">
                  <h4 class="mb-4">Login</h4>
                  <p>Welcome back, please login to your account.</p>
                </div>

                <div>
                  <vs-input
                    name="email"
                    icon-no-border
                    icon="icon icon-user"
                    icon-pack="feather"
                    placeholder="Email"
                    danger-text="Masukkan email dengan benar"
                    v-model="loginForm.email"
                    class="w-full"
                  />

                  <vs-input
                    type="password"
                    name="password"
                    icon-no-border
                    icon="icon icon-lock"
                    icon-pack="feather"
                    placeholder="Password"
                    v-model="loginForm.password"
                    class="w-full mt-6"
                  />

                  <div class="flex flex-wrap justify-between my-5">
                    <!-- <vs-checkbox v-model="loginForm.checkbox_remember_me" class="mb-3">Remember Me</vs-checkbox>
                    <router-link to>Forgot Password?</router-link>-->
                  </div>
                  <vs-button type="border">Register</vs-button>
                  <vs-button class="float-right" @click="doLogin" :disabled="checkLoginButton">Login</vs-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isValid: {
        email: null,
        password: null
      },
      errors: {
        email: "",
        password: ""
      },

      loginForm: {
        email: "",
        password: "",
        checkbox_remember_me: false
      }
    };
  },
  computed: {
    checkLoginButton: function() {
      if (this.validEmail && this.loginForm.password.length >= 8) {
        return false;
      } else {
        return true;
      }
    },
    validPassword: function() {
      if (this.loginForm.password == null) {
        return "maybe";
      }
      if (this.loginForm.password.length < 8) {
        return false;
      } else {
        return true;
      }
    },
    validEmail: function() {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (this.loginForm.email == "") {
        return true;
      }
      // return true
      return re.test(this.loginForm.email);
    }
  },
  mounted() {
    if (localStorage.getItem("userInfo")) {
      this.$router.push({ name: "dashboard" });
    }
  },
  created: function() {
    if (localStorage.getItem("userInfo")) {
      this.$router.push({ name: "dashboard" });
    }
  },

  methods: {
    doLogin() {
      var vm = this;
      // console.log(this.loginForm)

      axios
        .post("/api/getToken", this.loginForm)
        .then(function(response) {
          if (response.status == 200) {
            if (response.data.success == true) {
              vm.$store.dispatch("updateUserInfo", response.data.user_data);
              vm.$store.dispatch("updateApiToken", response.data.api_token);
              vm.$store.dispatch(
                "updateMenuItem",
                response.data.user_data.level
              );

              vm.$router.push({ name: "dashboard" });
            }
          }
          // console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss">
#page-login {
  .social-login-buttons {
    .bg-facebook {
      background-color: #1551b1;
    }
    .bg-twitter {
      background-color: #00aaff;
    }
    .bg-google {
      background-color: #4285f4;
    }
    .bg-github {
      background-color: #333;
    }
  }
}
</style>
