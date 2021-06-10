<template>
  <y class="relative p-10 h-screen flex justify-center items-center pattern ripple-lg text-gray-100 bg-gray-300">

    <y class="z-50 max-w-3xl p-24 flex flex-col justify-center items-center">

      <img
        class="opacity-75 h-16 w-auto object-fit object-center overflow-hidden animation roll-in-left duration-800"
        src="assets/image/logo_full.svg"
        alt="Yogurt CSS"
      >

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

      <y class="pb-4 text-gray-700 text-center animation roll-in-left duration-800">

        <y class="pb-2 text-lg font-bold ">
          Official Documentation
        </y>

        <y class="flex flex-row flex-wrap justify-center items-center">
          <y
            v-for='item in official'
            :key='item.title'
          >
            <a
              class="text-gray-600 text-sm (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
              :href='item.url'
              target="_self"
              rel="noopener"
              :title='item.title'
            >
              {{ item.title }}
            </a>
            <span class="mx-2 text-gray-500">|</span>
          </y>
        </y>

      </y>

      <y class="pb-4 text-gray-700 text-center animation roll-in-left duration-800">

        <y class="pb-2 text-lg font-bold ">
          Features
        </y>

        <y class="flex flex-row flex-wrap justify-center items-center">
          <y
            v-for='item in features'
            :key='item.title'
          >
            <a
              class="text-gray-600 text-sm (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
              :href='item.url'
              target="_self"
              rel="noopener"
              :title='item.title'
            >
              {{ item.title }}
            </a>
            <span class="mx-2 text-gray-500">|</span>
          </y>
        </y>

      </y>

      <y class="pb-4 text-gray-700 text-center animation roll-in-left duration-800">

        <y class="pb-2 text-lg font-bold ">
          What's Next?
        </y>

        <y class="flex flex-row flex-wrap justify-center items-center">
          <y
            v-for='item in whatsnext'
            :key='item.title'
          >
            <a
              class="text-gray-600 text-sm (hover)text-orange-600 (focus)text-orange-600 (hover)underline (focus)underline"
              :href='item.url'
              target="_self"
              rel="noopener"
              :title='item.title'
            >
              {{ item.title }}
            </a>
            <span class="mx-2 text-gray-500">|</span>
          </y>
        </y>

      </y>

      <y class="text-gray-500 text-sm font-mono text-center">
        Enjoy then!
      </y>

      <y class="absolute right-4 flex flex-gap-3 flex-col justify-center items-center animation fade-in duration-2000">
        <a
          v-for='item in networks'
          :key='item.title'
          :href='item.url'
          target="_blank"
          rel="noopener"
          :title='item.title'
        >
          <img
            class="opacity-25 (hover)opacity-100 h-6 w-auto object-fit object-center overflow-hidden transition duration-200 ease-in-out"
            :src='item.icon'
          >
        </a>
      </y>

    </y>

  </y>
</template>


<script>
export default {
  data() {
    return {
      official: [
        { title: 'Getting Started', url: 'https://yogurtcss.netlify.app/getting-started/' },
        { title: 'Installation', url: 'https://yogurtcss.netlify.app/installation/' },
        { title: 'Utility Map', url: 'https://yogurtcss.netlify.app/utility-map/' },
      ],
      features: [
        { title: 'Breakpoints', url: 'https://yogurtcss.netlify.app/responsive/' },
        { title: 'Dark/Light Mode', url: 'https://yogurtcss.netlify.app/getting-started-themes/' },
        { title: 'Variants', url: 'https://yogurtcss.netlify.app/pseudo-class-variants/' },
        { title: 'Palettes', url: 'https://yogurtcss.netlify.app/getting-started-palette/' },
        { title: 'Gradient', url: 'https://yogurtcss.netlify.app/getting-started-gradient/' },
        { title: 'Custom Gradient', url: 'https://yogurtcss.netlify.app/background-gradient/' },
        { title: 'Animations', url: 'https://yogurtcss.netlify.app/getting-started-animations/' },
        { title: 'Filters', url: 'https://yogurtcss.netlify.app/getting-started-filters/' },
        { title: 'Patterns', url: 'https://yogurtcss.netlify.app/getting-started-patterns/' },
        { title: 'Fluids', url: 'https://yogurtcss.netlify.app/getting-started-fluids/' },
        { title: 'Orientation', url: 'https://yogurtcss.netlify.app/getting-started-orientation' },
      ],
      whatsnext: [
        { title: 'Utility', url: 'https://yogurtcss.netlify.app/utility/' },
        { title: 'Responsive', url: 'https://yogurtcss.netlify.app/responsive/' },
        { title: 'Pseudo-Class Variants', url: 'https://yogurtcss.netlify.app/pseudo-class-variants/' },
        { title: 'Extract Utility Classes', url: 'https://yogurtcss.netlify.app/extract-utility-classes/' },
        { title: 'Import Framework', url: 'https://yogurtcss.netlify.app/import-framework/' },
        { title: 'Create Empty Project', url: 'https://yogurtcss.netlify.app/create-empty-project/' },
        { title: 'Refactoring UI', url: 'https://yogurtcss.netlify.app/refactoring-ui/' },
        { title: 'File Size Control', url: 'https://yogurtcss.netlify.app/file-size-control/' },
        { title: 'Customize Utilities', url: 'https://yogurtcss.netlify.app/customize-utilities/' },
        { title: 'Plugin API', url: 'https://yogurtcss.netlify.app/plugin-api/' },
        { title: 'Debug', url: 'https://yogurtcss.netlify.app/debug/' },
      ],
      networks: [
        { title: 'Discord', url: 'https://discord.gg/A62YjNR', icon: 'assets/image/discord.svg' },
        { title: 'Twitter', url: 'https://twitter.com/yogurtcss', icon: 'assets/image/twitter.svg' },
        { title: 'Github', url: 'https://github.com/yogurt-foundation', icon: 'assets/image/github.svg' }
      ]
    }
  }
}
</script>

