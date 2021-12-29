<template>
  <div class="characters">
    <h2 class="info-section-title">Character Posters</h2>
    <div
      class="characters__list custom-scroll"
      @click="resize"
    >
      <div
        class="character"
        v-for="actor in filteredActors"
        :key="actor.name"
      >
        <img class="character__image" :src="`/characters/${poster}/${actor.character.poster}.webp`" alt="">
        <span class="character__name">
          {{ actor.character.name }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'FilmCaracters',
    props: {
      actors: Array,
      poster: String
    },
    methods: {
      resize() {
        const list = document.querySelector('.characters__list');
        list.classList.toggle('characters__resized');
        list.scrollIntoView({behavior: "smooth"});
      }
    },
    computed: {
      filteredActors() {
        return this.actors.filter(actor => actor.character.poster);
      }
    }
  }
</script>
<style>
  .characters {
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .characters__list {
    display: flex;
    overflow-x: auto;
    padding: 20px 0;
    transition: opacity .3s;
  }
  .character {
    position: relative;
    flex-shrink: 0;
    height: 250px;
    cursor: pointer;
    transition: 0.3s;
    overflow: hidden;
  }
  .characters__resized .character {
    height: 500px;
    margin-right: 20px;
  }
  .character:last-child {
    margin-right: 0;
  }
  .character__image {
    height: 100%;
  }
  .character__name {
    position: absolute;
    display: block;
    color: #fff;
    font-size: 18px;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition: 0.3s;
  }
  .characters__resized .character__name {
    opacity: 1;
  }
  @media(max-width: 500px) {
    .characters__resized .character {
      height: auto;
      width: 100%;
    }
    .characters__resized .character__image {
      width: 100%;
      object-fit: cover;
    }
  }
</style>
