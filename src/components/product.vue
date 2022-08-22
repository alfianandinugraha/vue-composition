<script setup>
/**
 * Learn deep watch
 */
import { ref, watch } from "vue";

/**
 * Deep copy the object. See https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy
 */
const copy = (obj) => JSON.parse(JSON.stringify(obj));

const product = ref({
  id: "",
  price: 0,
  options: {
    currency: "Rp",
    country: {
      code: "+62",
    },
  },
});

watch(
  /**
   * I was copied the ref here for track older value. If the ref doesn't deep copy, the old value and new value is same.
   */
  () => copy(product.value),
  (value, oldValue) => {
    console.log("-----------------------------");
    console.log("Old ID: ", oldValue.id);
    console.log("Old Price: ", oldValue.price);
    console.log("Old Currency: ", oldValue.options.currency);
    console.log("Old Country Code: ", oldValue.options.country.code);
    console.log("ID: ", value.id);
    console.log("Price: ", value.price);
    console.log("Currency: ", value.options.currency);
    console.log("Country Code: ", value.options.country.code);
  },
  {
    deep: true,
  }
);
</script>

<template>
  <h1>Product</h1>
  <div class="w-25">
    <div class="mb-3">
      <label class="form-label">ID</label>
      <input type="text" v-model="product.id" class="form-control" />
    </div>
    <div class="mb-3">
      <label class="form-label">Currency</label>
      <input
        type="text"
        v-model="product.options.currency"
        class="form-control"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Country Code</label>
      <input
        type="text"
        v-model="product.options.country.code"
        class="form-control"
      />
    </div>
    <div>
      <label class="form-label">Price</label>
      <input type="text" v-model.number="product.price" class="form-control" />
    </div>
  </div>
</template>
