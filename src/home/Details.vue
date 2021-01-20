<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-6">
        <div class="card text-left shadow-md">
          <img class="card-img-top" :src="product.imageUrl" alt />
        </div>
      </div>
      <div class="col-6 text-left text-justify">
        <div class="display-3">{{ product.name }}</div>
        <p class="lead text-justify">{{ product.content }}</p>
        <div>
          <p class="h3">Price</p>
          <p class="h2">${{ product.price.toFixed(2) }}</p>
        </div>
        <AddToCart :product="product"  />
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import AddToCart from "@/home/AddToCart";
export default {
  components: {AddToCart},
  data() {
    return {
      isInCardProp: false,
    }
  },
  computed: {
    ...mapGetters('account', ['user']),
    ...mapGetters('product', ['product'])
  },
  methods: {
    ...mapActions('product', ['productDetails'])
  },
  mounted() {
    console.log('this', this)
    this.productDetails(this.$route.params.idProduct);
  }
}
</script>

<style>
  .container-fluid {
    padding: 30px;
  }

  .image-product {
    width: 100%;
  }

  .card * {
    max-height: 85vh;
  }
</style>
