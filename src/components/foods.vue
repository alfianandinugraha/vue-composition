<script setup>
import { ref, unref } from "vue";
import useFoods from "@/hooks/useFoods";

const foodStore = useFoods();
const food = ref("");
const foods = ref(foodStore.foods);

const addFood = () => {
  foodStore.add({
    name: unref(food),
  });
  food.value = "";
};
</script>

<template>
  <h1>Foods</h1>
  <div class="mb-3 w-25">
    <label class="form-label">Food Name</label>
    <input type="text" v-model="food" class="form-control" />
  </div>
  <button class="btn btn-primary" :disabled="!food" @click="addFood">
    Add Food
  </button>
  <div class="mt-3">
    <div class="row">
      <template v-if="foods.length">
        <div class="col-3 mb-3" v-for="food in foods" :key="food.id">
          <div class="card">
            <div class="card-body">
              <div class="card-text">
                <h5>
                  {{ food.name }}
                </h5>
              </div>
              <button class="btn btn-danger" @click="foodStore.remove(food.id)">
                Remove
              </button>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <p>Foods not found</p>
      </template>
    </div>
  </div>
</template>
