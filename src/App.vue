<template>
  <y
    class="font-default antialiased"
    id="app"
  >
      <router-view />
  </y>
</template>


<script>
  /*
  * Base Templates
  */
  let html = '<!-- \n\
  Welcome to Yogurt Playground!\n\n\
  A developer tool for you to testing or prototyping design.\n\n\
  The tool is also available for SnapCraft and AppImage (Linux/Win/Mac),\n\
  desktop apps, you can find the information on the Github repository page.\n\n\
  (!) In the example below, the ".." is to separate in between different\n\
  utilities for easy to read for a beginner. You don\'t need ".." in writing\n\
  Yogurt CSS.\n\n\
  (?) F1 for Command Palette\n\
  (?) Right-Click for more options\n\
  (?) Ctrl+Alt+M to switch windows\n\
  (?) Ctrl+Alt+/ to run code\n\
  (?) Ctrl+Alt+D to reset auto-saved data\n\
--> \n\n\
<body class="h-screen .. font-default .. flex justify-center items-center">\n\
  <y class="z-10 .. absolute top-0 left-0 .. w-full">\n\
    <y class="h-screen .. pattern ripple-lg text-white (dark)text-charcoal-100 bg-gray-300 (dark)bg-black-800"></y>\n\
  </y>\n\
  <y class="(xs)p-0 (sm)p-10 .. flex flex-col justify-center items-center">\n\
    <y class="z-50 .. animation fade-in-up duration-800 delay-2">\n\
      <y class="pb-6 .. text-gray-700 (dark)text-gray-500 text-center .. fluid text-min-xl text-max-3xl .. highlight fore-gray-100 rear-teal-400">\n\
        Welcome to Yogurt Playground\n\
      </y>\n\
    </y>\n\
    <y class="z-50 .. relative .. (group) .. px-16 py-10 .. (xs)max-w-full .. flex justify-center items-center .. bg-transparent (dark)bg-gray-700 .. rounded-lg .. shadow-dreamy-md (hover)shadow-lg .. backdrop-filter blur-2 .. animation fade-in duration-4000 .. transform rotate-x-18 (hover)rotate-x-0 -rotate-y-18 (hover)rotate-y-0 rotate-z-9 (hover)rotate-z-0 .. transition duration-700 linear .. overflow-hidden .. cursor-pointer">\n\
      <y class="absolute -top-2 -left-2 .. overflow-hidden">\n\
        <y class="h-48 w-48 .. pattern diagonal-stripes-sm text-gray-200 .. rounded-full"></y>\n\
      </y>\n\
      <y class="flex (xs)flex-col (sm)flex-row justify-center items-center">\n\
        <y class="relative .. h-24 w-24 .. bg-gray-700 (group-hover)bg-transparent (dark)bg-orange-600 .. rounded-full .. shadow-dreamy-lg .. transition duration-500 linear">\n\
          <y class="absolute top-0 -left-4">\n\
            <img class="(group-hover)h-32 h-24 (group-hover)w-32 w-24 .. object-cover object-center .. bg-gray-300 .. rounded-full .. shadow-dreamy-sm .. filter saturate-4 contrast-4 brightness-4 .. animation fade-in-left duration-800 delay-2 .. select-none" src="https://picsum.photos/200?=1">\n\
          </y>\n\
          <y class="absolute top-0 right-5 .. h-6 w-6 .. bg-green-400 .. rounded-full .. filter saturate-5"></y>\n\
        </y>\n\
        <y class="z-10 .. (xs)pt-4 (sm)p-4 .. text-gray-600 (dark)text-gray-600 .. fluid text-min-3xl text-max-5xl text-center font-thin .. transform (group-hover)-translate-y-2 .. transition duration-500 linear .. highlight fore-gray-100 rear-amber-400">\n\
          Hello World!\n\
          <y class="text-gray-600 .. text-md .. text-optimize-precision .. uppercase">\n\
            <y class="(group-hover)hidden .. transition duration-500 ease-in-out">\n\
              Hover Me For Treasure\n\
            </y>\n\
            <y class="hidden (group-hover)block .. font-semibold .. transition duration-500 ease-in-out">\n\
              Secret Discovered!\n\
            </y>\n\
          </y>\n\
        </y>\n\
      </y>\n\
      <y class="absolute bottom-2 right-2">\n\
        <img class="h-5 w-5 opacity-25 (group-hover)opacity-75 .. select-none" src="assets/image/logo_small.svg">\n\
      </y>\n\
    </y>\n\
    <y class="z-50 .. (lg)max-w-xl .. animation fade-in-down duration-800 delay-2">\n\
      <y class="text-gray-700 (dark)text-gray-600 font-thin text-center .. fluid p-min-2 p-max-6 text-min-xl text-max-5xl .. depth-tight .. highlight fore-gray-100 rear-pink-400">\n\
        Start craft something beautiful\n\
        <span class="underline .. highlight fore-gray-800 rear-gray-400">\n\
          today!\n\
        </span>\n\
      </y>\n\
    </y>\n\
  </y>\n\
</body>';

  let css = "@import 'assets/css/yogurt-1.1.6_solidcore.min.css';[debug=screen]{font-size:13px;color:#000;background-color:#d3d3d3;opacity:.3;border-radius:3px;margin:4px;font-weight:700}@media(prefers-color-scheme:dark){[debug=screen]{color:#d3d3d3;background:#000;}}@media (min-width:320px){[debug=screen]::after{content:'(xs) 320px'}}@media (min-width:480px){[debug=screen]::after{content:'(sm) 480px'}}@media (min-width:640px){[debug=screen]::after{content:'(sm) 640px'}}@media (min-width:768px){[debug=screen]::after{content:'(md) 768px'}}@media (min-width:1024px){[debug=screen]::after{content:'(lg) 1024px'}}@media (min-width:1280px){[debug=screen]::after{content:'(xl) 1280px'}}@media (min-width:1920px){[debug=screen]::after{content:'(2xl) 1920px'}}@media (min-width:2560px){[debug=screen]::after{content:'(3k) 2560px'}}@media (min-width:3840px){[debug=screen]::after{content:'(4k) 3840px'}}@media (min-width:5120px){[debug=screen]::after{content:'(5k) 5120px'}}@media (min-width:5760px){[debug=screen]::after{content:'(6k) 5760px'}}@media (min-width:7000px){[debug=screen]::after{content:'(7k) 7000px'}}@media (min-width:7680px){[debug=screen]::after{content:'(8k) 7680px'}}";

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
    localStorage.dataBgTheme = "relative flex flex-row pattern ripple-lg text-white bg-gray-200";
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
    localStorage.dataMenuBarTheme = "p-1 absolute bottom-0 left-0 h-20 w-full bg-white";
  }

  if (localStorage.dataLogoThemeEnabled === "true") {
    // main logo theme is set
  } else {
    localStorage.dataLogoThemeEnabled = "true";
    localStorage.dataLogoTheme = "invert-0 opacity-75 h-8 w-auto fill-current text-gray-700 object-fit object-center overflow-hidden";
  }

  if (localStorage.dataBgLogoThemeEnabled === "true") {
    // bg logo theme is set
  } else {
    localStorage.dataBgLogoThemeEnabled = "true";
    localStorage.dataBgLogoTheme = "invert-0 h-auto w-32 object-cover object-center overflow-hidden opacity-75 select-none";
  }

  if (localStorage.dataMainButtonThemeEnabled === "true") {
    // main buttons is set
  } else {
    localStorage.dataMainButtonThemeEnabled = "true";
    localStorage.dataMainButtonTheme = "(group) flex justify-center items-center px-2 py-1 text-gray-700 (group-hover)text-gray-800 bg-transparent (active)bg-gray-300 filter saturate-4 rounded transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none";
  }

  if (localStorage.dataMainButtonIconThemeEnabled === "true") {
    // main button icon theme is set
  } else {
    localStorage.dataMainButtonIconThemeEnabled = "true";
    localStorage.dataMainButtonIconTheme = "invert-0 opacity-50 (group-hover)opacity-75 (group-hover)invert-0 w-6 h-6 border border-transparent object-fit object-center transition duration-300 ease-in-out transform (group-hover)scale-125";
  }

  if (localStorage.dataPreloaderThemeEnabled === "true") {
    // preloader theme is set
  } else {
    localStorage.dataPreloaderThemeEnabled = "true";
    localStorage.dataPreloaderTheme = "z-50 absolute top-16 right-6 w-5 h-5 preloader dark animation fade-in duration-300";
  }

  if (localStorage.dataDocButtonThemeEnabled === "true") {
    // doc button theme is set
  } else {
    localStorage.dataDocButtonThemeEnabled = "true";
    localStorage.dataDocButtonTheme = "flex justify-center items-center px-2 h-6 text-sm text-gray-600 (active)bg-gray-300 border border-gray-200 (hover)border-gray-500 (focus)border-gray-500 rounded";
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
