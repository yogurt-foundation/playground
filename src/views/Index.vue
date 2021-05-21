<template>
  <y style="display: flex">
    <el-tabs
      v-model="activeName"
      type="border-card"
      style="flex: 1">

      <el-tab-pane name="html" :lazy="true">
        <MyEditor
          :language="'html'"
          :codes="htmlCodes"
          @onCodeChange="htmlOnCodeChange"
        />
      </el-tab-pane>

    </el-tabs>

    <y
      style="height:100vh; flex:1"
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
        javascriptCodes:
          "let loadStyle = function(url) { return new Promise((resolve, reject) => { let link = document.createElement('link'); link.type = 'text/css'; link.rel = 'stylesheet'; link.onload = () => { resolve(); console.log('style has loaded'); }; link.href = url; let headScript = document.querySelector('script'); headScript.parentNode.insertBefore(link, headScript); }); }; loadStyle('https://yogurtcss.netlify.app/yogurt-1.1.6_solidcore.min.css')",
        cssCodes: "",
        htmlEditor: null,
        jsEditor: null,
        cssEditor: null,
      };
    },
    mounted() {
      this.runCode();
    },
    methods: {
      runCode() {
        let t =
          "<html><head><style type='text/css'>" +
          this.cssCodes +
          "</style></head><body>" +
          this.htmlCodes +
          "</body><script type='text/javascript'>" +
          this.javascriptCodes +
          "<\/script></html>";
        let result = document.getElementById("result");
        result.innerHTML = "";
        let iframe = document.createElement("iframe");
        iframe.name = "result";
        iframe.id = "resultIframe";
        iframe.sandbox =
          "allow-forms allow-popups allow-scripts allow-same-origin allow-modals";
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
    },
  };
</script>


<style scoped>
/deep/ .el-tabs__nav .is-disabled {
  cursor: pointer;
}
</style>
