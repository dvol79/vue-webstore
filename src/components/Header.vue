<template>
  <header>
    <div class="navbar navbar-default navbar-fixed-top">
      <div class="navbar-header">
        <h2 class="navbar-brand">
          <router-link :to="{name: 'Main'}">{{ sitename.toUpperCase() }}</router-link>
        </h2>
      </div>

      <div class="nav navbar-nav navbar-right cart">
        <router-link 
          active-class="active" 
          tag="button"
          class="btn btn-default btn-lg"
          :to="{ name: 'Form' }">
          <span class="glyphicon glyphicon-shopping-cart"></span>
          <span class="label label-info">{{ cartItemCount }}</span>
          Checkout
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'store-header',
  data() {
    return {
      sitename: "Vue.js Webstore"
    }
  },
  props: ['cartItemCount'],
  methods: {
    showCheckout() {
      this.$router.push({name: 'Form'});
    }
  }
}
</script>

<style scoped>
.router-link-exact-active {
  color: black;
}
</style>