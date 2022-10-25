import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

import routes from './routes'

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

// 重写this.$router.push和replace方法，解决了编程式导航，路由和参数都不变时跳转报错的问题
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => {}, () => {})
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => {}, () => {})
  }
}

export default new VueRouter({
  routes,
  scrollBehavior(to, from, savePosition) {
    return {y: 0}
  }
})