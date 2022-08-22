import { ref } from "vue";

/**
 * @typedef Food
 * @property {string} name
 * @property {string} id
 */

const useFoods = () => {
  const foods = ref([]);

  const add = (food) => {
    foods.value.unshift({
      id: Math.random(),
      ...food,
    });
  };

  const remove = (id) => {
    foods.value = foods.value.filter((food) => food.id !== id);
  };

  return {
    foods,
    add,
    remove,
  };
};

export default useFoods;
