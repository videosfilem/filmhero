<template>
  <div class="film__money">
    <div class="film__money-item" v-if="budget != undefined">
      <h3 class="film__header-info-title">Budget</h3>
      <p class="film__money-value">$ {{budget.value}} {{budget.suffix}}</p>
    </div>
    <div class="film__money-item" v-if="boxoffice != undefined">
      <h3 class="film__header-info-title">Box Office</h3>
      <p :class="boxOfficeStatus">$ {{boxoffice.value}} {{boxoffice.suffix}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmMoneyItem",
  props: {
    budget: Object,
    boxoffice: Object
  },
  computed: {
    boxOfficeStatus() {
      const hasBillion = this.boxoffice.suffix == "billion";

      if (this.boxoffice.value > this.budget.value || hasBillion) {
        return "film__money-value film__money-value--success";
      } else {
        return "film__money-value film__money-value--not-enough";
      }
    },
  },
};
</script>

<style>
  .film__money {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .film__money-value {
    padding: 10px 20px;
    background-color: #cfd8dc;
    border-radius: 4px;
    font-size: 15px;
  }
  .film__money-value--success {
    background-color: #69f0ae;
  }
  .film__money-value--not-enough {
    background-color: #ffab91;
  }
</style>
