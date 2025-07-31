<template>
  <div class="header">
    <nav class="header__nav">
      <ul class="header__items">
        <li class="header__item" @click="moveTo('home')">Home</li>
        <li class="header__item" @click="moveTo('about')">About</li>
        <li class="header__item" @click="moveTo('projects')">Projects</li>
        <li class="header__item" @click="moveTo('contact')">Contact</li>
      </ul>
    </nav>

    <div class="header__menu"><icon icon="bars" size="2xl" /></div>
    <div class="header__mobile">
      <nav class="header__mobile--nav">
        <ul class="header__mobile--items">
          <li class="header__mobile--item" @click="moveTo('home')">Home</li>
          <li class="header__mobile--item" @click="moveTo('about')">About</li>
          <li class="header__mobile--item" @click="moveTo('projects')">
            Projects
          </li>
          <li class="header__mobile--item" @click="moveTo('contact')">
            Contact
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits(["section"]);

function moveTo(section) {
  emit("section", section);
}
</script>
