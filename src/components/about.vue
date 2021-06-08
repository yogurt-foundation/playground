<template>
  <y class="relative h-screen flex justify-center items-center pattern ripple-lg text-gray-100 bg-gray-300">

    <y class="z-50 max-w-3xl p-24 flex flex-col justify-center items-center">

      <img
        class="opacity-75 h-16 w-auto object-fit object-center overflow-hidden animation roll-in-left duration-800"
        src="assets/image/logo_full.svg"
        alt="Yogurt CSS">

      <y class="my-4 text-gray-600 text-md font-mono animation roll-in-left duration-800">
        v0.1.5
      </y>

      <y class="pb-6 w-full text-gray-600 text-center animation roll-in-left duration-800">
        <y class="pb-2 text-lg text-gray-700 font-bold">
          Shortcut Keys
        </y>
        <y class="pb-2 flex justify-between items-center">
          <y class="text-xs font-semibold">
            <span class="p-1 border border-gray-500 rounded">Ctrl</span> +
            <span class="p-1 border border-gray-500 rounded">Alt</span> +
            <span class="p-1 border border-gray-500 rounded">M</span>
          </y>
          <y class="mx-4 text-sm">
            Switch between Editor or Preview mode
          </y>
        </y>
        <y class="pb-2 flex justify-between items-center">
          <y class="text-xs font-semibold">
            <span class="p-1 border border-gray-500 rounded">Ctrl</span> +
            <span class="p-1 border border-gray-500 rounded">Alt</span> +
            <span class="p-1 border border-gray-500 rounded">/</span>
          </y>
          <y class="mx-4 text-sm">
            Execute your codes
          </y>
        </y>
        <y class="flex justify-between items-center">
          <y class="text-xs font-semibold">
            <span class="p-1 border border-gray-500 rounded">Ctrl</span> +
            <span class="p-1 border border-gray-500 rounded">Alt</span> +
            <span class="p-1 border border-gray-500 rounded">D</span>
          </y>
          <y class="mx-4 text-sm">
            Reset stored data in the app
          </y>
        </y>
      </y>

      <y class="pb-6 text-gray-700 text-center animation roll-in-left duration-800">
        <y class="pb-2 text-lg font-bold ">
          Official Documentation
        </y>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/getting-started/"
          target="_self"
          rel="noopener">
          Getting Started
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/installation/"
          target="_self"
          rel="noopener">
          Installation
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/utility-map/"
          target="_self"
          rel="noopener">
          Utility Map
        </a>
      </y>

      <y class="pb-6 text-gray-700 text-center animation roll-in-left duration-800">
        <y class="pb-2 text-lg font-bold">
          Features
        </y>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/responsive/"
          target="_self"
          rel="noopener">
          Breakpoints
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/getting-started-themes/"
          target="_self"
          rel="noopener">
          Dark/Light Mode
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/pseudo-class-variants/"
          target="_self"
          rel="noopener">
          Variants
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/getting-started-palette/"
          target="_self"
          rel="noopener">
          Color Palette
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/getting-started-gradient/"
          target="_self"
          rel="noopener">
          Gradient Presets
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/background-gradient/"
          target="_self"
          rel="noopener">
          Custom Gradient
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/getting-started-animations/"
          target="_self"
          rel="noopener">
          Animations
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/getting-started-filters/"
          target="_self"
          rel="noopener">
          Filters
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/getting-started-patterns/"
          target="_self"
          rel="noopener">
          Patterns
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/getting-started-fluids/"
          target="_self"
          rel="noopener">
          Fluids
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/getting-started-orientation"
          target="_self"
          rel="noopener">
          Orientation
        </a>
      </y>

      <y class="text-gray-700 text-center animation roll-in-left duration-800">
        <y class="pb-2 text-lg font-bold">
          What's Next?
        </y>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/utility/"
          target="_self"
          rel="noopener">
          Utility
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/responsive/"
          target="_self"
          rel="noopener">
          Responsive
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/pseudo-class-variants/"
          target="_self"
          rel="noopener">
          Pseudo-Class Variants
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/pseudo-class-variants/"
          target="_self"
          rel="noopener">
          Pseudo-Class Variants
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/extract-utility-classes/"
          target="_self"
          rel="noopener">
          Extract Utility Classes
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/import-framework/"
          target="_self"
          rel="noopener">
          Import Framework
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/create-empty-project/"
          target="_self"
          rel="noopener">
          Create Empty Project
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/refactoring-ui/"
          target="_self"
          rel="noopener">
          Refactoring UI
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/file-size-control/"
          target="_self"
          rel="noopener">
          File Size Control
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/plugin-api/"
          target="_self"
          rel="noopener">
          Plugin API
        </a>
        <span class="mx-2 text-gray-400">|</span>
        <a
          class="text-gray-600 (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
          href="https://yogurtcss.netlify.app/debug/"
          target="_self"
          rel="noopener">
          Debug
        </a>
      </y>

      <y class="pt-10 text-gray-500 text-sm font-mono text-center">
        Enjoy then!
      </y>

      <y class="absolute right-4 flex flex-gap-3 flex-col justify-center items-center animation fade-in duration-2000">
        <a
          href="https://discord.gg/A62YjNR"
          target="_blank"
          rel="noopener"
          title="Discord">
          <img
            class="opacity-25 (hover)opacity-100 h-6 w-auto object-fit object-center overflow-hidden transition duration-200 ease-in-out"
            src="assets/image/discord.svg">
        </a>
        <a
          href="https://twitter.com/yogurtcss"
          target="_blank"
          rel="noopener"
          title="Twitter">
          <img
            class="opacity-25 (hover)opacity-100 h-6 w-auto object-fit object-center overflow-hidden transition duration-200 ease-in-out"
            src="assets/image/twitter.svg">
        </a>
        <a
          href="https://github.com/yogurt-foundation"
          target="_blank"
          rel="noopener"
          title="Github">
          <img
            class="opacity-25 (hover)opacity-100 h-6 w-auto object-fit object-center overflow-hidden transition duration-200 ease-in-out"
            src="assets/image/github.svg">
        </a>
      </y>

    </y>

  </y>
</template>


