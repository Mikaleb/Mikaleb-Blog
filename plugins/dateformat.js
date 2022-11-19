import Vue from 'vue'

Vue.filter('dateformat', (value) => {
  if (!value) return ''
  return new Date(value).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})
