const seo = {
  title: 'Léo\'s website',
  description: 'Hey! I\'m Leo, fullstack developer based between Paris and the Swiss Alps.'
}
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: seo.title,
      htmlAttrs: { lang: 'en' },
      meta: [
        // General meta
        { charset: 'utf-8' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'copyright', content: `© Copyright ${ (new Date()).getFullYear() } - Léo Joly` },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'theme-color', content: '#ffffff' },
        { hid: 'description', name: 'description', content: seo.description },
        // OG meta
        { property: 'og:type', hid: 'og:type', content: 'website' },
        { property: 'og:url', hid: 'og:url', content: process.env.NUXT_PUBLIC_URL },
        { property: 'og:title', hid: 'og:title', content: seo.title },
        { property: 'og:site_name', hid: 'og:site_name', content: seo.title },
        { property: 'og:description', hid: 'og:description', content: seo.description },
        { property: 'og:image', hid: 'og:image', content: process.env.NUXT_PUBLIC_URL + '/meta-image.png' },
        { property: 'og:image:type', hid: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', hid: 'og:image:width', content: '1200' },
        { property: 'og:image:height', hid: 'og:image:height', content: '630' },
        // Twitter meta
        { property: 'twitter:card', hid: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', hid: 'twitter:site', content: '@_LeoJoly_' },
        { property: 'twitter:creator', hid: 'twitter:creator', content: '@_LeoJoly_' },
        { property: 'twitter:title', hid: 'twitter:title', content: seo.title },
        { property: 'twitter:description', hid: 'twitter:description', content: seo.description },
        { property: 'twitter:image', hid: 'twitter:image', content: process.env.NUXT_PUBLIC_URL + '/meta-image.png' },
        { property: 'twitter:url', hid: 'twitter:url', content: process.env.NUXT_PUBLIC_URL }
      ],
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
