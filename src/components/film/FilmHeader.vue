<template>
  <div class="film__header">
    <div class="container">
      <div class="film__header-wrapper">
        <FilmPoster :poster="data.poster" :title="data.title" />
        <div class="film__info">
          <h1 class="film__title">{{ data.title }}</h1>
          <FilmBasic
            :year="data.year"
            :genres="data.genres"
            :time="data.time"
            :countries="data.countries"
          />
          <FilmSynopsis :synopsis="data.synopsis" />
          <div class="film__creators-wrapper">
            <FilmCreators
              position="Directed by"
              :names="data.director"
              className="film__creators--single"
              :link="true"
              v-if="data.type != 'series'"
            />
            <FilmCreators
              position="Creators"
              :names="data.director"
              :link="true"
              className="film__creators--single"
              v-if="data.type == 'series'"
            />
            <FilmCreators
              position="Writtens by"
              :names="data.writtens"
            />
            <FilmCreators
              position="Produced by"
              :names="data.producers"
            />
            <FilmCreators
              position="Music by"
              :names="data.music"
            />
            <FilmCreators
              position="Cinematography by"
              :names="data.cinema"
              v-if="data.cinema"
            />
          </div>
        </div>
      </div>
      <div class="film__info-bottom">
        <FilmProduction :studios="data.production" />
        <FilmCollections :collections="data.collections" v-if="data.collections" />
        <FilmMoney :budget="data.budget" :boxoffice="data.boxoffice" />
      </div>
    </div>
  </div>
</template>
<script>
import FilmPoster from "./FilmPoster";
import FilmBasic from "./FilmBasic";
import FilmSynopsis from "./FilmSynopsis";
import FilmCreators from "./FilmCreators";
import FilmProduction from "./FilmProduction";
import FilmCollections from "./FilmCollections";
import FilmMoney from "./FilmMoney";

export default {
  name: "FilmHeader",
  props: {
    data: Object
  },
  components: {
    FilmPoster,
    FilmBasic,
    FilmSynopsis,
    FilmCreators,
    FilmProduction,
    FilmCollections,
    FilmMoney,
  },
};
</script>

<style>
  .film__header {
    background-color: #f2f2f2;
    padding: 40px 0;
    margin-bottom: 30px;
  }
  .film__header-wrapper {
    display: flex;
    margin-bottom: 20px;
  }
  .film__header-info-title {
    font-size: 1rem;
    margin-bottom: 5px;
  }
  .film__title {
    color: var(--base-color);
    font-size: 40px;
  }
  .film__info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 20px;
  }
  .film__info-bottom {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 30px;
  }
  @media(max-width: 650px) {
    .film__header-wrapper {
      flex-direction: column;
    }
    .film__info {
      margin-top: 20px;
      margin-left: 0;
    }
  }
</style>
