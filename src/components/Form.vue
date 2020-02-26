<template>
  <div>
    <store-header :cartItemCount="cartItemCount"></store-header>
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-info">
          <div class="panel-heading">Pet Depot Checkout</div>
          <div class="panel-body">
            <div class="form-group">
              <div class="col-md-12">
                <h4>
                  <strong>Enter Your Information</strong>
                </h4>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6">
                <strong>First Name:</strong>
                <input v-model.trim.lazy="order.firstName" type="text" class="form-control" />
              </div>
              <div class="col-md-6">
                <strong>Last Name:</strong>
                <input v-model.trim="order.lastName" type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12">
                <strong>Address:</strong>
              </div>
              <div class="col-md-12">
                <input v-model.trim="order.address" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12">
                <strong>City:</strong>
              </div>
              <div class="col-md-12">
                <input v-model.trim="order.city" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-2">
                <strong>State:</strong>
                <select v-model="order.state" class="form-control">
                  <option disabled value>State</option>
                  <option 
                    v-for="(state, key) in states" 
                    :value="state" 
                    :key="key">
                    {{ key }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6 col-md-offset-4">
                <strong>Zip / Postal Code:</strong>
                <input v-model.number="order.zip" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6 boxes">
                <input
                  type="checkbox"
                  id="gift"
                  value="true"
                  :true-value="order.sendGif"
                  :false-value="order.dontSendGif"
                  v-model="order.gift"
                />
                <label for="gift">Ship As Gift?</label>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6 boxes">
                <input type="radio" id="home" v-bind:value="order.home" v-model="order.method" />
                <label for="home">Home</label>
                <input
                  type="radio"
                  id="business"
                  v-bind:value="order.business"
                  v-model="order.method"
                />
                <label for="business">Business</label>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12 text-center" style="margin-top: 15px;">
                <button type="submit" class="btn btn-primary sumbit" @click="submitForm">Place Order</button>
              </div>
            </div>
            <div class="col-md-12 verify">
              <pre>
                First Name: {{ order.firstName }}
                 Last Name: {{ order.lastName }}
                   Address: {{ order.address }}
                      City: {{ order.city }}
                       Zip: {{ order.zip }}
                     State: {{ order.state }}
                    Method: {{ order.method }}
                      Gift: {{ order.gift }}
              </pre>
            </div>
          </div>
        </div>
      </div>
      <!-- .col-md-10.col-md-offset-1 -->
    </div>
    <!-- .row -->
  </div>
</template>

<script>
import StoreHeader from "./Header.vue";
export default {
  name: "Form",
  props: ["cartItemCount"],
  data() {
    return {
      order: {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zip: 111394,
        state: "",
        method: "Home Address",
        business: "Business Address",
        home: "Home Address",
        gift: "Send as a Gift",
        sendGif: "Send as a Gift",
        dontSendGif: "Do Not Send as a Gift"
      },
      states: {
        AL: "Alabama",
        AR: "Arizona",
        CA: "California",
        NV: "Nevada",
        MO: "Moskow"
      }
    };
  },
  components: { StoreHeader },
  methods: {
    submitForm() {
      alert('Submitted!');
    },
  }
};
</script>

<style scoped>
h1 {
  color: #203801;
}
</style>