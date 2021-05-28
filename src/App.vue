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

  if(localStorage.dataSaveEnabled === "yes") {
    console.log("(yogurt) has saved data, use existing one.");
  } else {
    console.log("(yogurt) no saved data, create new template.");
    localStorage.dataSaveEnabled = "yes";
    localStorage.dataHTML = html;
    localStorage.dataCSS =  css;
    localStorage.dataJS =  js;
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
