<script setup>
import { defineProps, defineEmits, unref } from "vue";

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  id: {
    required: true,
    type: [String, Number],
  },
});

const emit = defineEmits(["tap"]);
</script>

<template>
  <div
    class="card"
    :id="props.id"
    @click="
      emit('tap', {
        id: props.id,
        description: props.description,
        title: props.title,
      })
    "
  >
    <div class="card-body">
      <h5 class="card-title">{{ props.title }}</h5>
      <p class="card-text">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>
