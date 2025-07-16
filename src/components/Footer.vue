<template>
  <div class="footer">
    <div class="footer__container">
      <p class="my-0">
        &#169; <span class="mx-3 text__white">{{ year }}</span> Arabella Jordan
      </p>
      <div class="d-flex gap-5">
        <a href="https://github.com/ArabellaJordan" target="_blank"
          ><icon :icon="['fab', 'github']" size="2xl"
        /></a>
        <icon :icon="['fab', 'linkedin']" size="2xl" />
        <icon icon="envelope" size="2xl" />
      </div>
      <nav>
        <ul class="d-flex gap-5 p-0 m-0 justify-content-center">
          <li class="text-uppercase">home</li>
          <li class="text-uppercase">about</li>
          <li class="text-uppercase">projects</li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup>
const year = new Date().getFullYear();
</script>
