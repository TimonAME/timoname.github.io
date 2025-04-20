<template>
  <section id="photography" class="container mx-auto px-4 py-16">
    <div class="flex flex-col md:flex-row gap-12 items-center" data-aos="fade-up">
      <!-- Left side content -->
      <div class="md:w-2/3">
        <h2 class="text-4xl md:text-7xl font-bold leading-tight text-sunset-200 mb-8">
          <span class="inline-block relative">
            Photography
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-sunset-200"></span>
          </span>
        </h2>

        <p class="text-lg mb-6 text-sunset-gray">
          Neben dem Coden schlägt mein Herz für die Fotografie – sie ist meine kreative Spielwiese, auf der ich Emotionen, Lichtstimmungen und Geschichten in Bildern einfange. Die Kamera ist dabei mein zweites Auge – eines, das nicht nur sieht, sondern fühlt.
        </p>

        <p class="text-lg mb-8 text-sunset-gray">
          Ob ausdrucksstarke Porträts oder majestätische Landschaften – jedes Bild entsteht mit dem gleichen Gespür für Komposition, das auch mein Design- und Entwicklerherz antreibt. Diese visuelle Leidenschaft verleiht meinen Projekten einen unverwechselbaren Stil, der Technik und Ästhetik miteinander verschmelzen lässt.
        </p>


        <div class="flex flex-wrap gap-4">
          <a
              href="https://www.instagram.com/amesmann_t/"
              target="_blank"
              class="inline-flex items-center gap-2 px-6 py-3 bg-sunset-gray text-custom-white rounded-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg select-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Auf Instagram Folgen
          </a>
          <a
              href="#photography"
              class="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-sunset-gray text-sunset-gray rounded-lg transition-all duration-300 hover:bg-sunset-100/10 select-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
            Gallerie ansehen
          </a>
        </div>
      </div>

      <!-- Right side camera viewfinder -->
      <div class="md:w-1/3 w-full mt-8 md:mt-0">
        <div class="relative bg-sunset-gray rounded-lg p-6 shadow-[5px_5px_0px_3px_theme(colors.sunset-200)] aspect-square flex items-center justify-center">
          <!-- Camera viewfinder design -->
          <div class="w-full h-full border-4 border-custom-white/30 rounded-full flex items-center justify-center">
            <div class="w-3/4 h-3/4 border-2 border-custom-white/30 rounded-full flex items-center justify-center">
              <div class="w-1/2 h-1/2 border border-custom-white/30 rounded-full flex items-center justify-center">
                <div class="w-1/3 h-1/3 bg-sunset-100 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <!-- Corner markers -->
          <div class="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-custom-white/70"></div>
          <div class="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-custom-white/70"></div>
          <div class="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-custom-white/70"></div>
          <div class="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-custom-white/70"></div>

          <!-- Exposure indicators -->
          <div class="absolute bottom-8 right-12 text-xs text-custom-white/70 flex flex-col items-end">
            <span>f/2.8</span>
            <span>1/125</span>
            <span>ISO 100</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Photography styles/interests -->
    <div class="mt-16" data-aos="fade-up" data-aos-delay="200">
      <div class="flex flex-wrap justify-center gap-4 select-none">
        <span class="px-4 py-2 bg-sunset-100/20 text-sunset-100 rounded-full text-sm">Landscape</span>
        <span class="px-4 py-2 bg-sunset-100/20 text-sunset-100 rounded-full text-sm">Portrait</span>
        <span class="px-4 py-2 bg-sunset-100/20 text-sunset-100 rounded-full text-sm">Events</span>
        <span class="px-4 py-2 bg-sunset-100/20 text-sunset-100 rounded-full text-sm">Wildlife</span>
        <span class="px-4 py-2 bg-sunset-100/20 text-sunset-100 rounded-full text-sm">Composition</span>
        <span class="px-4 py-2 bg-sunset-100/20 text-sunset-100 rounded-full text-sm">Architecture</span>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>