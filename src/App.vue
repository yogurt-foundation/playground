<template>
  <y
    class="font-default antialiased"
    id="app">
      <router-view />
  </y>
</template>


<script>
  /*
   * Base Templates
   */
  let html = '<!-- \n\
  Welcome to Yogurt Playground!\n\n\
  Here you can testing or prototyping complex or simple UI online.\n\n\
  Core Framework: v1.1.6\n\
  Playground: v0.1.4-beta\n\n\
  (?) F1 for Command Palette\n\
  (?) Right-Click for more options\n\
  (?) Ctrl+Alt+M to switch windows\n\
  (?) Ctrl+Alt+/ to run code\n\
  (?) Ctrl+Alt+D to reset auto-saved data\n\
--> \n\n\
<body class="font-default antialiased text-gray-600 (dark)text-gray-300 bg-gray-100 (dark)bg-gray-800">\n\n\
  <y class="h-screen (xs)px-4 flex flex-col justify-center items-center">\n\
    <y class="pb-10 text-2xl animation fade-in-up delay-2">\n\
      Welcome to\n\
      <span class="inline-block font-semibold underline">\n\
        Yogurt CSS\n\
      </span>\n\
      playground\n\
    </y>\n\
    <y class="(xs)max-w-full (sm)max-w-xs p-10 flex (xs)flex-col (sm)flex-row justify-around items-center bg-white (dark)bg-charcoal-900 rounded-lg shadow-dreamy w-full animation fade-in-up overflow-hidden">\n\
      <y class="h-20 w-20 bg-gray-600 rounded-full"></y>\n\
      <y class="(xs)pt-4 (sm)pt-0 (xs)text-2xl (sm)text-xl text-gray-600">\n\
        Hello World!\n\
      </y>\n\
    </y>\n\
    <y class="py-10 text-lg animation fade-in-down delay-2">\n\
      Start craft something new\n\
      <span class="inline-block underline">\n\
        today!\n\
      </span>\n\
    </y>\n\
  </y>\n\n\
</body>';

  let css = "@import 'assets/css/yogurt-1.1.6_solidcore.min.css';[debug=screen]{font-size:13px;color:#000;background-color:#d3d3d3;opacity:.3;border-radius:3px;margin:4px;font-weight:700}@media (min-width:320px){[debug=screen]::after{content:'(xs) 320px'}}@media (min-width:480px){[debug=screen]::after{content:'(sm) 480px'}}@media (min-width:640px){[debug=screen]::after{content:'(sm) 640px'}}@media (min-width:768px){[debug=screen]::after{content:'(md) 768px'}}@media (min-width:1024px){[debug=screen]::after{content:'(lg) 1024px'}}@media (min-width:1280px){[debug=screen]::after{content:'(xl) 1280px'}}@media (min-width:1920px){[debug=screen]::after{content:'(2xl) 1920px'}}@media (min-width:2560px){[debug=screen]::after{content:'(3k) 2560px'}}@media (min-width:3840px){[debug=screen]::after{content:'(4k) 3840px'}}@media (min-width:5120px){[debug=screen]::after{content:'(5k) 5120px'}}@media (min-width:5760px){[debug=screen]::after{content:'(6k) 5760px'}}@media (min-width:7000px){[debug=screen]::after{content:'(7k) 7000px'}}@media (min-width:7680px){[debug=screen]::after{content:'(8k) 7680px'}}";

  let js = "";

  /*
   * Create Base Templates
   */
  if(localStorage.dataSaveEnabled === "true") {
    // saved data exists, use existing one
  } else {
    localStorage.dataSaveEnabled = "true";
    localStorage.dataHTML = html;
    localStorage.dataCSS = css;
    localStorage.dataJS = js;
  }

  if (localStorage.dataThemeEnabled === "true") {
    // editor theme is set
  } else {
    localStorage.dataThemeEnabled = "true";
    localStorage.dataTheme = "vs";
  }

  if (localStorage.dataBgThemeEnabled === "true") {
    // previewer theme is set
  } else {
    localStorage.dataBgThemeEnabled = "true";
    localStorage.dataBgTheme = "relative flex flex-row pattern ripple-lg text-gray-100 bg-gray-300";
  }

  if (localStorage.dataButtonThemeEnabled === "true") {
    // buttons theme is set
  } else {
    localStorage.dataButtonThemeEnabled = "true";
    localStorage.dataButtonTheme = "opacity-50 transform (hover)scale-125 w-5 h-5 transition duration-300 ease-in-out transform (group-hover)scale-125";
  }

  if (localStorage.dataMenuBarThemeEnabled === "true") {
    // main menu bar theme is set
  } else {
    localStorage.dataMenuBarThemeEnabled = "true";
    localStorage.dataMenuBarTheme = "p-1 absolute bottom-0 left-0 h-20 w-full";
  }

  if (localStorage.dataLogoThemeEnabled === "true") {
    // main logo theme is set
  } else {
    localStorage.dataLogoThemeEnabled = "true";
    localStorage.dataLogoTheme = "invert-0 opacity-75 h-8 w-auto object-fit object-center overflow-hidden";
  }

  if (localStorage.dataBgLogoThemeEnabled === "true") {
    // bg logo theme is set
  } else {
    localStorage.dataBgLogoThemeEnabled = "true";
    localStorage.dataBgLogoTheme = "invert-0 h-auto w-64 object-cover object-center overflow-hidden opacity-75 select-none";
  }

  if (localStorage.dataMainButtonThemeEnabled === "true") {
    // main buttons is set
  } else {
    localStorage.dataMainButtonThemeEnabled = "true";
    localStorage.dataMainButtonTheme = "(group) flex justify-center items-center px-2 py-1 text-black-900 (group-hover)text-black-900 bg-gray-100 (active)bg-gray-300 border border-gray-300 (hover)border-gray-500 (focus)border-gray-500 filter saturate-4 rounded transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none";
  }

  if (localStorage.dataMainButtonIconThemeEnabled === "true") {
    // main button icon theme is set
  } else {
    localStorage.dataMainButtonIconThemeEnabled = "true";
    localStorage.dataMainButtonIconTheme = "invert-0 opacity-50 (group-hover)opacity-75 (group-hover)invert-0 w-5 h-5 object-fit object-center transition duration-300 ease-in-out transform (group-hover)scale-110";
  }

  if (localStorage.dataPreloaderThemeEnabled === "true") {
    // preloader theme is set
  } else {
    localStorage.dataPreloaderThemeEnabled = "true";
    localStorage.dataPreloaderTheme = "z-50 absolute top-16 right-6 w-5 h-5 preloader light animation fade-in duration-300";
  }

  if (localStorage.dataDocButtonThemeEnabled === "true") {
    // doc button theme is set
  } else {
    localStorage.dataDocButtonThemeEnabled = "true";
    localStorage.dataDocButtonTheme = "flex justify-center items-center px-2 h-6 text-sm text-gray-600 (active)bg-gray-300 border border-gray-300 (hover)border-gray-500 rounded";
  }
</script>


<style>
  html {
    height: 100vh;
    overflow: hidden;
  }
  body {
    margin: 0;
    height: 100vh;
    overflow: hidden;
  }
</style>
