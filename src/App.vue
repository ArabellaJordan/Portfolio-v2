<template>
  <!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->

  <main>
    <Header />
    <Landing />
    <Footer />
  </main>
</template>
<script setup>
import Landing from "./views/Landing.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
