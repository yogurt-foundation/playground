<template>
  <y v-bind:class="bgCoverTheme">

    <!-- Logo -->
    <y class="z-10 absolute top-12 left-12 flex justify-start items-start h-screen w-full"
    >
      <img
        v-bind:class="bgLogoTheme"
        src="assets/image/logo_full.svg"
        alt="Yogurt"
      >
    </y>

    <!-- back to Editor from Previewer -->
    <y
      v-bind:class="[
        isActive
          ? 'hidden'
          : 'z-50 absolute bottom-5 left-6 (group) flex justify-center items-center px-3 py-2 bg-charcoal-800 (hover)bg-orange-700 (active)bg-orange-800 border-4 border-transparent (hover)border-orange-600 shadow-dreamy-lg filter saturate-4 rounded-lg transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none'
      ]"
      @click="toggleModes"
      title="Editor (Ctrl+Alt+M)"
    >
      <img
        class="invert-1 opacity-50 (group-hover)opacity-75 (group-hover)invert-0 w-6 h-6 object-fit object-center transition duration-300 ease-in-out transform (group-hover)scale-110"
        src="assets/image/editor.svg"
      >
      <y
        class="ml-2 text-sm font-semibold text-gray-100 (group-hover)text-black-900 opacity-50 (group-hover)opacity-100"
      >
        Editor
      </y>
    </y>

    <!-- Editor -->
    <y
      v-model="activeName"
      v-bind:class="[
        isActive
          ? 'z-20 relative h-screen w-full animation fade-in duration-300'
          : 'flex-initial invisible animation fade-out duration-300'
      ]"
    >

      <!-- menu -->
      <y
        v-bind:class="[
          isActive
            ? 'breakpoint-480 menuBarTheme'
            : 'hidden'
        ]"
      >
        <y class="p-2 flex justify-between items-center">

          <y class="flex justify-center items-center select-none">

            <!-- logo -->
            <y class="px-2 animation roll-in-left duration-800">
              <svg
                v-bind:class="logoTheme"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 146.8 46.8"
              >
                <path d="M8.8 38.6c-.1-.1-.2-.2-.2-.3-2.3-4.2-4.6-8.4-6.9-12.5-.9-1.6-.9-3.2 0-4.8 3.2-5.7 6.4-11.4 9.6-17 1-1.8 2.7-2.5 4.7-2.5h1.9c1.7 0 2.6.9 2.6 2.6v11c0 3.5.1 2.5-1.4 5.2-3.3 5.9-6.6 11.9-9.9 17.8-.2.2-.3.3-.4.5zm32.2 0c-1-1.7-1.9-3.4-2.8-5.1-2.8-4.9-5.5-9.9-8.3-14.8-.3-.5-.4-1.1-.4-1.6V3.8c0-1.3 1-2.3 2.3-2.3 1 0 2.1 0 3.1.1 1.6.2 2.9 1.1 3.7 2.5C41.9 9.8 45 15.4 48.2 21c.8 1.5.9 3.1.1 4.6-2.3 4.3-4.7 8.6-7.1 12.8 0 .1-.1.1-.2.2zm-16.1 6.5h-9.8c-1.9 0-3.4-1-4.3-2.7-.7-1.4-.7-3 .1-4.4 1.4-2.6 3-5.1 4.5-7.7.1-.1.4-.2.6-.2h17.9c.3 0 .5.1.6.3l4.2 7.2c1.4 2.3.9 5.1-1 6.5-.9.7-1.9 1-3 1h-9.8zM67.6 31.3L65.7 37c-.1.3-.4.5-.9.6-.5.1-1.2.2-2.1.2-.5 0-.9 0-1.1-.1-.3 0-.5-.1-.6-.2-.1-.1-.2-.2-.2-.4 0-.1 0-.3.1-.5l2.1-5.4c-.2-.1-.3-.2-.4-.3-.1-.1-.2-.3-.3-.5l-5.5-14.7c-.2-.4-.2-.7-.2-1 0-.2.1-.4.2-.5.1-.1.4-.2.7-.3.3 0 .8-.1 1.4-.1h1.2c.3 0 .5.1.7.1.2.1.3.2.4.3.1.1.2.4.3.6l3.8 10.7h.1l3.4-10.9c.1-.3.2-.5.3-.6.1-.1.3-.2.6-.2s.7-.1 1.4-.1c.5 0 .9 0 1.3.1.3 0 .6.1.8.3s.2.3.2.5 0 .5-.1.8l-5.7 15.9zm22-8.8c0 1.4-.2 2.6-.5 3.7-.4 1.1-.9 2.1-1.6 2.9s-1.6 1.4-2.7 1.9c-1.1.4-2.4.7-3.9.7-1.4 0-2.7-.2-3.7-.6-1.1-.4-1.9-1-2.6-1.7-.7-.8-1.2-1.7-1.5-2.8-.3-1.1-.5-2.4-.5-3.8s.2-2.6.5-3.7c.4-1.1.9-2.1 1.6-2.9.7-.8 1.6-1.4 2.7-1.9 1.1-.4 2.4-.7 3.8-.7s2.7.2 3.7.6c1.1.4 1.9 1 2.6 1.7.7.8 1.2 1.7 1.5 2.8.5 1.1.6 2.4.6 3.8zm-4.6.2c0-.8-.1-1.5-.2-2.2s-.3-1.2-.6-1.7-.7-.9-1.2-1.1c-.5-.3-1.1-.4-1.9-.4-.7 0-1.3.1-1.8.4s-.9.6-1.2 1.1c-.3.5-.6 1-.7 1.7s-.2 1.4-.2 2.3c0 .8.1 1.5.2 2.2s.3 1.2.6 1.7.7.9 1.2 1.1c.5.3 1.1.4 1.9.4.7 0 1.3-.1 1.8-.4.5-.2.9-.6 1.2-1.1.3-.5.6-1 .7-1.7s.2-1.4.2-2.3zm20.8-6.9c0 .6-.1 1-.2 1.3-.1.3-.3.4-.5.4h-1.9c.3.3.5.6.6 1 .1.4.2.7.2 1.1 0 .9-.2 1.8-.5 2.5s-.8 1.3-1.3 1.8-1.3.9-2.1 1.1c-.8.3-1.7.4-2.7.4-.5 0-1-.1-1.5-.2s-.8-.3-1.1-.4c-.1.2-.3.3-.4.6-.1.2-.2.5-.2.7 0 .3.2.6.5.9.3.2.7.3 1.3.4l3.9.1c.9 0 1.7.2 2.4.4s1.3.5 1.8.9.9.9 1.1 1.4.4 1.2.4 1.9c0 .8-.2 1.5-.5 2.2-.3.7-.9 1.3-1.6 1.8-.7.5-1.6.9-2.6 1.2-1 .3-2.3.4-3.7.4-1.4 0-2.5-.1-3.5-.3s-1.7-.4-2.3-.8c-.6-.4-1.1-.8-1.3-1.4-.3-.5-.4-1.1-.4-1.7 0-.4.1-.8.2-1.1.1-.4.3-.7.4-1 .2-.3.4-.6.7-.9.3-.3.6-.6 1-.9-.5-.3-.9-.6-1.2-1.1-.3-.5-.4-1-.4-1.5 0-.7.2-1.3.5-1.9.3-.6.7-1.1 1.3-1.6-.4-.4-.8-.9-1-1.5-.3-.6-.4-1.3-.4-2.2 0-.9.2-1.8.5-2.5s.8-1.4 1.4-1.9c.6-.5 1.3-.9 2.1-1.2.8-.3 1.7-.4 2.7-.4.5 0 1 0 1.4.1.5.1.9.1 1.3.3h5.1c.2 0 .4.1.5.4-.1.1 0 .6 0 1.2zM101 32.3c0-.5-.2-.9-.6-1.2s-1-.4-1.8-.5l-3.2-.1c-.3.2-.6.4-.7.7-.2.2-.3.4-.4.6-.2.2-.3.4-.3.6 0 .2-.1.4-.1.6 0 .6.3 1.1.9 1.4.6.3 1.5.5 2.6.5.7 0 1.3-.1 1.7-.2.5-.1.8-.3 1.1-.5.3-.2.5-.5.6-.8.2-.5.2-.7.2-1.1zm-1-12.7c0-.9-.2-1.5-.7-2s-1.2-.7-2-.7c-.4 0-.8.1-1.2.2-.3.1-.6.4-.8.6-.2.3-.4.6-.5.9s-.2.7-.2 1.1c0 .8.2 1.5.7 1.9s1.1.7 2 .7c.5 0 .8-.1 1.2-.2.3-.1.6-.3.8-.6.2-.3.4-.5.5-.9.1-.3.2-.7.2-1zm22.1 11.1c0 .1 0 .2-.1.3-.1.1-.2.2-.3.2-.1.1-.3.1-.6.1h-1.9c-.2 0-.4-.1-.6-.1-.1-.1-.2-.1-.3-.2-.1-.1-.1-.2-.1-.3v-1.8c-.9 1-1.8 1.7-2.7 2.1-.9.5-1.9.7-2.8.7-1.1 0-2-.2-2.8-.5-.7-.4-1.3-.8-1.8-1.5s-.8-1.3-1-2.2c-.2-.8-.3-1.8-.3-3.1v-9.8c0-.1 0-.2.1-.3.1-.1.2-.2.4-.2.2-.1.4-.1.7-.1h2.2c.3 0 .5.1.7.1.2.1.3.1.4.2.1.1.1.2.1.3v9c0 .8.1 1.5.2 1.9.1.4.3.8.5 1.1s.5.6.8.7.7.3 1.2.3c.6 0 1.1-.2 1.7-.6s1.2-1 1.9-1.8V14.7c0-.1 0-.2.1-.3.1-.1.2-.2.4-.2.2-.1.4-.1.7-.1h2.2c.3 0 .5.1.7.1.2.1.3.1.4.2s.1.2.1.3v16zM135 16.2v1.1c0 .3-.1.5-.1.6 0 .2-.1.3-.2.3-.1.1-.2.1-.3.1-.1 0-.2 0-.3-.1-.1 0-.3-.1-.4-.1-.1 0-.3-.1-.5-.1s-.4-.1-.6-.1c-.3 0-.5.1-.8.2-.3.1-.5.3-.8.5-.3.2-.5.5-.8.9s-.6.8-.9 1.3v10c0 .1 0 .2-.1.3-.1.1-.2.2-.4.2-.2.1-.4.1-.7.1h-2.2c-.3 0-.5-.1-.7-.1-.2-.1-.3-.1-.4-.2-.1-.1-.1-.2-.1-.3v-16c0-.1 0-.2.1-.3.1-.1.2-.2.3-.2.2-.1.4-.1.6-.1h1.8c.3 0 .4.1.6.1s.2.1.3.2.1.2.1.3v2c.4-.6.8-1.1 1.2-1.5.4-.4.7-.7 1.1-.9.3-.2.7-.4 1-.5.3-.1.7-.1 1-.1h.5c.2 0 .4 0 .6.1.2 0 .4.1.5.1.1.1.2.1.3.2.1.1.1.1.1.2s.1.2.1.3 0 .3.1.6v.9z"/><path d="M145.4 29.1c0 .5 0 .9-.1 1.2-.1.3-.2.5-.3.6-.1.1-.3.2-.5.3-.2.1-.5.2-.7.2-.3.1-.6.1-.9.2-.3 0-.7.1-1 .1-.9 0-1.7-.1-2.3-.3-.7-.2-1.2-.6-1.6-1-.4-.5-.7-1.1-.9-1.8-.2-.7-.3-1.6-.3-2.5v-8.2h-1.9c-.2 0-.4-.1-.5-.4-.1-.3-.2-.7-.2-1.4v-.9c0-.3.1-.4.1-.6.1-.1.1-.2.2-.3.1-.1.2-.1.3-.1h1.9v-3.6c0-.1 0-.2.1-.3.1-.1.2-.2.4-.2.2-.1.4-.1.7-.1h2.2c.3 0 .5.1.7.1.2.1.3.1.4.2.1.1.1.2.1.3v3.6h3.5c.1 0 .2 0 .3.1.1.1.2.2.2.3.1.1.1.3.1.6v.9c0 .7-.1 1.1-.2 1.4-.1.3-.3.4-.5.4h-3.5v7.5c0 .9.1 1.5.4 2 .3.4.8.7 1.5.7.2 0 .5 0 .6-.1.2 0 .4-.1.5-.1.1-.1.3-.1.4-.1.1 0 .2-.1.3-.1.1 0 .1 0 .2.1.1 0 .1.1.2.3 0 .1.1.3.1.5v.5z"/>
              </svg>
            </y>

            <!-- docs -->
            <y class="animation roll-in-left duration-800">
              <a
                v-bind:class="docButtonTheme"
                href="https://yogurtcss.netlify.app/getting-started/"
                target="_blank"
                rel="noopener"
                title="Read the Documentation"
              >
                Docs
              </a>
            </y>

          </y>

          <!-- Main Buttons -->
          <y class="px-2 flex flex-gap-2 justify-end items-center">
            <y
              v-for='item in mainButtons'
              :key='item.title'
            >

              <y
                v-bind:class="mainButtonTheme"
                :title='item.tooltip'
                @click='item.action'
              >
                <img
                  v-bind:class="mainButtonIconTheme"
                  :src='item.icon'
                  :alt='item.title'
                >
              </y>

            </y>
          </y>

        </y>
      </y>

      <!-- status -->
      <y
        v-bind:class="preloaderTheme"
        v-if="workingStatus"
      />

      <y
        v-bind:class="preloaderTheme"
        v-if="resetStatus"
      />

      <y
        name="html"
        :lazy="true"
        :key="componentKey">

        <MyEditor
          :language="'html'"
          :codes="loadHtmlCodes"
          :theme="editorTheme"
          @onCodeChange="htmlOnCodeChange"
        />

      </y>

    </y>

    <!-- Resizable Window Bar -->
    <y
      v-bind:class="[
        isActive
          ? 'z-20 w-auto h-screen'
          : 'z-20 w-auto h-full'
      ]"
      title="Resize Window"
      id="windowResize"
    >
      <y
        v-bind:class="[
          isActive
            ? 'h-full'
            : '(group) h-full flex flex-col justify-start items-center filter saturate-4'
        ]"
      >
        <y
          v-bind:class="[
            isActive
              ? 'w-1 h-full bg-black-700 (hover)bg-orange-600 (active)bg-orange-600 (focus)bg-orange-600 filter saturate-4 cursor-col-resize select-none transition duration-200 ease-in-out'
              : 'z-30 -mr-8 transform (hover)-translate-x-8 flex justify-center items-center w-10 h-screen bg-orange-500 (group-hover)bg-orange-600 (hover)shadow-dreamy-sm cursor-col-resize transition duration-200 ease-in-out shadow-dreamy-lg rounded-l-lg select-none',
          ]"
        />

      </y>
    </y>

    <!-- Preview -->
    <y
      v-bind:class="[
        isActive
          ? 'z-20 flex-1 h-screen animation fade-in duration-300'
          : 'z-20 flex-1 h-screen animation fade-in duration-200'
      ]"
    >
      <y
        v-bind:class="[
          isActive
            ? 'z-20 h-screen breakpoint-640 bg-white shadow-lg'
            : 'z-20 flex-1 h-screen breakpoint-320 bg-white shadow-lg'
        ]"
        id="result"
      />
    </y>

  </y>
</template>


<script>
  import MyEditor from "../components/editor";
  import { windowResizer } from "../modules/windowResizer";

  export default {
    components: {
      MyEditor,
    },
    data() {
      return {
        htmlCodes:
          '<!-- \n\
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
--> \n\
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
  </body>',
        jsCodes: "",
        cssCodes:
          "@import 'assets/css/yogurt-1.1.7_solidcore.min.css';[debug=screen]{font-size:13px;color:#000;background-color:#d3d3d3;opacity:.3;border-radius:3px;margin:4px;font-weight:700}@media(prefers-color-scheme:dark){color:#d3d3d3;background:#000;}@media (min-width:320px){[debug=screen]::after{content:'(xs) 320px'}}@media (min-width:480px){[debug=screen]::after{content:'(sm) 480px'}}@media (min-width:640px){[debug=screen]::after{content:'(sm) 640px'}}@media (min-width:768px){[debug=screen]::after{content:'(md) 768px'}}@media (min-width:1024px){[debug=screen]::after{content:'(lg) 1024px'}}@media (min-width:1280px){[debug=screen]::after{content:'(xl) 1280px'}}@media (min-width:1920px){[debug=screen]::after{content:'(2xl) 1920px'}}@media (min-width:2560px){[debug=screen]::after{content:'(3k) 2560px'}}@media (min-width:3840px){[debug=screen]::after{content:'(4k) 3840px'}}@media (min-width:5120px){[debug=screen]::after{content:'(5k) 5120px'}}@media (min-width:5760px){[debug=screen]::after{content:'(6k) 5760px'}}@media (min-width:7000px){[debug=screen]::after{content:'(7k) 7000px'}}@media (min-width:7680px){[debug=screen]::after{content:'(8k) 7680px'}}",
        mainButtons: [
          {
            title: 'Reset',
            icon: 'assets/image/reset.svg',
            tooltip: 'Reset auto-saved data',
            action: this.resetData
          },
          {
            title: 'Dark/Light Mode',
            icon: 'assets/image/dark-light-mode.svg',
            tooltip: 'Dark/Light Mode',
            action: this.changeEditorTheme
          },
          {
            title: 'Preview',
            icon: 'assets/image/preview.svg',
            tooltip: 'Full Screen Preview (Ctrl+Alt+M)',
            action: this.toggleModes
          },
          {
            title: 'Run',
            icon: 'assets/image/editor.svg',
            tooltip: 'Run (Ctrl+Alt+/ or F2)',
            action: this.renderCode
          }
        ],
        activeName: "html",
        htmlEditor: null,
        cssEditor: null,
        jsEditor: null,
        componentKey: 0,
        isActive: true,
        workingStatus: false,
        resetStatus: false,
        loadHtmlCodes: localStorage.dataHTML,
        loadCssCodes: localStorage.dataCSS,
        loadJsCodes: localStorage.dataJS,
        editorTheme: localStorage.dataTheme,
        bgCoverTheme: localStorage.dataBgTheme,
        menubarTheme: localStorage.dataMenuBarTheme,
        docButtonTheme: localStorage.dataDocButtonTheme,
        themeButton: localStorage.dataButtonTheme,
        mainButtonIconTheme: localStorage.dataMainButtonIconTheme,
        mainButtonTheme: localStorage.dataMainButtonTheme,
        logoTheme: localStorage.dataLogoTheme,
        bgLogoTheme: localStorage.dataBgLogoTheme,
        preloaderTheme: localStorage.dataPreloaderTheme,
      };
    },
    mounted() {
      this.shortcutKeysEvents();
      this.renderCode();

      windowResizer();
    },
    beforeDestroy() {
      document.removeEventListener("keydown", this.shortcutKeys);
    },
    methods: {
      runCode() {
        this.workingStatus = true;

        let t = '<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"><style>' + this.loadCssCodes + "</style></head><body>" + this.loadHtmlCodes + '<y debug="screen"></y></body><script>' + this.loadJsCodes + "<\\/script></html>";

        let result = document.getElementById("result");
        result.innerHTML = "";

        let iframe = document.createElement("iframe");
        iframe.name = "result";
        iframe.id = "resultIframe";
        iframe.sandbox = "allow-forms allow-popups allow-scripts allow-same-origin allow-modals";
        iframe.frameBorder = "0";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        result.append(iframe);

        let r = document.getElementById("resultIframe");
        r.contentDocument.write(t), r.contentDocument.close();
      },
      htmlOnCodeChange(value) {
        this.loadHtmlCodes = value;
        localStorage.dataHTML = value;
      },
      cssOnCodeChange(value) {
        this.loadCssCodes = value;
        localStorage.dataCSS = value;
      },
      javascriptOnCodeChange(value) {
        this.loadJsCodes = value;
        localStorage.dataJS = value;
      },
      toggleModes: function () {
        this.isActive = !this.isActive;
        this.forceRerender();
      },
      shortcutKeysEvents: function () {
        this.shortcutKeys = function (e) {
          // `ctrl+alt+/` or `f2` to run code
          if ((e.key === "/" && (e.altKey || e.metaKey)) || e.key === "F2") {
            e.preventDefault();
            this.renderCode();
          }
          // `ctrl+alt+m` to switch between editor or previewer
          if (e.key === "m" && (e.altKey || e.metaKey)) {
            e.preventDefault();
            this.toggleModes();
          }
          // `ctrl+alt+p` to load template data
          if (e.key === "p" && (e.altKey || e.metaKey)) {
            e.preventDefault();
            localStorage.dataHTML = this.htmlCodes;
            localStorage.dataCSS = this.cssCodes;
            localStorage.dataJS = this.jsCodes;
            this.forceRerender();
          }
          // `ctrl+alt+d` to reset stored data
          if (e.key === "d" && (e.altKey || e.metaKey)) {
            e.preventDefault();
            this.resetStatus = true;
            setTimeout(() => {
              localStorage.clear();
              window.location.reload();
              this.resetStatus = false;
            }, 1000);
          }
        };
        document.addEventListener("keydown", this.shortcutKeys.bind(this));
      },
      resetData: function() {
        this.resetStatus = true;
        setTimeout(() => {
          localStorage.clear();
          window.location.reload();
          this.resetStatus = false;
        }, 1000);
      },
      forceRerender() {
        this.componentKey += 1
      },
      renderCode: function() {
        this.runCode();
        setTimeout(() => { this.workingStatus = false; }, 2000);
      },
      changeEditorTheme: function() {
        if (localStorage.dataTheme === "vs") { // light
          localStorage.dataTheme = "vs-dark";
          localStorage.dataBgLogoTheme = "invert-1 h-auto w-32 object-cover object-center overflow-hidden opacity-75 select-none";
          localStorage.dataLogoTheme = "invert-1 opacity-75 h-8 w-auto object-fit object-center overflow-hidden";
          localStorage.dataDocButtonTheme = "flex justify-center items-center px-2 h-6 text-sm text-gray-500 (hover)text-gray-400 bg-transparent (active)bg-gray-700 border border-gray-700 (hover)border-gray-600 (focus)border-gray-500 rounded transition duration-300 ease-in-out";
          localStorage.dataMenuBarTheme = "p-1 absolute bottom-0 left-0 h-20 w-full bg-charcoal-100";
          localStorage.dataButtonTheme = "invert-1 opacity-50 transform (hover)scale-125 w-5 h-5 transition duration-300 ease-in-out transform (group-hover)scale-125";
          localStorage.dataMainButtonTheme = "(group) flex justify-center items-center px-2 py-1 text-gray-400 (hover)text-gray-300 bg-transparent (active)bg-gray-700 rounded transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none";
          localStorage.dataMainButtonIconTheme = "invert-1 opacity-50 (group-hover)opacity-75 (group-hover)invert-1 w-6 h-6 object-fit object-center transition duration-300 ease-in-out transform (group-hover)scale-125";
          localStorage.dataBgTheme = "relative flex flex-row pattern ripple-lg text-charcoal-100 bg-charcoal-400";
          localStorage.dataPreloaderTheme = "z-50 absolute top-16 right-6 w-5 h-5 preloader dark animation fade-in duration-300";
          // TODO: if `light`, then reload is `dark`
          window.location.reload();
        } else if (localStorage.dataTheme === "vs-dark") { // dark
          localStorage.dataTheme = "vs";
          localStorage.dataBgLogoTheme = "invert-0 h-auto w-32 object-cover object-center overflow-hidden opacity-75 select-none";
          localStorage.dataLogoTheme = "invert-0 opacity-75 h-8 w-auto fill-current text-gray-700 object-fit object-center overflow-hidden";
          localStorage.dataMenuBarTheme = "p-1 absolute bottom-0 left-0 h-20 w-full bg-white";
          localStorage.dataDocButtonTheme = "flex justify-center items-center px-2 h-6 text-sm text-gray-600 (hover)text-gray-800 (active)bg-gray-300 border border-gray-300 (hover)border-gray-500 rounded transition duration-300 ease-in-out";
          localStorage.dataButtonTheme = "opacity-50 text-gray-200 transform (hover)scale-125 w-5 h-5 transition duration-300 ease-in-out transform (group-hover)scale-125";
          localStorage.dataMainButtonTheme = "(group) flex justify-center items-center px-2 py-1 text-gray-700 (group-hover)text-gray-800 bg-transparent (active)bg-gray-300 filter saturate-4 rounded transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none";
          localStorage.dataMainButtonIconTheme = "invert-0 opacity-50 (group-hover)opacity-75 (group-hover)invert-0 w-6 h-6 object-fit object-center transition duration-300 ease-in-out transform (group-hover)scale-125";
          localStorage.dataBgTheme = "relative flex flex-row pattern ripple-lg text-white bg-gray-200";
          localStorage.dataPreloaderTheme = "z-50 absolute top-16 right-6 w-5 h-5 preloader dark animation fade-in duration-300";
          // TODO: if `dark`, then reload is `light`
          window.location.reload();
        }
      }
    }
  };
</script>


<style scoped>
  .breakpoint-320 {
    min-width: 320px;
  }
  .breakpoint-480 {
    min-width: 480px;
  }
  .breakpoint-640 {
    min-width: 640px;
  }
  .preloader {
    --preloader-theme: transparent;
    margin: 0 auto;
    border: 3px solid var(--preloader-theme);
    border-radius: 50%;
    border-left-color: transparent;
    border-right-color: transparent;
    animation: cssload-spin 575ms infinite linear;
    -o-animation: cssload-spin 575ms infinite linear;
    -ms-animation: cssload-spin 575ms infinite linear;
    -webkit-animation: cssload-spin 575ms infinite linear;
    -moz-animation: cssload-spin 575ms infinite linear;
  }
  .preloader.light {
    --preloader-theme: rgb(0, 0, 0);
  }
  .preloader.dark {
    --preloader-theme: rgb(255, 81, 0);
  }
  @keyframes cssload-spin {
    100% {
      transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-o-keyframes cssload-spin {
    100% {
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-ms-keyframes cssload-spin {
    100% {
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes cssload-spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
