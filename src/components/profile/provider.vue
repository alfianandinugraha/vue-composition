<script setup>
/**
 * Learn provide-inject
 */
import { provide, ref, readonly } from "vue";
import ProfileCard from "./card.vue";

const profileState = ref({
  name: "Alfian Andi",
  email: "alfian@mail.com",
});

const updateName = () => {
  profileState.value.name = "Andi";
};

const profile = readonly(profileState);

provide("profile-state", profile);
provide("profile-actions", {
  updateName,
});
</script>

<template>
  <button class="btn btn-primary" @click="updateName">Update Name</button>
  <ProfileCard />
</template>
