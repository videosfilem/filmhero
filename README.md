# Коллекция фильмов

Я большой фанат кино, в особенности мейнстримных фильмов в жанре фантастика, фэнтези, приключения.

Так же мне нравится вести список любимых фильмов и собирать о них информацию, это vue-приложение квинтесенция всего вышеперечисленного. Так же это тренировочный **проект для портфолио.**

Ознакомиться с приложение можно по [ссылке](https://filmscollection.netlify.app/).

Структура приложения максимально проста. На странице [фильмов](https://filmscollection.netlify.app/films) представлен полный список моих любимых фильмов и возможность фильтровать их, реализованная через [filter](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) и query-параметры [vue-router](https://router.vuejs.org/ru/). Каждый фильм открывается по роуту в зависимости от ID (прим. [The Lord of the Rings: Return of the King](https://filmscollection.netlify.app/film/30)))

### JSON данные

В приложения нету бэкенда и все данные берутся из одного огромного [json-файла](https://github.com/andrikotliar/filmscollection/blob/main/public/database/database.json), который грузиться при первом запуске через Fetch API.

Данные в этот файл собираются из папки [/db/](https://github.com/andrikotliar/filmscollection/tree/main/db) node.js-[скриптом](https://github.com/andrikotliar/filmscollection/blob/main/createDB.js)

### Технологии

- Vue.js
- vue-router
- VUEX
- CSS
- Node.js

За сборку проекта отвечает [Netlify](https://www.netlify.com/).
