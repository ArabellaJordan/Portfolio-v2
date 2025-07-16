<template>
  <div class="card__project row gap-5">
    <div class="col-5 card__project--left">
      <img :src="projectImage" alt="project image" />
    </div>

    <div class="col card__project--right">
      <h3 class="section__title card__project--title text-end">
        Project Title
      </h3>
      <div class="card__project--description text-end">
        lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum
        dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.
        lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.
      </div>
      <div class="card__project--buttons mt-3">
        <button class="button__pill button__pill--red">code &lt;/&gt;</button>
        <button class="button__pill button__pill--red text__white">
          view project
          <icon
            class="ms-1 text__white"
            :icon="['fas', 'arrow-up-right-from-square']"
            size="sm"
          />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import projectImage from "@/assets/images/project.png";
</script>
