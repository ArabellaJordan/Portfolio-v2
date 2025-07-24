<template>
  <div class="card__project row gap-5">
    <div class="col-5 card__project--left">
      <img :src="resolvedImage" alt="project image" />
    </div>

    <div class="col card__project--right">
      <h3 class="section__title card__project--title text-end">{{ title }}</h3>
      <div v-if="description" class="card__project--description text-end">
        {{ description }}
      </div>
      <div v-if="codeLink" class="card__project--buttons mt-3">
        <a :href="codeLink" target="_blank">
          <button class="button__pill button__pill--red w-100">
            code &lt;/&gt;
          </button>
        </a>

        <a v-if="projectLink" :href="projectLink" target="_blank">
          <button class="button__pill button__pill--red text__white">
            view project
            <icon
              class="ms-1 text__white"
              :icon="['fas', 'arrow-up-right-from-square']"
              size="sm"
            />
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps([
  "image",
  "title",
  "description",
  "codeLink",
  "projectLink",
]);

const resolvedImage = computed(
  () => new URL(props.image, import.meta.url).href
);
</script>
