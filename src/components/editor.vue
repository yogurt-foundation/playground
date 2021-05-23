<template>

  <y class="h-screen bg-orange-600"
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
        }
      },
      language: {
        type: String,
        default: function () {
          return "html";
        }
      },
      theme: {
        type: String,
        default: function () {
          return "vs-dark";
        }
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
            autoClosingBrackets: 'always'
          };
        }
      }
    },
    data() {
      return {
        codesCopy: null
      };
    },
    mounted() {
      this.initEditor();
    },
    methods: {
      initEditor() {
        let self = this;
        self.$refs.container.innerHTML = '';
        self.monacoEditor = editor.create(self.$refs.container, {
          value: self.codesCopy || self.codes,
          language: self.language,
          theme: self.theme,
          editorOptions: self.editorOptions
        });
        self.monacoEditor.onDidChangeModelContent(function (event) {
          self.codesCopy = self.monacoEditor.getValue();
          self.$emit("onCodeChange", self.monacoEditor.getValue(), event);
        });
        window.addEventListener("resize", function () {
          self.initEditor();
        });
      }
    }
  };
</script>

