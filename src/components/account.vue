<script setup>
/**
 * Learn object ref
 */
import { computed, ref } from "vue";

const profile = ref({
  firstName: "",
  lastName: "",
});

const isTyped = computed(() => !!profile.value.firstName);

const greet = computed(
  () => `Hello, ${profile.value.firstName} ${profile.value.lastName}`
);
</script>

<template>
  <h1>Form</h1>
  <div class="w-25">
    <div class="mb-3">
      <label class="form-label">First Name</label>
      <input type="text" v-model="profile.firstName" class="form-control" />
    </div>
    <div class="mb-3">
      <label class="form-label">Last Name</label>
      <input type="text" v-model="profile.lastName" class="form-control" />
    </div>
    <p v-if="isTyped">{{ greet }}</p>
    <p v-else>Please type first name</p>
  </div>
</template>
