<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
  import Header from './components/interface/Header';
  import Footer from './components/interface/Footer';

  if(process.env.NODE_ENV === 'production') {
    if ("serviceWorker" in navigator) {
        self.addEventListener("load", async () => {
            const container = navigator.serviceWorker;
            if (container.controller === null) {
                await container.register("/sw.js");
            }
        });
    }
  }

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    },
    async created() {
      await this.$store.dispatch('LOAD_FILMS');
    }
  }
</script>

<style>
  :root {
    --base-color: #006db7;
    --base-color-rgb: 0, 109, 183;
    --main-gradient: linear-gradient(45deg, var(--base-color), #4db6ac);
  }
  @font-face {
    font-family: 'Roboto';
    src: url("/fonts/Roboto-Regular.woff2");
    font-weight: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url("/fonts/Roboto-Bold.woff2");
    font-weight: bold;
  }
  *, ::before, ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li {
    list-style: none;
  }
  button {
    display: block;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
  }
  input, select {
    color: inherit;
    font-size: inherit;
    font-family: inherit;
  }
  select, option {
    background-color: transparent;
  }
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    max-width: 1920px;
    margin: 0 auto;
  }
  .container {
    max-width: 1020px;
    margin: 0 auto;
  }
  .page {
    position: relative;
    min-height: 600px;
    margin: 40px auto 80px;
  }
  .page-title {
    color: var(--base-color);
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media (hover: hover) {
    .custom-scroll {
      scrollbar-width: thin;
      scrollbar-color: var(--base-color) #dbdbdb;
    }
    .custom-scroll::-webkit-scrollbar {
      background-color: #fff;
      height: 12px;
      transition: 0.3s;
    }
    .custom-scroll::-webkit-scrollbar-thumb {
      background-color: #fff;
      border-radius: 50px;
      transition: 0.3s;
    }
    .custom-scroll:hover::-webkit-scrollbar {
      background-color: #f2f2f2;
    }
    .custom-scroll:hover::-webkit-scrollbar-thumb {
      background-image: var(--main-gradient);
    }
  }
  @media (hover: none) {
    .custom-scroll {
      scrollbar-width: none;
    }
    .custom-scroll::-webkit-scrollbar {
      display: none;
    }
  }
  @media (max-width: 1200px) {
    .container {
      max-width: 90%;
    }
  }
</style>
