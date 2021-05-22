<template>
  <y class="h-screen"
     ref="container"
     id="container">
  </y>
</template>

<script>
  import { editor } from "monaco-editor";
  export default {
    props: {
      codes: {
        type: String,
        default: function () {
          return "";
        },
      },
      language: {
        type: String,
        default: function () {
          return "html";
        },
      },
      editorOptions: {
        type: Object,
        default: function () {
          return {
            selectOnLineNumbers: true,
            roundedSelection: false,
            readOnly: false,
            cursorStyle: 'line',
            lineNumbers: 'on',
            automaticLayout: true,
            glyphMargin: true,
            useTabStops: false,
            fontSize: 14,
            autoIndent: true,
            renderWhitespace: 'all',
            wordWrap: 'on',
            minimap: {
              enabled: false
            },
            autoClosingBrackets: 'always',
          };
        },
      },
    },
    data() {
      return {
        codesCopy: null,
      };
    },
    mounted() {
      this.initEditor();
    },
    methods: {
      initEditor() {
        let self = this;
        self.$refs.container.innerHTML =
          '<y class="p-3 w-full bg-charcoal-100"><y class="flex justify-between items-center"><y><a class="" href="https://yogurtcss.netlify.app" target="_blank" rel="noopener"><img class="h-auto w-32 object-cover object-center overflow-hidden invert-1 opacity-75 (hover)opacity-100 transition duration-300 ease-in-out" src="assets/image/logo_full.svg" title="Yogurt"></a></y><a class="text-2xl text-gray-600 (hover)text-gray-400 font-semibold transition duration-300 ease-in-out" href="/playground" target="_self" rel="noopener" title="Refresh">⭮</a></y>';
        self.monacoEditor = editor.create(self.$refs.container, {
          value: self.codesCopy || self.codes,
          language: self.language,
          theme: "vs-dark",
          editorOptions: {
            selectOnLineNumbers: true,
            roundedSelection: false,
            readOnly: false,
            cursorStyle: 'line',
            lineNumbers: 'on',
            automaticLayout: true,
            glyphMargin: true,
            useTabStops: false,
            fontSize: 14,
            autoIndent: true,
            renderWhitespace: 'all',
            wordWrap: 'on',
            minimap: {
              enabled: false
            },
            autoClosingBrackets: 'always',
          }
        });
        self.monacoEditor.onDidChangeModelContent(function (event) {
          self.codesCopy = self.monacoEditor.getValue();
          self.$emit("onCodeChange", self.monacoEditor.getValue(), event);
        });
        window.addEventListener("resize", function () {
          console.log("try to resize Editor");
          self.initEditor();
        });
      },
    },
  };
</script>

