<template>
  <section id="about" class="container py-5" data-aos="fade-up">
    <div class="flex flex-col md:flex-row gap-8 justify-center md:justify-end text-center md:text-right">
      <div class="">
        <p class="text-4xl md:text-6xl font-black leading-tight text-[#2E3440] mb-6 cursor-default">
          HTL-Rennweg Absolvent.<br> Leidenschaftlicher
          <a href="#programming" class="text-[#F2921D] font-black underline transition-all duration-300 hover:text-[#F27127]">Programmierer</a>
          und
          <a href="#photography" class="text-[#F2921D] font-black underline transition-all duration-300 hover:text-[#F27127]">Fotograf</a>.
        </p>
        <p class="text-xl tracking-wide text-[#6B7280] mt-2">
          Bronze-Gewinner bei den Austrian Skills Webdevelopment 2025 –
          <a href="#achievement-austrian-skills" class="underline text-[#F2921D] hover:text-[#F27127] transition-all">mehr erfahren</a>
        </p>

        <!-- NEU: Section-Navigation -->
        <div class="mt-8 pt-5 border-t border-gray-200 flex flex-wrap gap-3 justify-center md:justify-end">
          <a
              href="#programming"
              class="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-sunset-gray text-sunset-gray rounded-lg transition-all duration-300 hover:bg-sunset-100/10 select-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            Programming
          </a>
          
          <a
              href="#photography"
              class="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-sunset-gray text-sunset-gray rounded-lg transition-all duration-300 hover:bg-sunset-100/10 select-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
            Photography
          </a>
        </div>
      </div>

      <div class="">
        <img src="/Images/Timon_Amesmann_Image.jpg" alt="Timon Amesmann"
             class="mx-auto md:mx-0 h-auto max-w-[80%] md:max-w-[300px] shadow-[5px_5px_0px_3px_rgba(242,113,39,1)] transition-all duration-300 hover:shadow-[15px_15px_0px_3px_rgba(242,113,39,1)] hover:rotate-1 rounded">
      </div>
    </div>
  </section>
</template>