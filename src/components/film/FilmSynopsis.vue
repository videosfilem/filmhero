<template>
  <p class="film__synopsis">
    {{synopsis}}
  </p>
</template>

<script>
  export default {
    name: 'FilmSynopsis',
    props: {
      synopsis: String
    }
  }
</script>

<style>
.film__synopsis {
  line-height: 1.5;
  padding: 10px 0;
  margin-bottom: 20px;
  border-bottom: 4px solid #ddd;
}
</style>
