// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/apollo', ['@nuxtjs/google-fonts', {
    families: {
      'Lato': true,
      download: true,
      inject: true
    }
  }],
  ],
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  colorMode: {
    preference: 'light',
    storageKey: 'na-color-scheme',
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://sl-sandbox.mybigcommerce.com/graphql",
        httpLinkOptions: {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjaWQiOjEsImNvcnMiOlsiaHR0cHM6Ly9zbGlnaHRpbmcudmVyY2VsLmFwcCIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCJdLCJlYXQiOjE4ODU2MzUxNzYsImlhdCI6MTY5MDk1NTYzMiwiaXNzIjoiQkMiLCJzaWQiOjEwMDI5Njk1NjksInN1YiI6IjcxNTdnb3ZsOGZyZXprdnVoY3libHlhNmRkZHVoeXgiLCJzdWJfdHlwZSI6MiwidG9rZW5fdHlwZSI6MX0.e8ky6FI2ZEzNmJu0jIE2hd7jFkqPAmfsSJta8uXfrtAiqHpwabJcOD2HpQmD7IwvLfY2BZmvlTjej3AeasKmBA",
          },
        },
      },
    },
  },
  routeRules: {
    '/': { redirect: '/led-flat-panels-choose-your-options/' }
  },
  plugins: [{ src: '~/plugins/font-awesome.js', mode: 'client' }],
});