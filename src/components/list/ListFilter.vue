<template>
	<div class="filters">
    <div class="filters__wrapper">
      <div class="filter" v-for="filter in filters" :key="filter.id">
        <select
          class="filter__select"
          v-model="filter.model"
          @change="setFilter(filter.jsonProperty, filter.model)"
          :class="$route.query[filter.jsonProperty] && 'filter__select--selected'"
          :data-type="filter.jsonProperty"
        >
          <option disabled value="">
            {{$route.query[filter.jsonProperty] ? $route.query[filter.jsonProperty] : filter.title}}
          </option>
          <option
            v-for="option in filter.list"
            :key="option"
          >
            {{option}}
          </option>
        </select>
        <span class="filter__status"></span>
        <button class="filter__reset" @click="resetCurrentFilter">
          <img src="@/images/icons/close-black.svg" alt="">
        </button>
      </div>
    </div>
		<button class="filters__clear" @click="clearFilters" v-if="filterLength != 0" title="Clear filters">
      <img src="@/images/icons/refresh.svg" alt="">
    </button>
	</div>
</template>

<script>
  import years from '@/data/years.js';
	export default {
		name: 'ListFilter',
		data() {
			return {
        filters: [
          {
            id: 1,
            title: "Type",
            jsonProperty: "type",
            model: "",
            list: ["Film", "Animation", "Series"]
          },
          {
            id: 2,
            title: "Genres",
            jsonProperty: "genres",
            model: "",
            list: ["Sci-Fi", "Adventures", "Action", "Fantasy", "Drama", "Comedy", "Crime", "Romance", "Thriller"]
          },
          {
            id: 3,
            title: "Collections",
            jsonProperty: "collections",
            model: "",
            list: ["Favorites", "Legends", "Space Adventures", "Invaders", "Cars and Speed", "Dystopia", "Mysteries of the Past", "The World of Future", "Robots", "Fantasy World", "Real Life", "Superpower", "Detectives and Agents", "Monsters", "Anime", "Disaster", "Arts"]
          },
          {
            id: 4,
            title: "Year",
            jsonProperty: "year",
            model: "",
            list: years
          }
        ]
			}
		},
		methods: {
			setFilter(param, item) {
        const query = Object.assign({}, this.$route.query);
        query.page = 1;
        query[param] = item;
        this.$router.push({ query }).catch(err => console.log(err));
			},
      clearFilters() {
        const selects = document.querySelectorAll('.filter__select');
        this.$router.push('/films');
        selects.forEach(select => select.classList.remove('filter__select--selected'));
        this.filters.forEach(filter => filter.model = "");
      },
      resetCurrentFilter(e) {
        const query = Object.assign({}, this.$route.query);
        const filter = e.target.closest('.filter');
        const select = filter.querySelector('select');
        const currentFilter = this.filters.find(filter => filter.jsonProperty == select.dataset.type);
        currentFilter.model = "";
        delete query[select.dataset.type];
        this.$router.push({ query }).catch(err => console.log(err));
        query.page = 1;
      }
		},
		computed: {
			filterLength() {
				return Object.keys(this.$route.query).length;
			}
		}
	}
</script>

<style>
	.filters {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
		margin-bottom: 40px;
	}
	.filters__wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
	.filters__clear {
    width: 40px;
    height: 40px;
    transition: transform 0.3s;
	}
  .filters__clear:hover {
    transform: rotateZ(90deg);
  }
  .filter {
    --selectColor: #777;
    display: flex;
    position: relative;
  }
  .filter__select {
    color: var(--selectColor);
    font-size: .9rem;
    font-weight: bold;
    border: 2px solid var(--selectColor);
    border-radius: 2px;
    padding: 10px 40px 10px 20px;
    outline: none;
    appearance: none;
    min-width: 150px;
    cursor: pointer;
    transition: .3s;
  }
  .filter__select:focus,
  .filter__select--selected {
    --selectColor: var(--base-color);
  }
  .filter__status {
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    right: 20px;
    width: 10px;
    height: 10px;
    box-shadow: 2px 2px 0 var(--selectColor);
    margin-top: -10px;
    transform: rotate(45deg);
    z-index: -1;
    transition: .3s;
  }
  .filter__reset {
    display: none;
    align-items: center;
    background-color: #f2f2f2;
    padding: 0 10px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .filter__reset img {
    width: 15px;
    height: 15px;
  }
  .filter__select:focus + .filter__status,
  .filter__select--selected + .filter__status {
    --selectColor: var(--base-color);
  }
  .filter__select--selected + .filter__status {
    right: 55px;
  }
  .filter__select--selected ~ .filter__reset {
    display: flex;
  }
  .filter__select option[disabled] {
    display: none;
  }
  @media (max-width: 400px) {
    .filter, .filter__select {
      width: 100%;
    }
  }
</style>
