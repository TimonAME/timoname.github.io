<template>
  <section class="container mx-auto px-4 py-16">
    <h2 class="text-4xl md:text-6xl font-bold leading-tight text-sunset-gray mb-12 text-left cursor-default">Skillsets</h2>

    <!-- Interactive skill categories tabs -->
    <div class="mb-10">
      <div class="flex flex-wrap gap-4 justify-center md:justify-start">
        <button
            v-for="(category, index) in categories"
            :key="index"
            @click="activeCategory = index"
            class="px-5 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none"
            :class="activeCategory === index ?
            'bg-sunset-gray text-custom-white shadow-lg' :
            'bg-white text-sunset-gray border border-sunset-200 hover:bg-sunset-100/10'"
        >
          <div class="flex items-center gap-2">
            <span>{{ category.name }}</span>
          </div>
        </button>
      </div>
    </div>

    <!-- Skills cards with transform animation -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Main skills showcase -->
      <div data-aos="fade-right" class="relative">
        <div class="bg-white p-8 rounded-lg shadow-[5px_5px_0px_3px_theme(colors.sunset-200)] transition-all duration-300 hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[10px_10px_0px_3px_theme(colors.sunset-200)]">
          <div class="flex items-center gap-3 mb-6">
            <div class="inline-block w-3 h-3 bg-sunset-100 rounded-full" />
            <h3 class="text-xl font-bold text-sunset-gray">{{ categories[activeCategory].name }}</h3>
          </div>

          <!-- Skills grid with animated bars -->
          <div class="space-y-6">
            <div v-for="(skill, i) in categories[activeCategory].skills" :key="i" class="group">
              <div class="flex justify-between mb-2">
                <div class="flex items-center gap-2">
                  <img v-if="skill.icon" :src="skill.icon" :alt="skill.name" class="w-6 h-6 object-contain" />
                  <span class="font-medium text-sunset-gray">{{ skill.name }}</span>
                </div>
                <span class="text-sunset-gray/70">{{ skill.level }}%</span>
              </div>
              <div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                    class="h-full bg-gradient-to-r from-sunset-100 to-sunset-200 rounded-full transition-all duration-1000 transform origin-left"
                    :class="isVisible ? 'scale-x-100' : 'scale-x-0'"
                    :style="`width: ${skill.level}%`"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Decorative element -->
        <div class="absolute -bottom-4 -right-4 w-20 h-20 bg-sunset-100/10 rounded-lg -z-10"></div>
      </div>

      <!-- Side details and highlights -->
      <div data-aos="fade-left">
        <div class="bg-sunset-gray text-custom-white p-8 rounded-lg shadow-[5px_5px_0px_3px_theme(colors.sunset-200)] transition-all duration-300 hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[10px_10px_0px_3px_theme(colors.sunset-200)] h-full flex flex-col">
          <h3 class="text-xl font-bold mb-6 flex items-center gap-2">
            <span class="inline-block w-3 h-3 bg-sunset-100 rounded-full"></span>
            Highlights
          </h3>

          <div class="flex-grow">
            <!-- Experience years indicator -->
            <div class="mb-8">
              <div class="flex justify-between text-sm mb-2">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
              <div class="h-2 w-full bg-gray-600 rounded-full mb-1 overflow-hidden">
                <div
                    class="h-full bg-sunset-100 rounded-full transition-all duration-1000"
                    :class="isVisible ? 'w-4/5' : 'w-0'"
                ></div>
              </div>
              <div class="text-right text-sm text-custom-white/70">{{ categories[activeCategory].yearsExperience }} Jahre Erfahrung</div>
            </div>

            <!-- Key strengths -->
            <h4 class="font-medium mb-3 text-lg">Wichtigste Fähigkeiten:</h4>
            <ul class="space-y-3 mb-8">
              <li v-for="(strength, i) in categories[activeCategory].strengths" :key="i" class="flex items-start gap-2">
                <span class="inline-block mt-1 w-2 h-2 bg-sunset-100 rounded-full flex-shrink-0"></span>
                <span>{{ strength }}</span>
              </li>
            </ul>

            <!-- Related projects -->
            <div v-if="categories[activeCategory].projects.length > 0">
              <h4 class="font-medium mb-3 text-lg">Projekte:</h4>
              <div class="flex flex-wrap gap-2">
                <span
                    v-for="(project, i) in categories[activeCategory].projects"
                    :key="i"
                    class="px-3 py-1 bg-sunset-100/20 text-sunset-100 rounded-full text-sm"
                >
                  {{ project }}
                </span>
              </div>
            </div>
          </div>

          <!-- Skills count summary -->
          <div class="mt-6 pt-6 border-t border-sunset-100/20">
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold">{{ categories[activeCategory].skills.length }}</div>
                <div class="text-sm text-custom-white/70">Skills</div>
              </div>
              <div>
                <div class="text-2xl font-bold">{{ categories[activeCategory].projectsCount }}</div>
                <div class="text-sm text-custom-white/70">Projects</div>
              </div>
              <div>
                <div class="text-2xl font-bold">{{ categories[activeCategory].rating }}/5</div>
                <div class="text-sm text-custom-white/70">Self-rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills bubbles visual -->
    <div class="mt-16 hidden md:block">
      <div class="relative h-32 overflow-hidden" data-aos="fade-up">
        <div class="absolute inset-0 flex flex-wrap justify-center items-center gap-3">
          <div
              v-for="(skill, index) in allSkills"
              :key="index"
              class="px-4 py-2 rounded-full bg-white text-sunset-gray border border-sunset-200 transition-all duration-300 hover:bg-sunset-100 hover:text-custom-white hover:border-transparent"
              :class="categories[activeCategory].skills.some(s => s.name === skill) ? 'animate-pulse' : ''"
          >
            {{ skill }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const activeCategory = ref(0);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 500);
});

// Categories and skills data
const categories = ref([
  {
    name: 'Programming Languages',
    yearsExperience: 5,
    rating: 4,
    projectsCount: 27,
    strengths: [
      'Object-oriented programming',
      'Algorithm optimization',
      'Problem solving'
    ],
    projects: ['Guess-It', 'Planning Poker', 'MatterJS'],
    skills: [
      { name: 'JavaScript', level: 95, icon: '/icons/javascript.svg' },
      { name: 'Java', level: 75, icon: '/icons/java.svg' },
      { name: 'PHP', level: 90, icon: '/icons/php.svg' },
      { name: 'TypeScript', level: 70, icon: '/icons/typescript.svg' }
    ]
  },
  {
    name: 'Web Technologies',
    yearsExperience: 5,
    rating: 5,
    projectsCount: 21,
    strengths: [
      'Responsive design',
      'Modern frameworks',
      'Performance optimization'
    ],
    projects: ['Guess-It', 'KLUGes Management', 'Planning Poker', 'Portfolio Website'],
    skills: [
      { name: 'Vue.js', level: 95, icon: '/icons/vue.svg' },
      { name: 'Symfony', level: 85, icon: '/icons/symfony.svg' },
      { name: 'React', level: 65, icon: '/icons/react.svg' },
      { name: 'Tailwind CSS', level: 100, icon: '/icons/tailwind.svg' },
      { name: 'Spring Boot', level: 65, icon: '/icons/spring.svg' }
    ]
  },
  {
    name: 'Design & Tools',
    yearsExperience: 4,
    rating: 4,
    projectsCount: 13,
    strengths: [
      'UI/UX design principles',
      'Creative direction',
      'Design systems',
      'Adobe Products'
    ],
    projects: ['KLUGes Management', 'Portfolio Website'],
    skills: [
      { name: 'Adobe (Photoshop, Lightroom, Premiere, Illustrator)', level: 80, icon: '/icons/adobe.svg' },
      { name: 'Figma', level: 85, icon: '/icons/figma.svg' },
    ]
  },
  {
    name: 'Databases & Backend',
    yearsExperience: 4,
    rating: 3,
    projectsCount: 8,
    strengths: [
      'Database design',
      'API development',
      'Server configuration'
    ],
    projects: ['KLUGes Management', 'Planning Poker', 'Unlock the Enigma'],
    skills: [
      { name: 'MySQL', level: 80, icon: '/icons/mysql.svg' },
      { name: 'SQLite', level: 90, icon: '/icons/sqlite.svg' },
      { name: 'MongoDB', level: 75, icon: '/icons/mongodb.svg' },
      { name: 'RESTful APIs', level: 80, icon: '/icons/rest.svg' },
      { name: 'Docker', level: 80, icon: '/icons/docker.svg' },
      { name: 'Git', level: 90, icon: '/icons/git.svg' }
    ]
  }
]);

// Combined list of all skills for the bubbles display
const allSkills = ref([
  'Vue.js', 'PHP', 'JavaScript', 'Tailwind', 'MySQL', 'Java',
  'TypeScript', 'React', 'Figma', 'Git', 'REST API', 'Docker',
  'MongoDB', 'Symfony', 'Spring Boot', 'Adobe'
]);
</script>