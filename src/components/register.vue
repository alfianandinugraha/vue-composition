<script setup>
/**
 * Learn ref for bind html
 */
import { onMounted, ref } from "vue";

const emailRef = ref(null);

onMounted(() => {
  emailRef.value.focus();
  console.log(emailRef.value);
});
</script>

<template>
  <h1>Register</h1>
  <div class="w-25">
    <div>
      <label class="form-label">Email</label>
      <input type="text" class="form-control" ref="emailRef" />
    </div>
  </div>
</template>
