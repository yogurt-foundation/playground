<template>
  <y v-bind:class="[isActive ? '' : '']"
     class="relative flex">

    <!-- Editor -->
    <y v-model="activeName"
       type="border-card"
       v-bind:class="[isActive ? 'flex-1' : 'flex-1']"
       style="">

      <y class="absolute top-6 left-48 w-4 h-4 bg-gray-600 (hover)bg-gray-400 rounded-full transition duration-300 ease-in-out cursor-pointer"
         @click="toggleModes()"
         title="Horizontal / Vertical"></y>

      <y name="html" :lazy="true">

        <MyEditor
          v-bind:class="[isActive ? '' : '']"
          :language="'html'"
          :codes="htmlCodes"
          @onCodeChange="htmlOnCodeChange"
        />

      </y>

    </y>

    <!-- Drag Bar -->
    <y class="w-2 h-screen bg-charcoal-100 shadow-lg cursor-col-resize"
       id="screenResizableDragger"></y>

    <!-- Preview -->
    <y v-bind:class="[isActive ? 'flex-1' : 'flex-1']"
       style=""
       id="result"></y>

  </y>
</template>

<script>
  import MyEditor from "../components/editor";
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
    <!-- Responsive Screen Indicator -->\n\
    <y debug="screen" class="m-1"></y>\n\n\
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

      // Query the element
      const resizer = document.getElementById("screenResizableDragger");
      const leftSide = resizer.previousElementSibling;
      const rightSide = resizer.nextElementSibling;

      // The current position of mouse
      let x = 0;
      let y = 0;

      // Width of left side
      let leftWidth = 0;

      // Handle the mousedown event
      // that's triggered when user drags the resizer
      const mouseDownHandler = function (e) {
        // Get the current mouse position
        x = e.clientX;
        y = e.clientY;
        leftWidth = leftSide.getBoundingClientRect().width;

        // Attach the listeners to `document`
        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);
      };

      // Attach the handler
      resizer.addEventListener("mousedown", mouseDownHandler);

      const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - x;
        const dy = e.clientY - y;

        const newLeftWidth =
          ((leftWidth + dx) * 100) /
          resizer.parentNode.getBoundingClientRect().width;
        leftSide.style.width = `${newLeftWidth}%`;

        resizer.style.cursor = "col-resize";

        leftSide.style.userSelect = "none";
        leftSide.style.pointerEvents = "none";

        rightSide.style.userSelect = "none";
        rightSide.style.pointerEvents = "none";
      };

      const mouseUpHandler = function () {
        resizer.style.removeProperty("cursor");
        document.body.style.removeProperty("cursor");

        leftSide.style.removeProperty("user-select");
        leftSide.style.removeProperty("pointer-events");

        rightSide.style.removeProperty("user-select");
        rightSide.style.removeProperty("pointer-events");

        // Remove the handlers of `mousemove` and `mouseup`
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
        document.initEditor();
      };
    },
    methods: {
      runCode() {
        let t = '<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"><style>' + this.cssCodes + '</style></head><body>' + this.htmlCodes + '</body><script>' + this.javascriptCodes + '<\/script></html>';
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
