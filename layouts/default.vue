<template>
  <div class="">
    <header class="sticky top-0 z-40 w-full mx-auto lg:z-50 max-w-8xl bg-mkGray">
      <Hmenu />
    </header>
    <div class="w-full mx-auto">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Hmenu from '~/components/design/Hmenu.vue'

export default {
  components: {
    Hmenu,
  },
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.individual h3 {
  margin: 2em 0 25px;
}

h1 {
  margin-bottom: 30px;
  text-align: center;
}

img {
  width: 100%;
}

video {
  width: 100%;
  margin: 25px 0;
}

small {
  color: #9d5615;
}

pre,
code {
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  background: #eee;
  border-radius: 4px;
}

pre {
  padding: 8px 10px;
}

code {
  padding: 2px 0;
  line-height: 1.5;
}

p {
  margin: 15px 0 20px;
}
</style>
