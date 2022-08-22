<script setup>
import { inject } from "vue";

const profile = inject("profile-state");
const { updateName } = inject("profile-actions");
</script>

<template>
  <p>{{ profile.name }}</p>
  <button class="btn btn-primary" @click="updateName">Update Name</button>
</template>
