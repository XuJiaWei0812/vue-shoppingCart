<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import productList from "../components/productList.vue";
import cartList from "../components/cartList.vue";
</script>

<template>
  <div class="container d-flex flex-row justify-content-center pt-3">
    <productList></productList>
  </div>
  <div class="container d-flex flex-row justify-content-center pt-3">
    <cartList></cartList>
  </div>
</template>

<style scoped></style>
