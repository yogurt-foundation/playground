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
              <img
                v-bind:class="logoTheme"
                src="assets/image/logo_full.svg"
                alt="Yogurt"
              >
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
        <y class="pb-6 .. text-gray-600 (dark)text-gray-500 text-center .. fluid text-min-xl text-max-3xl .. highlight fore-gray-100 rear-teal-400">\n\
          Welcome to Yogurt Playground\n\
        </y>\n\
      </y>\n\
      <y class="z-50 .. px-16 py-10 .. (xs)max-w-full .. flex justify-center items-center .. bg-transparent (dark)bg-gray-700 .. rounded-lg .. shadow-lg .. backdrop-filter blur-2 .. animation fade-in duration-4000">\n\
        <y class="flex (xs)flex-col (sm)flex-row justify-center items-center">\n\
          <y class="h-24 w-24 .. bg-gray-500 (dark)bg-orange-600 .. rounded-full .. shadow-dreamy-lg"></y>\n\
          <y class="(xs)pt-4 (sm)p-4 .. text-gray-500 (dark)text-gray-600 .. fluid text-min-3xl text-max-5xl text-center font-thin .. highlight fore-gray-100 rear-amber-400">\n\
            Hello World!\n\
          </y>\n\
        </y>\n\
      </y>\n\
      <y class="z-50 .. (lg)max-w-xl .. animation fade-in-down duration-800 delay-2">\n\
        <y class="text-gray-500 (dark)text-gray-600 font-thin text-center .. fluid p-min-2 p-max-6 text-min-xl text-max-5xl .. depth-tight .. highlight fore-gray-100 rear-pink-400">\n\
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
          "@import 'assets/css/yogurt-1.1.6_solidcore.min.css';[debug=screen]{font-size:13px;color:#000;background-color:#d3d3d3;opacity:.3;border-radius:3px;margin:4px;font-weight:700}@media(prefers-color-scheme:dark){color:#d3d3d3;background:#000;}@media (min-width:320px){[debug=screen]::after{content:'(xs) 320px'}}@media (min-width:480px){[debug=screen]::after{content:'(sm) 480px'}}@media (min-width:640px){[debug=screen]::after{content:'(sm) 640px'}}@media (min-width:768px){[debug=screen]::after{content:'(md) 768px'}}@media (min-width:1024px){[debug=screen]::after{content:'(lg) 1024px'}}@media (min-width:1280px){[debug=screen]::after{content:'(xl) 1280px'}}@media (min-width:1920px){[debug=screen]::after{content:'(2xl) 1920px'}}@media (min-width:2560px){[debug=screen]::after{content:'(3k) 2560px'}}@media (min-width:3840px){[debug=screen]::after{content:'(4k) 3840px'}}@media (min-width:5120px){[debug=screen]::after{content:'(5k) 5120px'}}@media (min-width:5760px){[debug=screen]::after{content:'(6k) 5760px'}}@media (min-width:7000px){[debug=screen]::after{content:'(7k) 7000px'}}@media (min-width:7680px){[debug=screen]::after{content:'(8k) 7680px'}}",
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
          localStorage.dataLogoTheme = "invert-0 opacity-75 h-8 w-auto object-fit object-center overflow-hidden";
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
