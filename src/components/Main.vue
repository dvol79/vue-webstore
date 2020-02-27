<template>
  <div>
    <store-header :cartItemCount="cartItemCount"></store-header>
    <main>
      <div v-for="product in sortedProducts" :key="product.id">
        <div class="row">
          <div class="col-md-5 col-md-offset-0">
            <figure>
              <img :src="product.image" v-bind:alt="product.title" class="img-thumbnail" />
            </figure>
          </div>
          <div class="col-md-6 col-md-offset-0 description">
            <h1>{{ product.title }}</h1>
            <p v-html="product.description"></p>
            <p class="price">{{ product.price | formatPrice }}</p>

            <button
              class="btn btn-default"
              v-on:click="addToCart(product)"
              v-if="canAddToCart(product)"
            >Add to cart</button>
            <button class="btn btn-default disabled" v-else>Add to cart</button>
            <span
              class="inventory-message"
              v-if="product.availableInventory - cartCount(product.id) === 0"
            >All out!</span>
            <span
              class="inventory-message"
              v-else-if="product.availableInventory - cartCount(product.id) < 5"
            >Only {{ product.availableInventory - cartCount(product.id) }} left!</span>
            <span class="inventory-message" v-else>Buy now!</span>

            <div class="rating">
              <span 
                v-bind:class="{ 'rating-active': checkRating(n, product) }"
                v-for="n in 5"
                :key="n">☆</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import StoreHeader from "./Header.vue";
export default {
  name: 'Main',
  data() {
    return {
      products: [],
      cart: []
    };
  },
  components: { StoreHeader },
  methods: {
    checkRating(n, myProduct) {
      return myProduct.rating - n >= 0;
    },
    addToCart(aProduct) {
      this.cart.push(aProduct.id);
    },
    showCheckout() {
      this.showProduct = !this.showProduct;
    },
    canAddToCart(aProduct) {
      return aProduct.availableInventory > this.cartCount(aProduct.id);
    },
    cartCount(id) {
      let count = 0;
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) count++;
      }
      return count;
    }
  },
  computed: {
    cartItemCount() {
      return this.cart.length || "";
    },
    sortedProducts() {
      if (this.products.length > 0) {
        let prodArr = this.products.slice(0);
        function compare(a, b) {
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
          }
          if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
          }
          return 0;
        }
        return prodArr.sort(compare);
      }
    }
  },
  filters: {
    formatPrice: function(price) {
      if (!parseInt(price)) {
        return "";
      }
      if (price > 99999) {
        var priceString = (price / 100).toFixed(2);
        var priceArray = priceString.split("").reverse();
        var index = 3;
        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, ",");
          index += 4;
        }
        return "$" + priceArray.reverse().join("");
      } else {
        return "$" + (price / 100).toFixed(2);
      }
    }
  },
  created: function() {
    axios.get('/products.json').then(response => {
      this.products = response.data.products;
      console.log(this.products);
    });
  }
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>