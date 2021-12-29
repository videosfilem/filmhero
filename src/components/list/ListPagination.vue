<template>
  <div class="list__pagination">
    <div class="list__pages">
      <button
        v-for="pageNum in count"
        :class="`list__page-num ${
          $route.query.page == undefined && pageNum == 1
            ? 'list__page-num--first'
            : ''
        } ${$route.query.page == pageNum ? 'list__page-num--current' : ''}`"
        :key="pageNum"
        @click="changePage(pageNum)"
      >
        {{ pageNum }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListPagination",
  props: {
    count: Number
  },
  methods: {
    changePage(pageNum) {
      const query = Object.assign({}, this.$route.query);
      query.page = pageNum;
      this.$router.push({ query }).catch((err) => {console.log(err)});
    },
  },
};
</script>

<style>
.list__pagination {
  margin-top: 40px;
}
.list__pages {
  display: flex;
  flex-wrap: wrap;
}
.list__page-num {
  font-size: 14px;
  font-weight: bold;
  width: 40px;
  height: 40px;
  text-align: center;
  color: #777;
  border: 1px solid #777;
  border-radius: 2px;
  background: none;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: 0.3s;
  margin-right: 5px;
  margin-bottom: 5px;
}
.list__page-num:hover {
  background-color: var(--base-color);
  border-color: var(--base-color);
  color: #fff;
}
.list__page-num:hover:after {
  visibility: visible;
  opacity: 1;
}
.list__page-num--current,
.list__page-num--first {
  background-color: var(--base-color);
  border-color: var(--base-color);
  color: #fff;
}
.list__page-num--current::after,
.list__pages .list__page-num--first::after {
  visibility: visible;
  opacity: 1;
}
</style>
