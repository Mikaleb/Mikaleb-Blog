<template>
  <nav class="flex items-center mx-auto my-0 text-gray-600 body-font">
    <div class="flex py-4 text-lg font-bold md:py-0">
      <nuxt-link exact to="/">
        <img src="~assets/logo.svg" class="h-8">
      </nuxt-link>
    </div>
    <ul
      class="flex flex-auto"
    >
      <li class="z-10 inline-block parent">
        <a
          href="#"
          class="flex items-center justify-between p-4 space-x-2 md:inline-flex hover:bg-gray-50"
        >
          <span>Categories 📰</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 pt-1 fill-current"
            viewBox="0 0 24 24"
          >
            <path
              d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
            />
          </svg>
        </a>
        <ul
          class="transition duration-300 bg-white child md:absolute top-full md:w-48 md:shadow-lg md:rounded-b"
        >
          <li>
            <a href="#" class="flex px-4 py-3 hover:bg-gray-50">
              WebDev
            </a>
          </li>
          <li>
            <a href="#" class="flex px-4 py-3 hover:bg-gray-50">
              Webdesign
            </a>
          </li>
          <li>
            <a href="#" class="flex px-4 py-3 hover:bg-gray-50">
              Machine Learning
            </a>
          </li>
        </ul>
      </li>
      <li class="inline-block">
        <a
          href="#"
          class="flex items-center p-4 md:inline-flex hover:bg-gray-50"
        >
          <span>About us</span>
        </a>
      </li>
    </ul>
    <div class="ml-auto text-gray-500 cursor-pointer md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 fill-current"
        viewBox="0 0 24 24"
      >
        <path
          d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
        />
      </svg>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      selectedTag: null,
      activeClass: 'active'
    }
  },
  computed: {
    /* menus() {
      return this.$store.state.menus
    }, */
  },
  created () {
    // if (this.menus.length) this.$store.dispatch('getMenus')
  },
  methods: {}
}
</script>

<style>
@media only screen and (min-width: 768px) {
    .child {
    opacity: 0;
    height: 0;
    overflow: hidden;
    transform: translateY(-10%);
  }
  .parent:hover .child {
    opacity: 1;
    height: auto;
    overflow: none;
    transform: translateY(0);
  }

}
</style>
