<script setup>
import { ref } from "vue";
import { useCartStroe } from "../stores/useCartStroe";
const cartStroe = useCartStroe();
const products = ref([
  {
    title: "商品1號",
    price: 150,
    imgUrl:
      "https://images.pexels.com/photos/1545668/pexels-photo-1545668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "商品2號",
    price: 250,
    imgUrl:
      "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "商品3號",
    price: 350,
    imgUrl:
      "https://images.pexels.com/photos/850885/pexels-photo-850885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
]);
const addCart = (e) => {
  const id = e.currentTarget.getAttribute("data-id");
  const price = e.currentTarget.getAttribute("data-price");
  const imgUrl = e.currentTarget.getAttribute("data-imgurl");
  cartStroe.increaseByOne(id, price, imgUrl);
};
</script>

<template>
  <template v-for="(item, index) in products" :key="index">
    <div class="card mx-3" style="width: 18rem">
      <img
        :src="item.imgUrl"
        class="card-img-top"
        alt="..."
        style="height: 278px"
      />
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text">NT$ {{ item.price }}</p>
        <button
          class="add-cart btn btn-primary w-100"
          :data-id="`A000${index + 1}`"
          :data-price="item.price"
          :data-imgurl="item.imgUrl"
          @click.prevent="addCart($event)"
        >
          加入購物車
        </button>
      </div>
    </div>
  </template>
</template>

<style scoped></style>
