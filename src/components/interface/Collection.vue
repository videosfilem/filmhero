<template>
  <div class="collection">
    <h2 class="collection__title">
      <router-link :to="link" v-if="link" class="collection__link">
        {{ title }}
      </router-link>
      <span v-else> {{ title }} </span>
    </h2>
    <div class="collection__body custom-scroll">
      <router-link
        v-for="movie in setCategory.slice(0, sliceNum)"
        :class="`movie movie--${classNameModificator}`"
        :key="movie.id"
        :to="itemLink ? movie.id : `/film/${movie.id}`"
      >
        <div class="movie__cover">
          <img :src="`posters/${movie.poster}.webp`" alt="" loading="lazy" />
        </div>
        <h3 class="movie__title">
          {{movie.title}}
        </h3>
        <span class="movie__mark" v-if="movie.collections && movie.collections.includes('Coming Soon')">
          Coming Soon
        </span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Collection",
  props: {
    property: String,
    value: String,
    title: String,
    films: Array,
    link: String,
    sort: String,
    sliceNum: {
      type: Number,
      default: 6
    },
    itemLink: Boolean,
    classNameModificator: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    sortedFilms() {
      const films = [...this.films];
      return films.sort();
    },
    setCategory() {
      let updatedFilms = [];
      if (this.property) {
        updatedFilms = this.films.filter(film => film[this.property] && JSON.stringify(film[this.property]).includes(this.value))
      }
      else {
        updatedFilms = this.films;
      }

      if(this.sort) {
        return updatedFilms.sort((a, b) => a[this.sort] > b[this.sort] ? 1 : -1);
      }
      return updatedFilms;
    }
  },
};
</script>
<style>
.collection {
  margin-bottom: 30px;
}
.collection__title {
  display: inline-block;
  color: var(--base-color);
  font-size: 30px;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 20px;
}
.collection__link {
  position: relative;
  display: flex;
  align-items: center;
}
.collection__title span {
  font-size: 40px;
}
.collection__link::after {
  content: "";
  display: block;
  width: 25px;
  height: 25px;
  background: url("./../../images/icons/arrow.svg") no-repeat center / 100%;
  margin-left: 10px;
  margin-top: 3px;
}
.collection__body {
  position: relative;
  display: flex;
  align-items: flex-start;
  padding-bottom: 10px;
  overflow-x: auto;
  min-height: 230px;
}
.movie {
  flex-shrink: 0;
  position: relative;
  width: 153px;
  margin-right: 20px;
}
.movie:last-child {
  margin-right: 0;
}
.movie__cover {
  height: 230px;
  background-color: #f2f2f2;
  border-radius: 3px;
  overflow: hidden;
}
.movie--collection .movie__cover {
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.3), 6px 6px 0 rgba(0, 0, 0, 0.1);
}
.movie__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.movie__title {
  font-size: 14px;
  font-weight: normal;
  padding-top: 10px;
  text-align: center;
  transition: color 0.3s;
}
.movie--collection .movie__title {
  font-size: 16px;
}
.movie:hover .movie__title {
  color: var(--base-color);
}
.movie__mark {
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  font-size: 10px;
  text-align: center;
  text-transform: uppercase;
  background-color: rgba(255, 49, 49, 0.85);
  border-bottom-right-radius: 3px;
  padding: 8px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
}
@media (max-width: 550px) {
  .collection__title {
    font-size: 20px;
  }
  .collection__title span {
    font-size: 30px;
  }
  .collection__body {
    min-height: 190px;
  }
  .movie {
    width: 130px;
  }
  .movie__cover {
    height: 190px;
  }
}
</style>
