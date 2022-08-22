<script setup>
/**
 * Learn basic ref
 */
import { computed, ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};

const reset = () => {
  count.value = 0;
};

const message = computed(() => `Value: ${count.value}`);
</script>

<template>
  <h1>Count</h1>
  <p>{{ message }}</p>
  <button @click="increment" class="btn btn-primary me-2">Increment</button>
  <button @click="decrement" class="btn btn-primary me-2">Decrement</button>
  <button @click="reset" class="btn btn-outline-primary">Reset</button>
</template>
