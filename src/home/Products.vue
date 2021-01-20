<template>
  <div style="padding: 25px;">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex';
import ProductCard from "@/home/ProductCard";
export default {
  name: 'Products',
  components: { ProductCard },
  computed: {
    ...mapGetters('product', ['products'])
  },
  methods: {
    ...mapActions('product', ['getProducts', 'addCart', 'removeCart'])
  },
  mounted() {
    this.getProducts();
  }
}
</script>
