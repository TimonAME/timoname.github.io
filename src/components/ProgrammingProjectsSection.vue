<template>
  <section class="container mx-auto px-4 py-16">
    <h2 class="text-4xl md:text-6xl font-bold leading-tight text-sunset-gray mb-12 text-left cursor-default">Projects</h2>

    <div v-for="(project, index) in projects" :key="project.title" class="mb-12">
      <div class="flex justify-center">
        <div class="w-full" :data-aos="project.style === 'right' ? 'fade-right' : 'fade-left'">
          <div class="lg:h-96 h-auto rounded-lg flex flex-col md:flex-row bg-sunset-gray shadow-[5px_5px_0px_3px_theme(colors.sunset-200)] transition-all duration-300 hover:translate-x-[10px] hover:translate-y-[-10px] hover:shadow-[-5px_15px_0px_3px_theme(colors.sunset-200)]"
               :class="{ 'md:flex-row-reverse': project.style === 'right', '!hover:translate-x-[-10px] !hover:shadow-[15px_15px_0px_3px_theme(colors.sunset-200)]': project.style === 'right' }">

            <!-- Image Container -->
            <div class="relative overflow-hidden md:h-auto h-64 md:w-1/2 rounded-lg">
              <img :src="project.image" :alt="project.title" class="w-full h-full object-cover">
            </div>

            <!-- Content -->
            <div class="p-6 md:w-1/2 bg-sunset-gray text-custom-white flex flex-col justify-between rounded-lg">
              <div>
                <div class="mb-4">
                  <h3 class="text-2xl font-bold mb-2">{{ project.title }}</h3>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span v-for="tag in project.tags" :key="tag"
                          class="bg-sunset-100/20 text-sunset-100 text-sm py-1 px-3 rounded-full">
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <p class="mb-6">{{ project.description }}</p>
              </div>

              <div class="flex justify-between items-center mt-4">
                <span class="text-custom-white/80">{{ project.role }}</span>
                <div v-if="project.link" class="flex gap-2">
                  <a :href="project.link" target="_blank"
                     class="bg-transparent text-sunset-100 border border-sunset-100 py-2 px-4 rounded-lg hover:bg-sunset-100 hover:text-custom-white transition-colors duration-300">
                    Zur Seite
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const projects = ref([
  {
    style: 'right',
    title: 'FollowTheFLow',
    description: 'Follow The Flow ist ein Gedächtnis- und Reaktionsspiel, bei dem Spieler zunehmend längere Sequenzen von Richtungseingaben wiederholen müssen. Das Spiel ist in zuge des Austrian Skills Wettbewerb 2025 entstanden und wurde mit VueJS entwickelt. Es bietet eine einfache Benutzeroberfläche, akustische und visuelle Rückmeldungen sowie eine Highscore-Funktion, um den Wettbewerbsaspekt zu fördern.',
    tags: ['VueJS'],
    image: '/Images/FollowTheFLow.png',
    role: 'Development',
    link: 'https://timoname.github.io/FollowTheFlow'
  },
  {
    style: 'left',
    title: 'Guess-It',
    description: 'Guess-It ist ein interaktives Geografie-Quizspiel mit verschiedenen Spielmodi, das Wissen über Länder, Grenzen und Verbindungen auf spielerische Weise testet. Spieler können Länder anhand ihres Namens auf der Karte finden, umgekehrt Länder benennen oder Verbindungen zwischen Staaten durch die kürzeste Grenzroute herstellen. Eine navigierbare, intuitive Karte und ein klares UI-Design sorgen für eine ansprechende Nutzererfahrung.',
    tags: ['VueJS', 'Vue Leaflet', 'GeoJson', 'Tailwind'],
    image: '/Images/Guess-It_CoverImage.jpeg',
    role: 'Development',
    link: 'https://timoname.github.io/Guess-It/'
  },
  {
    style: 'right',
    title: 'KLUGes Management',
    description: 'KLUGes Management ist eine webbasierte Applikation zur Verwaltung von Mitarbeitern, Kunden und Terminen des Nachhilfeunternehmens Lernen ist KLUG. Die Diplomarbeit umfasst Tools wie Wochenpläne, Anwesenheitsverfolgung und einen Lehrmaterialordner, um eine effiziente Zusammenarbeit zu gewährleisten.',
    tags: ['Symfony', 'Doctrine', 'Twig', 'VueJS', 'Tailwind'],
    image: '/Images/KLUGes-Management_CoverImage.jpg',
    role: 'UI/UX, Frontend Development',
    link: 'https://timoname.github.io/KlugesManagement-Demo/'
  },/*
  {
    style: 'left',
    title: 'Unlock the Enigma',
    description: 'Unlock the Enigma ist eine kryptographische Schnitzeljagd an unserer Schule, bei der Teams mit Rätseln wie Verschlüsselungen, Steganografie und versteckten digitalen Hinweisen konfrontiert werden. Ziel ist es, kreatives Denken, Teamarbeit und technische Problemlösungsfähigkeiten zu fördern.',
    tags: ['Symfony', 'Twig', 'JavaScript', 'Tailwind'],
    image: '/Images/Unlock-The-Enigma_CoverImage.jpg',
    role: 'Frontend Development'
  },*/
  {
    style: 'left',
    title: 'MatterJS',
    description: 'Das MatterJS-Projekt demonstriert eine interaktive Physiksimulation, die ich als visuelles Highlight in den Header meiner Portfolio-Seite integriert habe. Mithilfe von MatterJS wird eine dynamische Umgebung erstellt, in der Objekte physikalisch korrekt interagieren. Auf meiner Seite wird der Text "Timon Amesmann" in der Simulation eingebunden, sodass dieser als Teil des interaktiven Physikmodells agiert.',
    tags: ['JavaScript', 'MatterJS'],
    image: '/Images/MatterJS_CoverImage.jpg',
    role: 'Development'
  },
  {
    style: 'right',
    title: 'Planning Poker',
    description: 'Das Projekt Planning Poker ist eine digitale Lösung zur agilen Aufwandsschätzung, die im Rahmen eines Schulprojekts an der HTL Rennweg entwickelt wurde, mit Fokus auf Benutzerfreundlichkeit und Scrum-Prinzipien.',
    tags: ['NuxtJS', 'Spring-Boot', 'Tailwind', 'Rest-API', 'SQLite'],
    image: '/Images/Planning-Poker_CoverImage.jpeg',
    role: 'Frontend Development',
    link: '/Planning-Poker'
  }
]);
</script>