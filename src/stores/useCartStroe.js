import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStroe = defineStore('cart', () => {
  const cart = ref({
    totalQty: 0,
    totalPrice: 0,
    items: [],
  });
  const increaseByOne = (id, price = "", imgUrl = "", qty = 1) => {
    const index = cart.value.items.findIndex(function (item) {
      return item.id == id; // 為真的，就會回傳該物件
    });
    if (index == -1) {
      cart.value.items.push({ id: id, price: price, imgUrl: imgUrl, qty: qty });
    } else {
      cart.value.items[index].qty += 1;
    }
    updateCart();
  };
  const decreaseByOne = (id, qty = 1) => {
    const index = cart.value.items.findIndex(function (item) {
      return item.id == id; // 為真的，就會回傳該物件
    });
    if (cart.value.items[index].qty == 1) {
      cart.value.items.splice(index, 1);
    } else {
      cart.value.items[index].qty -= 1;
    }
    updateCart();
  };
  const removeItem = (id) => {
    const index = cart.value.items.findIndex(function (item) {
      return item.id == id; // 為真的，就會回傳該物件
    });
    if (cart.value.items[index].qty != -1) {
      cart.value.items.splice(index, 1);
    }
    updateCart();
  };
  const updateCart = () => {
    const totalPrice = cart.value.items.reduce(
      (acc, cur) => acc + cur.qty * cur.price,
      0
    );
    const totalQty = cart.value.items.reduce((acc, cur) => acc + cur.qty, 0);
    cart.value.totalPrice = totalPrice;
    cart.value.totalQty = totalQty;
  };

  return { cart, increaseByOne, decreaseByOne, removeItem, updateCart }
}, {
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'cart', // 存储的 key 值，默认为 storeId
        storage: localStorage, // 存储的位置，默认为 sessionStorage
        paths: ['cart'], // 需要存储的 state 状态，默认存储所有的状态
      }
    ]
  }
})