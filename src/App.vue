<template>
  <div class="bg-custom-white overflow-x-hidden bg-[linear-gradient(to_right,rgba(184,184,184,0.1)1px,transparent_1px),linear-gradient(to_bottom,rgba(184,184,184,0.1)1px,transparent_1px)] bg-[size:40px_40px]">
    <!-- Hero Section with Physics Simulation -->
    <PhysicsHero />

    <!-- Compact Horizontal Navigation -->
    <Navigation />

    <!-- Fixed Social Links -->
    <SocialLinks />

    <!-- Content Sections -->
    <div class="container mx-auto">
      <!-- About Me Section -->
      <AboutSection />

      <!-- Programming Section -->
      <ProgrammingIntroduction />
      <ProgrammingSkillsSection />
      <ProgrammingAchievementsSection />
      <ProgrammingProjectsSection />


      <!-- Creative Section -->
      <PhotoIntroduction />
      <PhotoExperienceSection />
      <PhotoGallerySection />


      <!-- Footer -->
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import PhysicsHero from './components/PhysicsHero.vue';
import Navigation from './components/Navigation.vue';
import SocialLinks from './components/SocialLinks.vue';
import AboutSection from './components/AboutSection.vue';
import PhotoGallerySection from './components/PhotoGallerySection.vue';
import FooterSection from './components/FooterSection.vue';
import ProgrammingSkillsSection from "@/components/ProgrammingSkillsSection.vue";
import ProgrammingAchievementsSection from "@/components/ProgrammingAchievementsSection.vue";
import PhotoExperienceSection from "@/components/PhotoExperienceSection.vue";
import PhotoIntroduction from "@/components/PhotoIntroduction.vue";
import ProgrammingIntroduction from "@/components/ProgrammingIntroduction.vue";
import ProgrammingProjectsSection from "@/components/ProgrammingProjectsSection.vue";
</script>

<style>
html {
  scroll-behavior: smooth;
}

/* Text Selection Styling */
::selection {
  background-color: #F2921D;
  color: white;
}

/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background-color: #f4f4f4;
}

::-webkit-scrollbar-thumb {
  background-color: #2E3440;
  border-radius: 8px;
  border: 3px solid #f4f4f4;
}

* {
  scrollbar-width: thin;
  scrollbar-color: #2E3440 #f4f4f4;
}
</style>