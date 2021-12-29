<template>
  <div class="parts">
    <h2 class="info-section-title">Prequels / Sequels</h2>
    <div class="parts__wrapper">
      <ul class="parts__list custom-scroll">
        <li class="parts__item" v-for="film in partsList" :key="film.id">
          <router-link :to="`/film/${film.id}`">
            <img
              loading="lazy"
              :src="`/posters/${film.poster}.webp`"
              alt=""
              class="parts__poster"
            />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmParts",
  props: {
    data: Array,
    parts: Object
  },
  computed: {
    partsList() {
      let filteredData = this.data.filter((film) => {
        if (film.parts != undefined) {
          return film.parts.title == this.parts.title;
        }
      });
      return filteredData.sort((a, b) => a.parts.part > b.parts.part ? 1 : -1);
    }
  }
};
</script>

<style>
.parts {
  padding-top: 20px;
}
.parts__wrapper {
  position: relative;
}
.parts__wrapper .custom-scroll {
  scroll-behavior: smooth;
}
.parts__list {
  display: flex;
  margin-top: 15px;
  margin-bottom: 30px;
  overflow-x: auto;
}
.parts__poster {
  width: 120px;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
}
.parts__item {
  margin-right: 15px;
}
.parts__item:last-child {
  margin-right: 0;
}
.parts__item a {
  display: block;
  border-radius: 4px;
  background-color: #f2f2f2;
}
.parts__control {
  display: none;
}
.parts__control {
  display: none;
  position: absolute;
  top: 50%;
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 0 0 3px #fff;
  background-color: #000;
  margin-top: -20px;
}
.parts__control--left {
  left: -20px;
  transform: rotate(180deg);
}
.parts__control--right {
  right: -20px;
}
@media (hover: hover) {
  .parts__control--visible {
    display: block;
  }
}
@media (max-width: 930px) {
  .parts__link {
    margin-bottom: 10px;
  }
}
.parts .router-link-active {
  opacity: 0.5;
  cursor: default;
}
</style>
