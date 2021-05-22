<template>
  <y v-bind:class="[isActive ? 'relative flex flex-row bg-charcoal-100' : 'relative flex flex-row gradient-vicious-stance']">

    <y class="z-10 absolute top-0 left-0 flex justify-start items-center h-screen w-full select-none">
      <y class="ml-24">
        <img class="h-auto w-64 object-cover object-center overflow-hidden invert-1 opacity-75"
            src="assets/image/logo_full.svg"
            title="Yogurt">
      </y>
    </y>

    <y v-bind:class="[isActive ? 'z-50 absolute top-2 right-2 w-5 h-5 bg-orange-600 border-4 border-gray-700 (hover)border-orange-600 rounded-full transition duration-300 ease-in-out cursor-pointer shadow-dreamy-sm filter saturate-4 animation blur-in duration-800' : 'z-50 absolute top-2 right-2 w-5 h-5 bg-gray-700 (hover)bg-gray-800 border-4 border-orange-600 (hover)border-gray-700 rounded-full transition duration-300 ease-in-out cursor-pointer shadow-dreamy-sm filter saturate-4 animation blur-in duration-800']"
       @click="toggleModes()"
       title="Show Editor or Preview screen">
    </y>

     <!-- Editor -->
    <y v-model="activeName"
       v-bind:class="[isActive ? 'z-10 flex-1 h-screen' : 'z-10 invisible']">

      <y name="html"
         :lazy="true">

        <MyEditor
          class="mb-24"
          :language="'html'"
          :codes="htmlCodes"
          @onCodeChange="htmlOnCodeChange"
        />

      </y>

    </y>

    <!-- Drag Bar -->
    <y v-bind:class="[isActive ? 'w-1 h-screen' : 'z-20 w-4 h-screen bg-gray-600 (hover)bg-orange-600 (hover)shadow-dreamy-sm cursor-col-resize transition duration-300 ease-in-out filter saturate-4 shadow-dreamy-lg']"
       title="Drag Window"
       id="screenResizableDragger">
    </y>

    <!-- Preview -->
    <y v-bind:class="[isActive ? 'flex-1 h-screen bg-white' : 'z-20 flex-1 h-screen bg-white']"
       style="min-width: 320px"
       id="result"></y>

  </y>
</template>


<script>
  import MyEditor from "../components/editor";
  import { splitWindowDragBar } from "../components/dragbar";
  export default {
    components: {
      MyEditor,
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
        javascriptCodes: "let loadStyle = function(url) { return new Promise((resolve, reject) => { let link = document.createElement('link'); link.type = 'text/css'; link.rel = 'stylesheet'; link.onload = () => { resolve(); console.log('style has loaded'); }; link.href = url; let headScript = document.querySelector('script'); headScript.parentNode.insertBefore(link, headScript); }); }; loadStyle('https://yogurtcss.netlify.app/yogurt-1.1.6_solidcore.min.css')",
        cssCodes: "",
        htmlEditor: null,
        jsEditor: null,
        cssEditor: null,
        isActive: true,
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
      toggleModes: function () {
        this.isActive = !this.isActive;
      },
    },
  };
</script>
