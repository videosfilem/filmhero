<template>
  <div class="film__cast">
    <h2 class="info-section-title">Cast</h2>
    <div class="film__actors">
      <router-link
        v-for="actor in actors"
        :to="`/films?actors=${actor.name}`"
        class="film__actor"
        :key="actor.name"
      >
          <img
            :src="`/photos/${actorImage(actor.name)}.jpg`"
            class="film__actor-image"
            alt=""
            loading="lazy"
          />
        <div class="film__actor-info">
          <h3 class="film__actor-name">{{ actor.name }}</h3>
          <p class="film__actor-role">{{ actor.character.name }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FilmCast",
    props: ["actors"],
    methods: {
      actorImage(str) {
        return str.replace(/[\s-]/g, "_").replace(/[.']/g, "");
      },
      emptyActorPhoto() {
        const actorPhotos = document.querySelectorAll('.film__actor-image');
        [...actorPhotos].forEach(actorPhoto => {
          actorPhoto.onerror = () => {
            actorPhoto.src = '/photos/noimage.jpg';
          }
        })
      }
    },
    mounted() {
      this.emptyActorPhoto();
    }
  };
</script>

<style>
.film__cast {
  margin: 20px 0;
}
.film__actors {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 20px;
}
@media (max-width: 800px) {
  .film__actors {
    grid-template-columns: repeat(2, 1fr);
  }
}
.film__actor {
  display: flex;
  align-items: center;
  background-color: #f7f7f7;
  padding-right: 10px;
  min-height: 90px;
  border-radius: 4px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.film__actor-image {
  font-size: 0;
  flex-shrink: 0;
  margin-right: 20px;
  width: 60px;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
}
@media (max-width: 550px) {
  .film__actors {
    display: block;
  }
  .film__actor {
    margin-bottom: 10px;
  }
}
</style>
