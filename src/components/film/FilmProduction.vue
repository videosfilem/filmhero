<template>
  <div class="film__production">
    <h3 class="film__header-info-title">Studios</h3>
    <div class="film__production-wrapper">
      <router-link
        v-for="studio in studios"
        :to="`/films?production=${studio}`"
        :key="studio"
        class="film__collection film__collection--studio"
      >
        {{studio}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmProduction",
  props: ["studios"],
};
</script>

<style>
.film__production-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.film__collection--studio {
  background-color: #ffe0b2;
}
</style>
