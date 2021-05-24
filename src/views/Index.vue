<template>
  <y v-bind:class="[isActive ? 'relative flex flex-row pattern ripple-lg text-charcoal-100 bg-charcoal-500' : 'relative flex flex-row pattern ripple-lg text-charcoal-100 bg-charcoal-500 overflow-hidden']">

    <!-- Logo -->
    <y class="z-10 absolute top-0 left-0 flex justify-start items-center h-screen w-full">
      <y class="ml-24">
        <img class="h-auto w-64 object-cover object-center overflow-hidden invert-1 opacity-75 select-none"
            src="assets/image/logo_full.svg"
            title="Yogurt">
      </y>
    </y>

    <!-- Switch -->
    <y class="z-50"
       @click="toggleWindowModes()">
       <!-- Editor -->
      <y v-bind:class="[isActive ? 'absolute bottom-5 left-5' : 'hidden']">
        <y class="(group) flex justify-center items-center px-3 py-2 bg-charcoal-800 (hover)bg-orange-700 (active)bg-orange-800 border-4 border-transparent (hover)border-orange-600 shadow-dreamy-lg filter saturate-4 rounded-lg transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none"
            title="Preview">
          <img class="invert-1 opacity-50 (group-hover)opacity-75 (group-hover)invert-0 w-6 h-6 object-fit object-center transition duration-300 ease-in-out transform (group-hover)scale-110"
                src="assets/image/preview.svg">
          <y class="ml-2 text-sm font-semibold text-gray-100 (group-hover)text-black-900 opacity-50 (group-hover)opacity-100">
            Preview
          </y>
        </y>
      </y>
      <!-- Preview -->
      <y v-bind:class="[isActive ? 'hidden' : 'absolute bottom-5 left-5']">
        <y class="(group) flex justify-center items-center px-3 py-2 bg-charcoal-800 (hover)bg-orange-700 (active)bg-orange-800 border-4 border-transparent (hover)border-orange-600 shadow-dreamy-lg filter saturate-4 rounded-lg transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none"
            title="Editor">
          <img class="invert-1 opacity-50 (group-hover)opacity-75 (group-hover)invert-0 w-6 h-6 object-fit object-center transition duration-300 ease-in-out transform (group-hover)scale-110"
                src="assets/image/editor.svg">
          <y class="ml-2 text-sm font-semibold text-gray-100 (group-hover)text-black-900 opacity-50 (group-hover)opacity-100">
            Editor
          </y>
        </y>
      </y>
    </y>
    <!-- back to Editor -->
    <y v-bind:class="[isActive ? 'z-50 absolute bottom-5 left-32 ml-6' : 'hidden']">
      <y class="(group) flex justify-center items-center px-3 py-2 bg-charcoal-800 (hover)bg-orange-700 (active)bg-orange-800 border-4 border-transparent (hover)border-orange-600 shadow-dreamy-lg filter saturate-4 rounded-lg transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none"
         title="Run Code (F2 or Ctrl+Alt+R)"
         @click="runCode">
        <img class="invert-1 opacity-50 (group-hover)opacity-75 (group-hover)invert-0 w-6 h-6 object-fit object-center transition duration-300 ease-in-out transform (group-hover)scale-110"
             src="assets/image/editor.svg">
        <y class="ml-2 text-sm font-semibold text-gray-100 (group-hover)text-black-900 opacity-50 (group-hover)opacity-100">
          Run
        </y>
      </y>
    </y>

     <!-- Editor -->
    <y v-model="activeName"
       v-bind:class="[isActive ? 'z-10 flex-1 h-screen animation fade-in duration-300' : 'flex-initial invisible']">

      <y name="html"
         :lazy="true">

        <MyEditor
          :language="'html'"
          :codes="htmlCodes"
          @onCodeChange="htmlOnCodeChange"
        />

      </y>

    </y>

    <!-- Responsive Drag Bar -->
    <y v-bind:class="[isActive ? 'z-20 w-0 invisible' : 'z-20 w-auto h-full visible']"
       title="Drag Responsive Window"
       id="screenResizableDragger">
      <y class="(group) py-4 h-full flex flex-col justify-start items-center filter saturate-4">
        <y v-bind:class="[isActive ? 'invisible' : '-mr-8 transform (hover)-translate-x-8 flex justify-center items-center py-2 w-10 h-32 bg-orange-500 (group-hover)bg-orange-600 (hover)shadow-dreamy-sm cursor-col-resize transition duration-300 ease-in-out shadow-dreamy-lg rounded-l-md select-none']">
          <y class="my-1 mx-1 w-1 h-full bg-orange-700 (group-hover)bg-orange-400 rounded-full"></y>
          <y class="my-1 mx-px w-1 h-full bg-orange-700 (group-hover)bg-orange-400 rounded-full"></y>
        </y>
      </y>
    </y>

    <!-- Preview -->
    <y v-bind:class="[isActive ? 'z-20 flex justify-center items-center flex-none h-screen animation fade-in duration-500' : 'z-20 flex-1 h-screen bg-white']">
      <y v-bind:class="[isActive ? 'breakpoint-480 mobile-h-screen-540 h-full bg-white' : 'z-20 flex-1 h-screen bg-white breakpoint-320']"
         id="result"></y>
    </y>

  </y>
</template>


<script>
  import MyEditor from "../components/editor";
  import { splitWindowDragBar } from "../components/dragbar";

  export default {
    components: {
      MyEditor
    },
    data() {
      return {
        activeName: "html",
        htmlCodes:
          '<!-- \n\
    Welcome to Yogurt Playground!\n\
    Here you can testing or prototyping complex or simple UI online.\n\
    Framework Version: 1.1.6-beta\n\
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
    <!-- Display Screen Size -->\n\
    <!-- <y debug="screen"></y> -->\n\n\
  </body>',
        javascriptCodes: "",
        cssCodes: "@import 'assets/css/yogurt-1.1.6_solidcore.min.css';[debug=screen]{font-size:13px;color:#000;background-color:#d3d3d3;opacity:.3;border-radius:3px;margin:4px;font-weight:700}@media (min-width:320px){[debug=screen]::after{content:'(xs) 320px'}}@media (min-width:480px){[debug=screen]::after{content:'(sm) 480px'}}@media (min-width:640px){[debug=screen]::after{content:'(sm) 640px'}}@media (min-width:768px){[debug=screen]::after{content:'(md) 768px'}}@media (min-width:1024px){[debug=screen]::after{content:'(lg) 1024px'}}@media (min-width:1280px){[debug=screen]::after{content:'(xl) 1280px'}}@media (min-width:1920px){[debug=screen]::after{content:'(2xl) 1920px'}}@media (min-width:2560px){[debug=screen]::after{content:'(3k) 2560px'}}@media (min-width:3840px){[debug=screen]::after{content:'(4k) 3840px'}}@media (min-width:5120px){[debug=screen]::after{content:'(5k) 5120px'}}@media (min-width:5760px){[debug=screen]::after{content:'(6k) 5760px'}}@media (min-width:7000px){[debug=screen]::after{content:'(7k) 7000px'}}@media (min-width:7680px){[debug=screen]::after{content:'(8k) 7680px'}}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background-color:transparent}::-webkit-scrollbar-thumb{background-color:#d6dee1;border-radius:20px;border:0px solid transparent;background-clip:content-box}::-webkit-scrollbar-thumb:hover{background-color:#a8bbbf}",
        htmlEditor: null,
        jsEditor: null,
        cssEditor: null,
        isActive: true
      };
    },
    mounted() {
      this.runCode();
      splitWindowDragBar();

      // Shortcut key `ctrl+alt+r` or `f2` to run code
      this.runCodeKeys = function(e) {
        if (e.key === "r" && (e.altKey || e.metaKey) || e.key === "F2") {
          e.preventDefault();
          this.runCode();
        }
      };
      document.addEventListener('keydown', this.runCodeKeys.bind(this));
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.runCodeKeys);
    },
    methods: {
      test(e) {
        if (!(e.keyCode === 82 && e.ctrlKey)) {
          this.runCode();
          return;
        }
        e.preventDefault();
      },
      runCode() {
        let t = '<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"><style>' + this.cssCodes + '</style></head><body>' + this.htmlCodes + '</body><script>' + this.javascriptCodes + '<\\/script></html>';

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
        this.htmlCodes = value;
        // this.runCode();
      },
      javascriptOnCodeChange(value) {
        this.javascriptCodes = value;
        // this.runCode();
      },
      cssOnCodeChange(value) {
        this.cssCodes = value;
        // this.runCode();
      },
      toggleWindowModes: function () {
        this.isActive = !this.isActive;
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
  .breakpoint-768 {
    min-width: 768px;
  }
  .mobile-h-screen-540 {
    height: 540px;
  }
</style>
