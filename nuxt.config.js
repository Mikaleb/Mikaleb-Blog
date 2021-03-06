import axios from 'axios'

const dynamicRoutes = () => {
  const routes = axios
    .get('https://backend.mikaleb.com/wp-json/wp/v2/posts?page=1&per_page=20')
    .then((res) => {
      return res.data.map(post => `/blog/${post.slug}`)
    })
  // console.log(routes)
  return routes
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mikaleb',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mikaleb' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/posts.server.js',
    '~/plugins/tags.server.js',
    '~/plugins/menus.server.js',
    '~/plugins/dateformat.js'
  ],

  generate: {
    routes: dynamicRoutes
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  googleFonts: {
    families: {
      'Open+Sans': true,
      'Space+Grotesk': true
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
