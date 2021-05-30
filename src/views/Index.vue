<template>
  <y v-bind:class="bgCoverTheme">

    <!-- Logo -->
    <y
      class="z-10 absolute top-0 left-0 flex justify-start items-center h-screen w-full"
    >
      <y
        class="ml-24">
        <img
          v-bind:class="bgLogoTheme"
          src="assets/image/logo_full.svg"
          title="Yogurt"
        />
      </y>
    </y>

    <!-- back to Editor from Previwer -->
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
      />
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
            ? 'z-50 breakpoint-540 menuBarTheme'
            : 'hidden'
        ]"
      >
        <y class="p-1 flex justify-between items-center">

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
                href="https://yogurtcss.netlify.app"
                target="_blank"
                rel="noopener"
                title="Read the Documentation"
              >
                Docs
              </a>
            </y>
          </y>

          <!-- Switch -->
          <y class="px-2 flex flex-gap-3 justify-end items-center">

            <!-- Theme -->
            <y
              class="flex justify-center items-center px-2 py-2 filter saturate-4 rounded transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none"
              title="Dark or Light Theme"
              @click="changeEditorTheme"
            >
              <img
                v-bind:class="themeButton"
                src="assets/image/dark-light-mode.svg"
                alt="Dark/Light Mode">
            </y>

            <!-- Preview -->
            <y
              v-bind:class="mainButtonTheme"
              title="Preview (Ctrl+Alt+M)"
              @click="toggleModes()"
            >
              <img
                v-bind:class="mainButtonIconTheme"
                src="assets/image/preview.svg"
              />
              <y
                class="ml-2 text-sm font-semibold opacity-50 (group-hover)opacity-100"
              >
                Preview
              </y>
            </y>

            <!-- Run -->
            <y
              v-bind:class="mainButtonTheme"
              title="Run Code (F2 or Ctrl+Alt+/)"
              @click="renderCode"
            >
              <img
                v-bind:class="mainButtonIconTheme"
                src="assets/image/editor.svg"
              />
              <y
                class="ml-2 text-sm font-semibold opacity-50 (group-hover)opacity-100"
              >
                Run
              </y>
            </y>

          </y>

        </y>
      </y>

      <!-- status -->
      <y
        v-bind:class="preloaderTheme"
        v-if="workingStatus">
      </y>

      <y
        v-bind:class="preloaderTheme"
        v-if="resetStatus">
      </y>

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
      id="resizableWindowBar"
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
        ></y>

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
            ? 'z-20 h-screen bg-white breakpoint-320 shadow-lg'
            : 'z-20 flex-1 h-screen bg-white breakpoint-320 shadow-lg'
        ]"
        id="result"
      ></y>
    </y>
  </y>
</template>


<script>
  import MyEditor from "../components/editor";
  import { windowsResizableDragbar } from "../modules/window-resizeable-dragbar";

  export default {
    components: {
      MyEditor,
    },
    data() {
      return {
        activeName: "html",
        htmlCodes:
          '<!-- \n\
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
  </body>',
        jsCodes: "",
        cssCodes:
          "@import 'assets/css/yogurt-1.1.6_solidcore.min.css';[debug=screen]{font-size:13px;color:#000;background-color:#d3d3d3;opacity:.3;border-radius:3px;margin:4px;font-weight:700}@media (min-width:320px){[debug=screen]::after{content:'(xs) 320px'}}@media (min-width:480px){[debug=screen]::after{content:'(sm) 480px'}}@media (min-width:640px){[debug=screen]::after{content:'(sm) 640px'}}@media (min-width:768px){[debug=screen]::after{content:'(md) 768px'}}@media (min-width:1024px){[debug=screen]::after{content:'(lg) 1024px'}}@media (min-width:1280px){[debug=screen]::after{content:'(xl) 1280px'}}@media (min-width:1920px){[debug=screen]::after{content:'(2xl) 1920px'}}@media (min-width:2560px){[debug=screen]::after{content:'(3k) 2560px'}}@media (min-width:3840px){[debug=screen]::after{content:'(4k) 3840px'}}@media (min-width:5120px){[debug=screen]::after{content:'(5k) 5120px'}}@media (min-width:5760px){[debug=screen]::after{content:'(6k) 5760px'}}@media (min-width:7000px){[debug=screen]::after{content:'(7k) 7000px'}}@media (min-width:7680px){[debug=screen]::after{content:'(8k) 7680px'}}",
        ///
        htmlEditor: null,
        jsEditor: null,
        cssEditor: null,
        ///
        componentKey: 0,
        ///
        isActive: true,
        ///
        loadHtmlCodes: localStorage.dataHTML,
        loadCssCodes: localStorage.dataCSS,
        loadJsCodes: localStorage.dataJS,
        ///
        workingStatus: false,
        resetStatus: false,
        ///
        editorTheme: localStorage.dataTheme,
        bgCoverTheme: localStorage.dataBgTheme,
        ///
        menubarTheme: localStorage.dataMenuBarTheme,
        docButtonTheme: localStorage.dataDocButtonTheme,
        themeButton: localStorage.dataButtonTheme,
        mainButtonIconTheme: localStorage.dataMainButtonIconTheme,
        mainButtonTheme: localStorage.dataMainButtonTheme,
        logoTheme: localStorage.dataLogoTheme,
        bgLogoTheme: localStorage.dataBgLogoTheme,
        ///
        preloaderTheme: localStorage.dataPreloaderTheme,
      };
    },
    mounted() {
      this.shortcutKeysEvents();
      this.renderCode();

      windowsResizableDragbar();
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
          // `ctrl+alt+t` to load template data
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
      forceRerender() {
        this.componentKey += 1
      },
      renderCode: function() {
        this.runCode();
        setTimeout(() => {
           this.workingStatus = false;
        }, 2000);
      },
      changeEditorTheme: function() {
        if (localStorage.dataTheme === "vs") { // light
          ///
          localStorage.dataTheme = "vs-dark";
          ///
          localStorage.dataBgLogoTheme = "invert-1 h-auto w-64 object-cover object-center overflow-hidden opacity-75 select-none";
          ///
          localStorage.dataLogoTheme = "invert-1 opacity-75 h-8 w-auto object-fit object-center overflow-hidden";
          localStorage.dataDocButtonTheme = "flex justify-center items-center px-2 h-6 text-sm text-gray-400 (hover)text-gray-300 bg-transparent (active)bg-gray-700 border border-gray-700 (hover)border-gray-600 (focus)border-gray-600 rounded";
          localStorage.dataMenuBarTheme = "p-1 absolute bottom-0 left-0 h-20 w-full";
          localStorage.dataButtonTheme = "invert-1 opacity-50 transform (hover)scale-125 w-5 h-5 transition duration-300 ease-in-out transform (group-hover)scale-125";
          localStorage.dataMainButtonTheme = "(group) flex justify-center items-center px-2 py-1 text-gray-400 (hover)text-gray-300 bg-transparent (active)bg-gray-700 border border-gray-700 (hover)border-gray-600 (focus)border-gray-600 rounded transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none";
          localStorage.dataMainButtonIconTheme = "invert-1 opacity-50 (group-hover)opacity-75 (group-hover)invert-1 w-5 h-5 object-fit object-center transition duration-300 ease-in-out transform (group-hover)scale-110";
          ///
          localStorage.dataBgTheme = "relative flex flex-row pattern ripple-lg text-charcoal-100 bg-charcoal-400";
          ///
          localStorage.dataPreloaderTheme = "z-50 absolute top-16 right-6 w-5 h-5 preloader dark animation fade-in duration-300";
          window.location.reload();
        } else if (localStorage.dataTheme === "vs-dark") { // dark
          ///
          localStorage.dataTheme = "vs";
          ///
          localStorage.dataBgLogoTheme = "invert-0 h-auto w-64 object-cover object-center overflow-hidden opacity-75 select-none";
          ///
          localStorage.dataLogoTheme = "invert-0 opacity-75 h-8 w-auto object-fit object-center overflow-hidden";
          localStorage.dataMenuBarTheme = "p-1 absolute bottom-0 left-0 h-20 w-full";
          localStorage.dataDocButtonTheme = "flex justify-center items-center px-2 h-6 text-sm text-gray-600 (active)bg-gray-300 border border-gray-300 (hover)border-gray-500 rounded";
          localStorage.dataButtonTheme = "opacity-50 text-gray-200 transform (hover)scale-125 w-5 h-5 transition duration-300 ease-in-out transform (group-hover)scale-125";
          localStorage.dataMainButtonTheme = "(group) flex justify-center items-center px-2 py-1 text-black-900 (group-hover)text-black-900 bg-gray-100 (active)bg-gray-300 border border-gray-300 (hover)border-gray-500 (focus)border-gray-500 filter saturate-4 rounded transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none";
          localStorage.dataMainButtonIconTheme = "invert-0 opacity-50 (group-hover)opacity-75 (group-hover)invert-0 w-5 h-5 object-fit object-center transition duration-300 ease-in-out transform (group-hover)scale-110";
          ///
          localStorage.dataBgTheme = "relative flex flex-row pattern ripple-lg text-gray-100 bg-gray-300";
          localStorage.dataPreloaderTheme = "z-50 absolute top-16 right-6 w-5 h-5 preloader light animation fade-in duration-300";
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
  .breakpoint-540 {
    min-width: 540px;
  }
  .breakpoint-640 {
    min-width: 640px;
  }
  .breakpoint-768 {
    min-width: 768px;
  }
  .breakpoint-1024 {
    min-width: 1024px;
  }
  .breakpoint-1280 {
    min-width: 1280px;
  }
  .breakpoint-1920 {
    min-width: 1920px;
  }
  .breakpoint-3840 {
    min-width: 3840px;
  }
  .breakpoint-7680 {
    min-width: 7680px;
  }
  .breakpoint-x {
    min-width: 320px;
    max-width: 100%;
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
