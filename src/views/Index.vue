<template>
  <y v-bind:class="[isActive ? 'relative flex flex-row bg-blue-500' : 'relative flex flex-row pattern ripple-lg text-charcoal-100 bg-charcoal-500 overflow-hidden']">

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
      <y v-bind:class="[isActive ? 'absolute bottom-4 left-4' : 'hidden']">
        <y class="(group) p-2 bg-orange-600 (hover)bg-orange-700 (active)bg-orange-800 shadow-dreamy-lg filter saturate-4 rounded-lg transform (hover)scale-110 transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer"
           title="Switch to Preview Mode">
          <img class="invert-1 (group-hover)invert-0 w-8 h-8 object-fit object-center transition duration-300 ease-in-out"
               src="assets/image/preview.svg">
        </y>
      </y>
      <!-- Preview -->
      <y v-bind:class="[isActive ? 'hidden' : 'absolute bottom-4 left-4']">
        <y class="(group) p-2 bg-orange-600 (hover)bg-orange-700 (active)bg-orange-800 shadow-dreamy-lg filter saturate-4 rounded-lg transform (hover)scale-110 transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer"
           title="Switch to Editor Mode">
          <img class="invert-1 (group-hover)invert-0 w-8 h-8 object-fit object-center transition duration-300 ease-in-out"
               src="assets/image/editor.svg">
        </y>
      </y>
    </y>

     <!-- Editor -->
    <y v-model="activeName"
       v-bind:class="[isActive ? 'z-10 flex-1 h-screen' : 'flex-initial invisible']">

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
    <y v-bind:class="[isActive ? 'z-20 w-0 invisible' : 'z-20 w-10 h-full visible']"
       title="Drag Responsive Window"
       id="screenResizableDragger">
      <y class="(group) py-4 h-full flex flex-col justify-start items-center filter saturate-4">
        <y v-bind:class="[isActive ? 'invisible' : 'flex justify-center items-center py-2 w-10 h-32 bg-orange-500 (group-hover)bg-orange-600 (hover)shadow-dreamy-sm cursor-col-resize transition duration-300 ease-in-out shadow-dreamy-lg rounded-l-md']">
          <y class="my-1 mx-1 w-1 h-full bg-orange-700 (group-hover)bg-orange-400 rounded-full"></y>
          <y class="my-1 mx-px w-1 h-full bg-orange-700 (group-hover)bg-orange-400 rounded-full"></y>
        </y>
      </y>
    </y>

    <!-- Preview -->
    <y v-bind:class="[isActive ? 'z-20 flex-none h-screen bg-white' : 'z-20 flex-1 h-screen bg-white']"
       style="min-width: 320px"
       id="result"></y>

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
          '<body class="font-default antialiased text-gray-600 (dark)text-gray-300 bg-gray-100 (dark)bg-gray-800">\n\n\
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
        javascriptCodes: "let loadStyle = function(url) { return new Promise((resolve, reject) => { let link = document.createElement('link'); link.type = 'text/css'; link.rel = 'stylesheet'; link.onload = () => { resolve(); }; link.href = url; let headScript = document.querySelector('script'); headScript.parentNode.insertBefore(link, headScript); }); }; loadStyle('assets/css/yogurt-1.1.6_solidcore.min.css')",
        cssCodes: "::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background-color:transparent}::-webkit-scrollbar-thumb{background-color:#d6dee1;border-radius:20px;border:0px solid transparent;background-clip:content-box}::-webkit-scrollbar-thumb:hover{background-color:#a8bbbf}",
        htmlEditor: null,
        jsEditor: null,
        cssEditor: null,
        isActive: true
      };
    },
    mounted() {
      this.runCode();
      splitWindowDragBar();
    },
    methods: {
      runCode() {
        let t = '<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"><style>' + this.cssCodes + '</style></head><body>' + this.htmlCodes + '<y debug="screen" class="m-1"></y></body><script>' + this.javascriptCodes + '<\/script></html>';

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
        this.runCode();
      },
      javascriptOnCodeChange(value) {
        this.javascriptCodes = value;
        this.runCode();
      },
      cssOnCodeChange(value) {
        this.cssCodes = value;
        this.runCode();
      },
      toggleWindowModes: function () {
        this.isActive = !this.isActive;
      }
    }
  };
</script>

