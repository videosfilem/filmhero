<template>
	<div class="list__header">
		<h2 class="list__title" v-if="$route.query.parts">
      {{$route.query.parts}}
    </h2>
    <h2 class="list__title" v-if="$route.query.collections">
      {{$route.query.collections}}
    </h2>
    <h2 class="list__title" v-if="$route.query.director">
     Films by <span> {{$route.query.director}} </span>
   </h2>
   <div class="list__actor" v-if="$route.query.actors">
     <img :src="`/photos/${actorImage($route.query.actors)}.jpg`" :alt="$route.query.actors">
     <div class="list__actor-data">
       <p class="list__actor-title">Actor</p>
       <p class="list__actor-name">
         {{$route.query.actors}}
       </p>
     </div>
   </div>
 </div>
</template>
<script>
	export default {
		name: 'ListHeader',
    methods: {
      actorImage(str) {
        return str.replace(/[\s-]/g, "_").replace(/[.']/g, "");
      }
    }
  }
</script>
<style>
	.list__title {
    color: var(--base-color);
		font-size: 40px;
		margin-bottom: 20px;
	}
	.list__title span {
		color: #ff0000;
	}
  .list__actor {
    display: flex;
    align-items: flex-end;
    margin-bottom: 20px;
  }
  .list__actor img {
    width: 120px;
    border-radius: 2px;
    margin-right: 20px;
  }
  .list__actor-name {
    font-size: 40px;
    font-weight: bold;
    color: var(--base-color);
  }
  @media (max-width: 550px) {
    .list__actor {
      overflow-x: auto;
    }
    .list__actor img {
      width: 100px;
    }
    .list__actor-name {
      font-size: 25px;
    }
  }
</style>
