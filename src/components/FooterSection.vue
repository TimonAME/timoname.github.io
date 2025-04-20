<template>
  <footer class="py-12 mt-12 border-t border-sunset-gray/20">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Logo and Copyright -->
        <div class="text-center md:text-left">
          <h3 class="text-2xl font-bold text-sunset-gray mb-4">Timon Amesmann</h3>
          <p class="text-sunset-gray/70">
            &copy; {{ currentYear }} Alle Rechte vorbehalten.
          </p>
        </div>

        <!-- Social Links -->
        <div class="text-center md:text-right">
          <div class="flex justify-center md:justify-end gap-4">
            <a v-for="social in socialLinks"
               :key="social.title"
               :href="social.url"
               :title="social.title"
               target="_blank"
               class="w-10 h-10 rounded-full bg-sunset-gray flex items-center justify-center transition-all duration-300 hover:bg-sunset-100 hover:scale-110">
              <span v-html="social.icon" class="fill-custom-white w-5 h-5"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());

const socialLinks = ref([
  { title: 'GitHub', url: 'https://github.com/TimonAME', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256c0 110.9 71.8 205 171.5 238.2 12.5 2.3 17-5.4 17-12v-41.8c-69.8 15.2-84.5-33.7-84.5-33.7-11.4-29-27.9-36.7-27.9-36.7-22.8-15.6 1.7-15.3 1.7-15.3 25.2 1.8 38.5 25.9 38.5 25.9 22.4 38.4 58.8 27.3 73.2 20.9 2.3-16.2 8.8-27.3 16-33.6-55.8-6.3-114.5-27.9-114.5-124.3 0-27.4 9.8-49.8 25.9-67.4-2.6-6.3-11.2-31.8 2.5-66.3 0 0 21-6.7 68.8 25.6 20-5.6 41.5-8.4 62.8-8.5 21.3.1 42.8 2.9 62.8 8.5 47.8-32.3 68.8-25.6 68.8-25.6 13.7 34.5 5.1 60 2.5 66.3 16.1 17.6 25.9 40 25.9 67.4 0 96.7-58.8 118-114.8 124.2 9 7.8 17 23.2 17 46.8v69.4c0 6.6 4.5 14.3 17 12C424.2 461 496 366.9 496 256 496 119 385 8 248 8z"/></svg>` },
  { title: 'LinkedIn', url: 'https://linkedin.com/in/timon-amesmann-98127127b', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24 107.3 0 83.3 0 55.5S24 3.7 53.84 3.7s53.84 24 53.84 51.8-24 51.8-53.84 51.8zM447.9 448h-92.68V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 15.9-44 31.3-2.3 5.6-2.8 13.4-2.8 21.3V448h-92.68s1.2-239.8 0-264.1h92.68v37.4c-.2.3-.5.7-.7 1h.7v-1c12.3-19 34.3-46.1 83.4-46.1 60.8 0 106.4 39.7 106.4 125.1V448z"/></svg>` },
  { title: 'Instagram', url: 'https://www.instagram.com/amesmann_t/', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>` },
  { title: 'Email', url: 'mailto:timon-a@outlook.at', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>` }])
</script>