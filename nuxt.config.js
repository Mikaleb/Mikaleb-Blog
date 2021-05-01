import fs from 'fs'
import path from 'path'
import axios from 'axios'

const ENV_DEV = false

// Development Environment
let port = 3000
let host = 'localhost'
let https = false

// Production Environment
if (ENV_DEV === false) {
  port = 22 // make sure this port is open on your server you can do that via WHM or talk to you hosting company
  host = 'https://mikaleb.com'
  https = {
    key: fs.readFileSync(
      path.resolve(__dirname, './../../ssl/keys/<ssl-key-file-name>.key')
    ),
    cert: fs.readFileSync(
      path.resolve(__dirname, './../../ssl/certs/<ssl-crt-file-name>.crt')
    ),
  }
}

const dynamicRoutes = () => {
  const routes = axios
    .get('https://backend.mikaleb.com/wp-json/wp/v2/posts?page=1&per_page=20')
    .then((res) => {
      return res.data.map((post) => `/blog/${post.slug}`)
    })
  // console.log(routes)
  return routes
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mikaleb' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/posts.server.js',
    '~/plugins/tags.server.js',
    '~/plugins/dateformat.js',
  ],

  generate: {
    routes: dynamicRoutes,
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    port,
    host,
    timing: false,
    https,
  },
}
