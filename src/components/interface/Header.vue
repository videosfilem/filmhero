<template>
  <header class="header">
    <div class="container">
      <div class="header__container">
        <router-link to="/" class="header__logo">
          <img
            src="@/images/logo/header-logo.svg"
            alt="Films List"
            class="header__logo-image"
          />
        </router-link>
        <div class="header__navigation">
          <router-link
            to="/films"
            class="header__link"
            title="Full collection"
          >
            <img
              src="@/images/icons/collection.svg"
              alt=""
            >
          </router-link>
          <button
            class="header__search-button"
            @click="showSearch"
            aria-label="Show search field"
            title="Search"
          >
          </button>
        </div>
      </div>
      <Search className="header__search" />
    </div>
  </header>
</template>
<script>
import Search from "./Search";
export default {
  name: "Header",
  methods: {
    showSearch() {
      const headerSearch = document.querySelector('.header__search');
      const searchButton = document.querySelector('.header__search-button');
      const searchFieldInput = document.querySelector(".search-field__input");

      headerSearch.classList.toggle('header__search--visible');
      searchButton.classList.toggle('header__search-button--close');

      searchFieldInput.focus();
    },
  },
  components: {
    Search,
  },
};
</script>
<style>
.header {
  position: relative;
  background-color: var(--base-color);
}
.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
}
.header__logo {
  width: 250px;
  font-size: 0;
  margin-right: 50px;
}
.header__navigation {
  display: flex;
  align-items: center;
}
.header__link {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 20px;
  transition: transform 0.3s;
  border-radius: 3px;
  width: 20px;
  height: 20px;
}
.header__link:hover {
  transform: scale(1.2);
}
.header__search {
  width: 100%;
  padding-bottom: 20px;
  display: none;
}
.header__search--visible {
  display: block;
}
.header__search-button {
  background-image: url('./../../images/icons/search.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  width: 20px;
  height: 20px;
}
.header__search-button--close {
  background-image: url('./../../images/icons/close.svg');
}
</style>
