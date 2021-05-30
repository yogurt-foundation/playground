<template>
  <y
    class="h-cus-985"
    ref="container"
    id="container"
  >
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
      theme: {
        type: String,
        default: function () {
          return "vs"; // default light theme
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
        self.$refs.container.innerHTML = "";
        self.monacoEditor = editor.create(self.$refs.container, {
          value: self.codesCopy || self.codes,
          // settings
          language: self.language,
          theme: self.theme,
          accessibilitySupport: "auto",
          autoIndent: true,
          automaticLayout: true,
          codeLens: true,
          colorDecorators: true,
          cursorStyle: "line",
          disableLayerHinting: true,
          emptySelectionClipboard: false,
          enableSplitViewResizing: false,
          folding: true,
          foldingHighlight: true,
          foldingStrategy: "indentation",
          fontSize: 13,
          glyphMargin: true,
          lineNumbers: "on",
          lineNumbersMinChars: 2,
          minimap: { enabled: false },
          quickSuggestions: { "other": true, "comments": true, "strings": true },
          quickSuggestionsDelay: 500,
          readOnly: false,
          renderWhitespace: true,
          roundedSelection: true,
          scrollBeyondLastLine: true,
          selectionClipboard: false,
          selectOnLineNumbers: true,
          showFoldingControls: "always",
          tabCompletion: "on",
          useTabStops: false,
          wordWrap: "on",
          wordWrapMinified: true,
          wrappingIndent: "indent",
        });
        self.monacoEditor.onDidChangeModelContent(function (event) {
          self.codesCopy = self.monacoEditor.getValue();
          self.$emit("onCodeChange", self.monacoEditor.getValue(), event);
        });
        window.addEventListener("resize", function () {
          self.initEditor();
        });
        let app = document.getElementById('app');
        app.addEventListener('onresize', function(){
          self.initEditor();
        });
      },
    },
  };
</script>


<style scoped>
  .h-cus-985 { /* fix editor height */
    height: 98.5vh;
  }
</style>