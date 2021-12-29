<template>
  <footer class="footer">
    <div class="container">
      <img
        src="@/images/logo/footer-logo.svg"
        class="footer__logo"
        alt="Films Collection"
      />
      <Search className="footer__search" />
    </div>
  </footer>
</template>
<script>
import Search from "./Search";
export default {
  name: "Footer",
  components: {
    Search
  },
};
</script>
<style>
.footer {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #ccc;
  line-height: 1;
}
.footer .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer__logo {
  width: 180px;
}
.footer__search {
  max-width: 500px;
}
@media (max-width: 800px) {
  .footer .container {
    flex-direction: column-reverse;
    align-items: center;
  }
  .footer__logo {
    margin-top: 15px;
  }
}
</style>
