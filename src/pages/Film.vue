<template>
  <article class="film" v-if="film != undefined">
    <FilmHeader :data="film" />
    <div class="container">
      <FilmTrailer :trailer="film.trailer" v-if="film.type !== 'Series'" />
      <SeriesSeasons :seasons="film.seasons" v-if="film.type === 'Series'" />
      <FilmCast :actors="film.actors" />
      <FilmCharacters :poster="film.poster" :actors="film.actors" v-if="JSON.stringify(film.actors).includes('poster')" />
      <FilmAwards :awards="film.awards"  v-if="film.awards != undefined" />
      <FilmParts :data="films" :parts="film.parts" v-if="film.parts != undefined" />
    </div>
  </article>
</template>

<script>
  import { mapState } from 'vuex';
  import FilmHeader from '@/components/film/FilmHeader';
  import FilmTrailer from '@/components/film/FilmTrailer';
  import SeriesSeasons from '@/components/film/SeriesSeasons';
  import FilmCast from '@/components/film/FilmCast';
  import FilmCharacters from '@/components/film/FilmCharacters';
  import FilmAwards from '@/components/film/FilmAwards';
  import FilmParts from '@/components/film/FilmParts';

  export default {
    names: 'Film',
    props: {
      id: String
    },
    computed: {
      ...mapState(['films']),
      film() {
        return this.films.find(film => film['id'] === parseInt(this.id));
      }
    },
    mounted() {
      document.title = sessionStorage.pageTitle;
      if(this.film != undefined) {
        document.title = this.film.title + ' – Films Collection';
        sessionStorage.pageTitle = document.title;
      }
    },
    watch: {
      $route(to, from) {
        if(to != from) {
          document.title = this.film.title + ' – Films Collection';
        }
      }
    },
    components: {
      FilmHeader,
      FilmTrailer,
      SeriesSeasons,
      FilmCast,
      FilmCharacters,
      FilmAwards,
      FilmParts
    }
  }
</script>
<style>
  .film {
    min-height: 100vh;
  }
</style>
