<template>
  <div class="list container">
    <ListHeader />
    <ListFilter />
    <div class="list__films">
      <router-link
        class="list__film"
        v-for="film in paginatedFilms"
        :to="`/film/${film.id}`"
        :title="`${film.title} (${film.year})`"
        :key="film.id"
      >
        <div class="list__role" v-if="$route.query.actors">
          <p class="list__role-subtitle">
            Character
          </p>
          <h3 class="list__role-name">
            {{actorRole(film.actors)}}
          </h3>
        </div>
        <div class="list__film-cover">
          <img
            :src="`/posters/${film.poster}.webp`"
            :alt="film.title"
            loading="lazy"
          />
        </div>
        <h3 class="list__film-title">
          {{film.title}}
        </h3>
        <p class="list__film-subtitle">
          ({{film.year}})
        </p>
      </router-link>
    </div>
    <p class="list__empty" v-if="displayedFilms.length == 0">Films not found</p>
    <ListPagination
      :count="pageCount"
      v-if="pageCount > 1"
    />
  </div>
</template>

<script>
import ListHeader from "@/components/list/ListHeader";
import ListFilter from "@/components/list/ListFilter";
import ListPagination from "@/components/list/ListPagination";

export default {
  name: "Films",
  data() {
    return {
      perPage: 24,
    };
  },
  methods: {
    paginate(films) {
      let page;
      if (this.$route.query.page) {
        page = this.$route.query.page;
      } else {
        page = 1;
      }
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return films.slice(from, to);
    },
    actorRole(actors) {
      const actorData = actors.find(actor => actor.name === this.$route.query.actors);
      return actorData.character.name.split('/')[0];
    }
  },
  computed: {
    films() {
      return this.$store.state.films;
    },
    displayedFilms() {
      let filteredParams = Object.assign({}, this.$route.query);
      delete filteredParams.page;
      return this.films.filter((film) => {
        return Object.keys(filteredParams).every((property) => {
          let regex = new RegExp(String(filteredParams[property]), "i");
          return regex.test(JSON.stringify(film[property]));
        });
      });
    },
    paginatedFilms() {
      return this.paginate(this.displayedFilms);
    },
    pageCount() {
      return Math.ceil(this.displayedFilms.length / this.perPage);
    },
  },
  mounted() {
    document.title = "All films – Films Collection";
    sessionStorage.pageTitle = document.title;
  },
  components: {
    ListHeader,
    ListFilter,
    ListPagination
  },
};
</script>

<style>
.list {
  min-height: 900px;
  margin-top: 40px;
  margin-bottom: 40px;
}
.list__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  margin-top: 30px;
  margin-bottom: 30px;
}
.list__info b {
  font-weight: bold;
  font-size: 18px;
  padding-left: 10px;
}
.list__info-column {
  display: flex;
  align-items: center;
  gap: 20px;
}
.list__empty {
  color: #ff0000;
}
.list__films {
  --columns: 6;
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-gap: 25px;
  align-items: start;
  margin-bottom: 20px;
}
.list__film {
  position: relative;
  display: block;
  width: 100%;
}
.list__role {
  margin-bottom: 5px;
}
.list__film-cover {
  width: 100%;
  aspect-ratio: 11/16;
  border-radius: 2px;
  overflow: hidden;
  background-color: #f2f2f2;
}
.list__film-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.list__film-title,
.list__role-name {
  text-align: center;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  transition: color 0.3s;
}
.list__film-title {
  margin-top: 5px;
}
.list__film:hover .list__film-title,
.list__film:hover .list__role-name {
  color: var(--base-color);
}
.list__film-subtitle,
.list__role-subtitle {
  text-align: center;
  font-size: 12px;
  color: #777;
}
@media (max-width: 900px) {
  .list__films {
    --columns: 4;
  }
}
@media (max-width: 600px) {
  .list__films {
    --columns: 3;
  }
}
@media (max-width: 400px) {
  .list__films {
    --columns: 2;
  }
}
</style>
