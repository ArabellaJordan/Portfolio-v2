<template>
  <div>
    <section id="home">
      <div class="home">
        <div class="home__blur"></div>
        <div class="home__left">
          <div class="">
            <h1 class="text-uppercase">Arabella</h1>
            <h2>Web Developer</h2>
          </div>
          <p class="mt-5 mb-0">lorem ipsum dolor sit amet</p>
          <div class="d-flex gap-5 mt-3">
            <icon :icon="['fab', 'github']" size="xl" />
            <icon :icon="['fab', 'linkedin']" size="xl" />
            <icon icon="envelope" size="xl" />
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
                <a class="text__red">get resume</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="home__right">
          <img :src="profileImage" alt="profile image" />
        </div>
      </div>
    </section>

    <div class="scroll__down">
      <p class="m-0 text-uppercase">scroll down</p>
      <div class="arrow"></div>
    </div>

    <div class="scroll__up button__round"><icon icon="arrow-up" /></div>

    <section id="about">
      <div class="section__container">
        <h3 class="section__title section__title--right text-uppercase">
          about me
        </h3>

        <p class="section__description text-end my-5">
          lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum
          dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit
          amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.
        </p>

        <h4 class="text-center text-uppercase fs-2">technical skills</h4>

        <div
          class="d-flex justify-content-center row-gap-4 column-gap-5 flex-wrap px-3 mt-5"
        >
          <div class="button__pill fs-5">HTML</div>
          <div class="button__pill fs-5">CSS</div>
          <div class="button__pill fs-5">JavaScript</div>
          <div class="button__pill fs-5">Bootstrap</div>
          <div class="button__pill fs-5">Tailwind</div>
          <div class="button__pill fs-5">jQuery</div>
          <div class="button__pill fs-5">Vue.js</div>
          <div class="button__pill fs-5">Node.js</div>
          <div class="button__pill fs-5">Git</div>
          <div class="button__pill fs-5">Github</div>
          <div class="button__pill fs-5">Laravel</div>
          <div class="button__pill fs-5">MySQL</div>
          <div class="button__pill fs-5">MongoDB</div>
          <div class="button__pill fs-5">REST</div>
          <div class="button__pill fs-5">GraphQL</div>
          <div class="button__pill fs-5">Express.js</div>
          <div class="button__pill fs-5">Figma</div>
          <div class="button__pill fs-5">Adobe Photoshop</div>
          <div class="button__pill fs-5">VS Code</div>
          <div class="button__pill fs-5">Postman</div>
        </div>
      </div>
    </section>

    <section id="projects">
      <div class="section__container">
        <h3 class="section__title section__title--left text-uppercase">
          projects
        </h3>

        <div class="mt-5">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="section__container">
        <h3
          class="section__title section__title--left text-uppercase text-center"
        >
          contact me
        </h3>
        <div class="d-flex justify-content-center">
          <p class="text__dark">
            <icon :icon="['fas', 'envelope']" />
            <a
              class="font__theme ms-2"
              href="mailto:jordanfaearabella@gmail.com"
            >
              jordanfaearabella@gmail.com</a
            >
          </p>
          <p class="mx-5">|</p>
          <p
            class="text__dark cursor__pointer"
            @click="copyText(+639936477699)"
          >
            <icon :icon="['fas', 'phone']" />
            <span class="font__theme ms-2"> +639936477699</span>
          </p>
          <p class="mx-5">|</p>
          <p class="text__dark">
            <icon :icon="['fas', 'location-dot']" />
            <span class="font__theme ms-2"> Laguna, Philippines</span>
          </p>
        </div>
      </div>
    </section>

    <div v-if="notif" class="notif__float">
      <p class="m-0">{{ notif }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import profileImage from "@/assets/images/profile.png";
import ProjectCard from "@/components/ProjectCard.vue";

let notif = ref("");

function copyText(mobile) {
  navigator.clipboard
    .writeText(mobile)
    .then(() => {
      notif.value = "copied text: +639936477699";
      clearNotifAfterDelay();
    })
    .catch((err) => {
      notif.value = "Failed to copy text";
      console(err);
      clearNotifAfterDelay();
    });
}

function clearNotifAfterDelay(delay = 2000) {
  setTimeout(() => {
    notif.value = "";
  }, delay);
}
</script>
