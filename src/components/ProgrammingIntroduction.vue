<template>
  <section id="programming" class="container mx-auto px-4 py-16">
    <div class="flex flex-col md:flex-row gap-12 items-center" data-aos="fade-up">
      <!-- Linke Seite -->
      <div class="md:w-2/3">
        <h2 class="text-4xl md:text-7xl font-bold leading-tight text-sunset-200 mb-8">
          <span class="inline-block relative">
            Programming
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-sunset-200"></span>
          </span>
        </h2>

        <p class="text-lg mb-6 text-sunset-gray">
          Meine Reise in die Programmierung begann mit Neugier und entwickelte sich zu einer Leidenschaft für das Erschaffen intuitiver, effizienter digitaler Erlebnisse. Mit Spezialisierung auf Webentwicklung kombiniere ich technisches Know-how mit einem geschulten Blick für Design, um Lösungen zu bauen, die nicht nur fehlerfrei funktionieren, sondern auch Nutzer:innen begeistern.
        </p>

        <p class="text-lg mb-8 text-sunset-gray">
          Von interaktiven Webanwendungen bis hin zu Backend-Systemen liebe ich es, Herausforderungen anzunehmen, die meine Fähigkeiten weiterentwickeln. Mein Ansatz vereint moderne Frameworks mit sauberem Code – immer mit Fokus auf Skalierbarkeit und Performance.
        </p>

        <div class="flex flex-wrap gap-4">
          <a
              href="https://github.com/TimonAME"
              target="_blank"
              class="inline-flex items-center gap-2 px-6 py-3 bg-sunset-gray text-custom-white rounded-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub Projekte
          </a>
          <a
              href="#skills"
              class="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-sunset-gray text-sunset-gray rounded-lg transition-all duration-300 hover:bg-sunset-100/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            Skills entdecken
          </a>
        </div>
      </div>

      <!-- Rechte Seite: Code-Snippet -->
      <div class="md:w-1/3 mt-8 md:mt-0">
        <div class="bg-sunset-gray text-custom-white p-4 rounded-lg shadow-[5px_5px_0px_3px_theme(colors.sunset-200)] transition-all duration-300 hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[10px_10px_0px_3px_theme(colors.sunset-200)] h-full flex flex-col">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span class="text-sm ml-2 opacity-70">function.js</span>
          </div>
          <pre class="text-sm"><code>// My approach to problem solving
function createSolution(problem) {
  const plan = analyzeRequirements(problem);

  while (!isComplete(plan)) {
    const nextStep = plan.getNextTask();
    const solution = implement(nextStep);

    if (test(solution)) {
      plan.markComplete(nextStep);
    } else {
      refactor(solution);
    }
  }

  return deployAndMonitor(plan.solution);
}</code></pre>
        </div>
      </div>
    </div>
  </section>
</template>