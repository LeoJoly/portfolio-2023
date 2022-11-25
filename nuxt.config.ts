const env = process.env

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

  i18n: {
    baseUrl: env.NUXT_PUBLIC_URL,
    defaultLocale: 'en',
    langDir: 'content',
    lazy: true,
    locales: [
      { code: 'en', iso: 'en-us', file: 'en-US.json' }
    ],
    vueI18n: {
      fallbackLocale: 'en',
      legacy: false,
      locale: 'en'
    }
  },

  modules: [
    '@nuxtjs/i18n'
    // 'nuxt-svgo'
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
