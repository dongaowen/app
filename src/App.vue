<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  methods: {
    ...mapActions("home", ["getCategoryList"])
  },
  mounted() {
    this.getCategoryList()
  }
}
</script>

<style>

</style>
