<template>
  <div class="film__collections">
    <h3 class="film__header-info-title">Collections</h3>
    <div class="film__collections-wrapper">
      <router-link
        v-for="(collection, index) in collections"
        :to="`/films/?collections=${collection}`"
        :key="index"
        :class="`film__collection film__collection--${collection}`"
      >
        {{ collection }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmCategories",
  props: {
    collections: Array
  }
};
</script>

<style>
.film__collections-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.film__collection {
  flex-shrink: 0;
  font-size: 15px;
  padding: 10px 20px;
  background-color: #ddd;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}
.film__collection--upcoming {
  color: #fff;
  text-transform: uppercase;
  background-color: #ff6767;
}
.film__collection:hover {
  background-color: #ffe6b3;
}
.film__collection--upcoming:hover {
  background-color: #ff0000;
}
.film__collection:last-child {
  margin-right: 0;
}
</style>
