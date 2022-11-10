import Vue from 'vue'

Vue.filter('dateformat', (value) => {
  console.log('🚀 ~ file: dateformat.js ~ line 4 ~ Vue.filter ~ value', value)
  if (!value) return ''
  return new Date(value).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})
