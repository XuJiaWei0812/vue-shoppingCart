<script setup>
import { useCartStroe } from "../stores/useCartStroe";
const cartStroe = useCartStroe();

const increaseByOne = (e) => {
  const id = e.currentTarget.getAttribute("data-id");
  const price = e.currentTarget.getAttribute("data-price");
  const imgUrl = e.currentTarget.getAttribute("data-imgurl");
  cartStroe.increaseByOne(id, price, imgUrl);
};

const decreaseByOne = (e) => {
  const id = e.currentTarget.getAttribute("data-id");
  cartStroe.decreaseByOne(id);
};

const removeItem = (e) => {
  const id = e.currentTarget.getAttribute("data-id");
  cartStroe.removeItem(id);
};
</script>

<template>
  <div class="table-responsive">
    <table class="table align-middle">
      <thead>
        <tr>
          <th scope="col">商品照片</th>
          <th scope="col">商品ID</th>
          <th scope="col">商品價格</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody class="cartList">
        <template v-for="(item, index) in cartStroe.cart.items" :key="index">
          <tr>
            <th scope="row">
              <img
                :src="item.imgUrl"
                class="card-img-top"
                alt="..."
                style="width: 250px"
              />
            </th>
            <td>{{ item.id }}</td>
            <td>NT$ {{ item.price * item.qty }}</td>
            <td>
              <div class="d-flex flex-row">
                <button
                  type="button"
                  class="reduceNum btn btn-danger rounded-circle"
                  :data-id="item.id"
                  @click.prevent="decreaseByOne($event)"
                >
                  −
                </button>
                <span class="my-auto mx-3">{{ item.qty }}</span>
                <button
                  type="button"
                  class="addNum btn btn-success rounded-circle"
                  :data-id="item.id"
                  @click.prevent="increaseByOne($event)"
                >
                  +
                </button>
              </div>
            </td>
            <td>
              <button
                type="button"
                class="romeItem btn btn-danger"
                :data-id="item.id"
                @click.prevent="removeItem($event)"
              >
                移除商品
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="d-flex justify-content-end mb-3">
      <h3 class="totalQty mx-3">總數量: {{ cartStroe.cart.totalQty }}</h3>
      <h3 class="totalPrice mx-3">總價格 {{ cartStroe.cart.totalPrice }}</h3>
    </div>
  </div>
</template>

<style scoped></style>
