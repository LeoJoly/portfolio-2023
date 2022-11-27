// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
      ],
      noscript: [
        { innerHTML: '<div class="ns" style="text-align: center;">This website requires JavaScript.</div>' },
        { innerHTML: '<link rel="stylesheet" href="/noscript.css">' }
      ]
    }
  },
  
  css: [
    '@/styles/main.scss'
  ],

  modules: [
    'nuxt-svgo'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/styles/_plugins/_mq.scss";
            @import "@/styles/_config/_font-styles.scss";
            @import "@/styles/_config/_mixins.scss";
            @import "@/styles/_config/_variables.scss";
          `
        }
      }
    }
  }
})
