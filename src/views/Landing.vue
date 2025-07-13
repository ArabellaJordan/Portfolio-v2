<template>
  <div>
    <section id="home">
      <div class="home">
        <div class="home__left">
          <div class="">
            <h1 class="text-uppercase">Arabella</h1>
            <h2>Web Developer</h2>
          </div>
          <p class="mt-5 mb-0">lorem ipsum dolor sit amet</p>
          <div class="d-flex gap-4">
            <icon :icon="['fab', 'github']" size="2xl" />
            <icon :icon="['fab', 'linkedin']" size="2xl" />
            <icon icon="envelope" size="2xl" />
          </div>
          <nav class="home__nav">
            <ul class="home__items">
              <li class="home__item">
                <a>about me</a>
              </li>
              <li class="home__item">
                <a>projects</a>
              </li>
              <li class="home__item">
                <a>contact</a>
              </li>
              <li class="home__item">
                <a>get resume</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="home__image">
          <img :src="profileImage" alt="profile image" />
        </div>
      </div>
    </section>

    <div>
      <p>scroll down</p>
    </div>
  </div>
</template>

<script setup>
import profileImage from "@/assets/images/profile.png";
</script>
