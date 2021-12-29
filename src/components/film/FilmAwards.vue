<template>
  <div class="awards">
    <h2 class="info-section-title">Awards</h2>
    <div class="awards__list">
      <div
        class="award"
        v-for="(award, index) in awards"
        :key="award.title"
        @click="showNominations"
        :data-index="index"
      >
        <div class="award__main">
          <h3 class="award__title">
            {{award.title}}
          </h3>
          <p class="award__count">
            {{award.nominations.length}} wins
          </p>
        </div>
        <ul class="award__nominations">
          <li
            v-for="nomination in award.nominations"
            :key="nomination"
          >
            {{nomination}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmAwards",
  props: {
    awards: Array
  },
  methods: {
    showNominations(e) {
      const currentAward = e.target.closest('.award');
      const awards = document.querySelectorAll('.award');
      currentAward.classList.toggle('award--opened');

      awards.forEach(award => {
        if(award.dataset.index != currentAward.dataset.index) {
          award.classList.remove('award--opened');
        }
      })
    }
  }
};
</script>

<style>
.awards {
  margin-bottom: 30px;
}
.awards:last-child {
  margin-bottom: 50px;
}
.awards__list {
  --columns: 3;
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-gap: 20px;
  margin-top: 20px;
}
.award {
  --text-color: #000;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--text-color);
  background-color: #ffe6b3;
  padding: 15px 20px;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.3s;
}

.award--opened,
.award:hover {
  --text-color: #fff;
  background-color: var(--base-color);
}
.award__main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.award__title {
  font-size: 18px;
  margin-right: 5px;
}
.award__count {
  border-bottom: 1px dashed var(--text-color);
  transition: border-bottom 0.3s;
}
.award__nominations {
  display: none;
  position: absolute;
  top: calc(100% - 5px);
  left: 0;
  width: 100%;
  max-height: 130px;
  overflow-y: auto;
  font-size: 14px;
  line-height: 18px;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
  background-color: var(--base-color);
  padding: 10px 20px;
  z-index: 10;
}
.award__nominations::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
}
.award__nominations::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 50px;
}
.award__nominations li {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}
.award__nominations li:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}
.award--opened .award__nominations {
  display: block;
}
@media (max-width: 900px) {
  .awards__list {
    --columns: 2;
  }
}
@media (max-width: 600px) {
  .awards__list {
    --columns: 1;
  }
}
</style>
