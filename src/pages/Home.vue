<template>
  <div class="home">
    <div class="container">
      <Collection
          :films="films"
          title="New films"
      />
      <Collection
          :films="films"
          property="collections"
          value="Favorites"
          link="/films?collections=Favorites"
          title="Favorites"
          sort="title"
      />
      <Collection
          :films="collections"
          title="Collections"
          :itemLink="true"
          :sliceNum="20"
          classNameModificator="collection"
      />
      <Collection
          :films="cu"
          title="Cinematic Universes"
          :itemLink="true"
          classNameModificator="collection"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Collection from "@/components/interface/Collection";
import collectionsList from "@/data/collections-list.json";
import cinematicUniverses from "@/data/cinematic-universes.json";

export default {
  name: "Home",
  data() {
    return {
      collections: collectionsList,
      cu: cinematicUniverses
    };
  },
  computed: {
    ...mapState(["films"])
  },
  components: {
    Collection
  },
  mounted() {
    document.title = "Films Collection";
    sessionStorage.pageTitle = document.title;
  },
};
</script>
<style>
  .home {
    padding: 50px 0;
  }
</style>
