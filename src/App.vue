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

  <Header @section="moveTo" />

  <main>
    <Landing :section="pageSection" />
  </main>

  <Footer @section="moveTo" />
</template>
<script setup>
import { ref } from "vue";
import Landing from "./views/Landing.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const pageSection = ref("");

function moveTo(section) {
  pageSection.value = section;
}
</script>
