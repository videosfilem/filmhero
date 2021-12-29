<template>
    <div class="film__basic">
        <router-link class="film__basic-data film__year" :to="`/films?year=${year}`">{{year}}</router-link>
        <div class="film__genres">
            <router-link v-for="genre in genres" :to="`/films?genres=${genre}`" :key="genre" class="film__basic-data film__genre">{{genre}}</router-link>
        </div>
        <div class="film__basic-data film__runtime">
            <span class="time-in-minutes">{{time}} min</span>
            <span class="time-in-hours">{{timeInHours}} h</span>
        </div>
        <div class="film__countries">
            <router-link v-for="countryTitle in countries" :to="`/films?countries=${countryTitle}`" class="film__basic-data film__country" :key="countryTitle">
                {{countryTitle}}
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FilmBasic',
        props: ['year', 'genres', 'time', 'countries'],
        computed: {
          timeInHours() {
            const hours = Math.trunc(this.time / 60);
            const minutes = this.time % 60;
            const showMinutes = minutes > 10 ? minutes : '0' + minutes
            return hours + ':' + showMinutes;
          }
        }
    }
</script>

<style>
	.film__basic {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 10px;
	}

	.film__basic-data {
		border-radius: 4px;
		margin-bottom: 5px;
	}

	.film__year {
		color: #fff;
		background-color: var(--base-color);
		padding: 5px 15px;
	}

	.film__genres {
		display: flex;
		flex-wrap: wrap;
	}
	.film__genre {
		display: block;
		padding: 5px 15px;
		background-color: #ffe6b3;
		transition: .3s;
		margin-right: 5px;
	}
	.film__genre:hover {
		background-color: #ffdd99;
	}

	.film__runtime {
		min-width: 96px;
		padding: 5px 15px;
		background-color: #ddd;
		text-align: center;
    user-select: none;
	}

	.film__runtime .time-in-hours {
		display: none;
	}

	.film__runtime:hover .time-in-minutes {
		display: none;
	}

	.film__runtime:hover .time-in-hours {
		display: block;
	}

	.film__country {
		display: inline-block;
		padding: 5px 15px;
		background-color: #ddd;
		margin-right: 3px;
	}
	.film__country:last-child {
		margin-right: 0;
	}
</style>
