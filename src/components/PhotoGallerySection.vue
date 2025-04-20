<template>
  <section class="container py-5">
    <h2 class="text-4xl md:text-6xl font-bold leading-tight text-sunset-gray mb-12 text-left cursor-default">Photography</h2>

    <div class="flex flex-col gap-16">
      <PhotoCategory
          v-for="category in photoCategories"
          :key="category.title"
          :category="category" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import PhotoCategory from './photography/PhotoCategory.vue';

const photoCategories = ref([
  {
    title: 'Italien',
    images: [
      '/Images/galery/IMG_0126.jpg',
      '/Images/galery/IMG_0098.jpg',
      '/Images/galery/IMG_0116.jpg',
      '/Images/galery/IMG_9991.jpg',
      '/Images/galery/IMG_0049.jpg',
      '/Images/galery/IMG_0137.jpg',
      '/Images/galery/IMG_0025.jpg',
      '/Images/galery/IMG_9955.jpg'
    ]
  },
  {
    title: 'Namibia',
    images: [
      '/Images/galery/IMG_2709.jpg',
      '/Images/galery/IMG_2383.jpg',
      '/Images/galery/IMG_2651.jpg',
      '/Images/galery/IMG_2229.jpg',
      '/Images/galery/IMG_2069.jpg'
    ]
  },
  {
    title: 'Kopenhagen',
    images: [
      '/Images/galery/IMG_9306.jpg',
      '/Images/galery/IMG_9276.jpg',
      '/Images/galery/IMG_9201.jpg'
    ]
  },
  {
    title: 'Badgastein',
    images: [
      '/Images/galery/IMG_9892.jpg',
      '/Images/galery/IMG_9935.jpg',
      '/Images/galery/IMG_9876.jpg'
    ]
  }
]);
</script>