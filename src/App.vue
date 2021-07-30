<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHide===true"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('getCategory');
  },
  components: {
    Footer,
    Header
  }
}
</script>
