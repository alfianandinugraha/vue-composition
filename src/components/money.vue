<script setup>
/**
 * Learn about watch
 */
import { ref, watch } from "vue";

const money = ref(0);
const email = ref("");

watch([money, email], ([newMoney, newEmail]) => {
  console.log(`Money: ${newMoney}, Email: ${newEmail}`);
});
</script>

<template>
  <h1>Bank</h1>
  <div class="w-25">
    <div class="mb-3">
      <label class="form-label">Email</label>
      <input type="text" v-model="email" class="form-control" />
    </div>
    <div>
      <label class="form-label">Money</label>
      <input type="text" v-model.number="money" class="form-control" />
    </div>
  </div>
</template>
