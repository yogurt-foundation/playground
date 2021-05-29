<template>
  <y id="app">
    <router-view />
  </y>
</template>


<script>
  let html = '<!-- \n\
  Welcome to Yogurt Playground!\n\n\
  Here you can testing or prototyping complex or simple UI online.\n\n\
  Core Framework: v1.1.6-beta\n\
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

  let css = "@import 'assets/css/yogurt-1.1.6_solidcore.min.css';[debug=screen]{font-size:13px;color:#000;background-color:#d3d3d3;opacity:.3;border-radius:3px;margin:4px;font-weight:700}@media (min-width:320px){[debug=screen]::after{content:'(xs) 320px'}}@media (min-width:480px){[debug=screen]::after{content:'(sm) 480px'}}@media (min-width:640px){[debug=screen]::after{content:'(sm) 640px'}}@media (min-width:768px){[debug=screen]::after{content:'(md) 768px'}}@media (min-width:1024px){[debug=screen]::after{content:'(lg) 1024px'}}@media (min-width:1280px){[debug=screen]::after{content:'(xl) 1280px'}}@media (min-width:1920px){[debug=screen]::after{content:'(2xl) 1920px'}}@media (min-width:2560px){[debug=screen]::after{content:'(3k) 2560px'}}@media (min-width:3840px){[debug=screen]::after{content:'(4k) 3840px'}}@media (min-width:5120px){[debug=screen]::after{content:'(5k) 5120px'}}@media (min-width:5760px){[debug=screen]::after{content:'(6k) 5760px'}}@media (min-width:7000px){[debug=screen]::after{content:'(7k) 7000px'}}@media (min-width:7680px){[debug=screen]::after{content:'(8k) 7680px'}}::-webkit-scrollbar{width:4px;height:4px}::-webkit-scrollbar-track{background-color:transparent}::-webkit-scrollbar-thumb{background-color:#d6dee1;border-radius:20px;border:0px solid transparent;background-clip:content-box}::-webkit-scrollbar-thumb:hover{background-color:#a8bbbf}";

  let js = "";

  // TODO: clean up these mess!
  if(localStorage.dataSaveEnabled === "yes") {
    console.log("(yogurt) has saved data, use existing one.");
  } else {
    localStorage.dataSaveEnabled = "yes";
    localStorage.dataHTML = html;
    localStorage.dataCSS = css;
    localStorage.dataJS = js;
  }

  if (localStorage.dataThemeEnabled === "yes") {
    console.log("(yogurt) editor theme is set!");
  } else {
    localStorage.dataThemeEnabled = "yes";
    localStorage.dataTheme = "vs";
  }

  if (localStorage.dataBgThemeEnabled === "yes") {
    console.log("(yogurt) previewer theme is set!");
  } else {
    localStorage.dataBgThemeEnabled = "yes";
    localStorage.dataBgTheme = "relative flex flex-row pattern ripple-lg text-gray-100 bg-gray-300";
  }

  if (localStorage.dataButtonThemeEnabled === "yes") {
    console.log("(yogurt) button theme is set!");
  } else {
    localStorage.dataButtonThemeEnabled = "yes";
    localStorage.dataButtonTheme = "bg-gray-800 transform (hover)scale-125 w-5 h-5 transition duration-300 ease-in-out transform (group-hover)scale-125 rounded-full";
  }

  if (localStorage.dataMenuBarThemeEnabled === "yes") {
    console.log("(yogurt) menu bar theme is set!");
  } else {
    localStorage.dataMenuBarThemeEnabled = "yes";
    localStorage.dataMenuBarTheme = "p-1 absolute bottom-0 left-0 h-20 w-full";
  }

  if (localStorage.dataLogoThemeEnabled === "yes") {
    console.log("(yogurt) logo theme is set!");
  } else {
    localStorage.dataLogoThemeEnabled = "yes";
    localStorage.dataLogoTheme = "invert-0 opacity-75 h-8 w-auto object-fit object-center overflow-hidden";
  }

  if (localStorage.dataBgLogoThemeEnabled === "yes") {
    console.log("(yogurt) logo theme is set!");
  } else {
    localStorage.dataBgLogoThemeEnabled = "yes";
    localStorage.dataBgLogoTheme = "invert-0 h-auto w-64 object-cover object-center overflow-hidden opacity-75 select-none";
  }

  if (localStorage.dataMainButtonThemeEnabled === "yes") {
    console.log("(yogurt) main button theme is set!");
  } else {
    localStorage.dataMainButtonThemeEnabled = "yes";
    localStorage.dataMainButtonTheme = "(group) flex justify-center items-center px-2 py-2 text-black-900 (group-hover)text-black-900 bg-gray-100 (active)bg-gray-300 border border-gray-400 (hover)border-gray-700 (focus)border-gray-700 filter saturate-4 rounded transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none";
  }

  if (localStorage.dataMainButtonIconThemeEnabled === "yes") {
    console.log("(yogurt) main button icon theme is set!");
  } else {
    localStorage.dataMainButtonIconThemeEnabled = "yes";
    localStorage.dataMainButtonIconTheme = "invert-0 opacity-50 (group-hover)opacity-75 (group-hover)invert-0 w-5 h-5 object-fit object-center transition duration-300 ease-in-out transform (group-hover)scale-110";
  }

  if (localStorage.dataPreloaderThemeEnabled === "yes") {
    console.log("(yogurt) preloader theme is set!");
  } else {
    localStorage.dataPreloaderThemeEnabled = "yes";
    localStorage.dataPreloaderTheme = "z-50 absolute top-16 right-6 w-5 h-5 preloader light animation fade-in duration-300";
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
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
