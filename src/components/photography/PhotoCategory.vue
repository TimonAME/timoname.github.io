<template>
  <div class="mb-8">
    <h3 class="text-3xl mb-6 text-gray-800">{{ category.title }}</h3>
    <div class="relative w-full h-[70vh] md:h-[70vh] overflow-hidden rounded-xl shadow-lg" data-aos="zoom-in">
      <div
          ref="slideshowContainer"
          class="absolute top-0 left-0 w-full h-full flex transition-transform duration-500"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
            v-for="(image, index) in category.images"
            :key="index"
            class="relative min-w-full h-full flex justify-center items-center overflow-hidden"
            :style="{ '--bg-image': `url(${image})` }"
        >
          <div class="absolute inset-[-10px] bg-cover bg-center filter blur-xl brightness-[0.7] z-[1] transform-gpu backface-hidden transition-all duration-300"
               :style="{ backgroundImage: `url(${image})` }">
          </div>
          <img
              :src="image"
              :alt="category.title"
              class="min-w-full h-full object-contain relative z-[2] transition-transform duration-300 hover:scale-[1.02]"
          >
        </div>
      </div>

      <button
          class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white border-none p-4 cursor-pointer text-2xl transition-all duration-300 z-10 rounded-full w-14 h-14 flex items-center justify-center opacity-70 hover:bg-black/80 hover:opacity-100 focus:outline-none focus:shadow-[0_0_0_3px_rgba(255,255,255,0.5)]"
          @click="prevSlide"
      >❮</button>

      <button
          class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white border-none p-4 cursor-pointer text-2xl transition-all duration-300 z-10 rounded-full w-14 h-14 flex items-center justify-center opacity-70 hover:bg-black/80 hover:opacity-100 focus:outline-none focus:shadow-[0_0_0_3px_rgba(255,255,255,0.5)]"
          @click="nextSlide"
      >❯</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  category: {
    type: Object,
    required: true
  }
})

const currentIndex = ref(0)

function prevSlide() {
  if (currentIndex.value === 0) {
    currentIndex.value = props.category.images.length - 1
  } else {
    currentIndex.value--
  }
}

function nextSlide() {
  if (currentIndex.value === props.category.images.length - 1) {
    currentIndex.value = 0
  } else {
    currentIndex.value++
  }
}
</script>