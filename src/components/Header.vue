<template>
  <header>
    <div class="navbar navbar-default navbar-fixed-top">
      <div class="navbar-header">
        <h2 class="navbar-brand">
          <router-link :to="{name: 'Main'}">{{ sitename.toUpperCase() }}</router-link>
        </h2>
      </div>

      <div class="nav navbar-nav navbar-right cart">
        <div v-if="!mySession">
          <button type="button" class="btn btn-default btn-lg" v-on:click="signIn">
            Sign In
          </button>
        </div>
        <div v-else>
          <button type="button" class="btn btn-default btn-lg" v-on:click="signOut">
            <img class="photo" :src="mySession.photoURL" />
            Sign Out
          </button>
        </div>
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
import firebase from 'firebase';
export default {
  name: 'store-header',
  data() {
    return {
      sitename: "Vue.js Webstore"
    }
  },
  props: ['cartItemCount'],
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit('SET_SESSION', user || false);
    })
  },
  methods: {
    showCheckout() {
      this.$router.push({name: 'Form'});
    },
    signIn() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => console.log('Signed in!' + result))
        .catch((error) => console.log('Error: ' + error));
    },
    signOut() {
      firebase.auth()
        .signOut()
        .then(() => console.log('Signed out!'))
        .catch((error) => console.log('Error in sign out: ' + error))
    }
  },
  computed: {
    mySession() {
      return this.$store.getters.session;
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
.router-link-exact-active {
  color: black;
}
.photo {
  width: 25px;
  height: 25px;
}
</style>