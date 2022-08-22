<script setup>
import { ref } from "vue";
import Paper from "./paper.vue";

const news = ref([
  {
    id: Math.random(),
    title: "Lorem Impsum",
    description: "Hello world",
  },
  {
    id: Math.random(),
    title: "Lorem Impsum",
    description: "Hello world",
  },
]);

const tapHandler = (item) => {
  console.log("Tap!", item);
};
</script>

<template>
  <h1>News</h1>
  <div class="row">
    <div v-for="item in news" :key="item.id" class="col-3">
      <Paper
        :title="item.title"
        :description="item.description"
        :id="item.id"
        @tap="tapHandler"
      />
    </div>
  </div>
</template>
