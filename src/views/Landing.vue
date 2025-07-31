<template>
  <div>
    <section id="home">
      <div class="home__blur"></div>
      <div class="home">
        <div class="home__left">
          <div class="">
            <h1 class="text-uppercase">Arabella</h1>
            <h2>Web Developer</h2>
          </div>
          <p class="mt-5 mb-0">
            Focused on progress, passionate about development,<br />
            and ready to bring value to every project.
          </p>
          <!-- <p class="mt-5 mb-0">Empowering Ideas Through Code.</p>
          <p class="mt-5 mb-0">Eager to Learn. Passionate to Build.</p> -->
          <div
            class="d-flex justify-content-center justify-content-md-start gap-5 mt-3"
          >
            <icon :icon="['fab', 'github']" size="xl" />
            <icon :icon="['fab', 'linkedin']" size="xl" />
            <icon icon="envelope" size="xl" />
          </div>
          <nav class="home__nav">
            <ul class="home__items">
              <li class="home__item">
                <a href="#about">about me</a>
              </li>
              <li class="home__item">
                <a href="#projects">projects</a>
              </li>
              <li class="home__item">
                <a href="#contact">contact</a>
              </li>
              <li
                class="home__item"
                @click="openDocument('../assets/docs/jordan-resume.pdf')"
              >
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

    <!-- <div class="scroll__up button__round"><icon icon="arrow-up" /></div> -->

    <section id="about">
      <div class="section__container">
        <h3 class="section__title section__title--right text-uppercase">
          about me
        </h3>

        <p class="section__description text-end my-5">
          I am a web developer with a background in Computer Science and
          real-world experience in both front-end and back-end development. I’ve
          worked on transforming wireframes and mockups into fully functional
          websites, applying responsive design principles and clean code
          practices. <br />
          <br />My experience includes full-stack development, database
          management,and version control, gained through professional work,
          internship, and self-study. I’m driven by a passion for continuous
          learning and growth, always striving to improve my skills and follow
          best practices in every project I take on.
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
        <p class="section__description my-5">
          Here are a few projects I’ve built to sharpen my skills and deliver
          value. While I’ve had the opportunity to work on additional impactful
          applications, some are not publicly available due to the private
          nature of clients and in-house systems.
        </p>

        <div class="mt-5">
          <div v-for="project in projects">
            <ProjectCard
              :image="project.image"
              :title="project.title"
              :description="project.description"
              :code-link="project.codeLink"
              :project-link="project.projectLink"
            />
          </div>
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
        <div
          class="d-flex flex-column flex-md-row align-items-center justify-content-center"
        >
          <p class="text__dark">
            <icon :icon="['fas', 'envelope']" />
            <a
              class="font__theme ms-2"
              href="mailto:jordanfaearabella@gmail.com"
            >
              jordanfaearabella@gmail.com</a
            >
          </p>
          <p class="mx-5 d-none d-md-inline">|</p>
          <p
            class="text__dark cursor__pointer"
            @click="copyText(+639936477699)"
          >
            <icon :icon="['fas', 'phone']" />
            <span class="font__theme ms-2"> +639936477699</span>
          </p>
          <p class="mx-5 d-none d-md-inline">|</p>
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
import { ref, watch } from "vue";
import profileImage from "@/assets/images/profile.png";
import ProjectCard from "@/components/ProjectCard.vue";

const props = defineProps(["section"]);
let notif = ref("");
const projects = [
  {
    image: "../assets/images/portfolio.png",
    title: "Website Portfolio",
    description:
      "Portfolio website built using Vue.js, SCSS, and Vite to showcase my skills and some personal projects.",
    codeLink: "https://github.com/ArabellaJordan/Portfolio-v2",
    // projectLink: "https://arabellajordan.netlify.app/",
  },
  {
    image: "../assets/images/clinic.png",
    title: "Appointment Scheduling and Patient Record System",
    description:
      "A capstone web application developed for a dental clinic using the TALL stack (Tailwind CSS, Alpine.js, Laravel, and Livewire). Built to manage appointment scheduling and patient records efficiently.",
    // codeLink: "https://github.com/ArabellaJordan/Dental-Clinic",
    // projectLink: "https://dental-clinic-main-lkgzmx.laravel.cloud/",
  },
  {
    image: "../assets/images/piano.png",
    title: "Mini Piano",
    description:
      "A mini piano built with Vanilla JavaScript. Can be played with both mouse and keyboard.",
    codeLink: "https://github.com/ArabellaJordan/Piano-Project",
    projectLink: "https://arabellajordan.github.io/Piano-Project/",
  },
];

/**
 * Scrolls smoothly to a section on the page.
 * @param {string} id - The HTML ID of the section to scroll to.
 */
function moveTo(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" }); // scrolls smoothly
  }
}

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

/**
 * Opens the document on a new tab
 * @param {string} path - The relative path of the target document.
 */
function openDocument(path) {
  const url = new URL(path, import.meta.url).href;
  window.open(url, "_blank").focus;
}

// watch for changes
watch(
  () => props.section,
  (newValue, oldValue) => {
    moveTo(newValue);
  }
);
</script>
