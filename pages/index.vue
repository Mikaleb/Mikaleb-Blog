<template>
  <div class="flex pt-8 mx-auto mt-8 max-w-8xl">
    <main id="posts">
      <article-index />
    </main>
    <aside class="flex w-2/6" id="sidebar">
      <div id="side-element">
        <h2 class="tags-title">
          Tags
        </h2>
        <div class="tags-list">
          <ul>
            <li
              v-for="tag in tags"
              :key="tag.id"
              :class="[tag.id === selectedTag ? activeClass : '' ]"
              @click="updateTag(tag)"
            >
              <a>{{ tag.name }}</a>
              <span v-if="tag.id === selectedTag">✕</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import ArticleIndex from '@/components/article/index'

export default {
  components: {
    ArticleIndex
  },
  data () {
    return {
      selectedTag: null,
      activeClass: 'active'
    }
  },
  computed: {
    tags () {
      return this.$store.state.tags
    }
  },
  methods: {
    updateTag (tag) {
      if (!this.selectedTag) {
        this.selectedTag = tag.id
      } else {
        this.selectedTag = null
      }
    }
  }
}
</script>

<style lang="scss">
#posts {
  @apply flex flex-grow;
}

h2 {
  margin-bottom: 2em;
}

a,
a:active,
a:visited {
  text-decoration: none;
  color: black;
}

#sidebar {
  background:#f7f4e3;
}

a.readmore {
  display: inline-block;
  font-size: 11px;
  text-transform: uppercase;
  padding: 5px 15px;
  letter-spacing: 2px;
  position: relative;
  color: #000;
  font-weight: 700;
  font-family: 'Open Sans', serif;
  border: 1px solid #ccc;
  background: #fff;
}

.tags-title {
  border: none;
  text-transform: capitalize;
  letter-spacing: 0;
  font-size: 1.2rem;
  padding: 15px;
  margin: 0 35px;
  position: relative;
}

.tags-list {
  padding: 70px 25px 25px;
  margin-top: -65px;
}

.post {
  border-bottom: 1px solid rgb(223, 222, 222);
  margin-bottom: 2em;
  padding-bottom: 2em;
  color: #444;

  h3 {
    margin-bottom: 0.5em;
    font-size: 26px;
  }
}

.tags-list ul {
  padding-left: 0;
}

.tags-list li {
  font-family: 'Open Sans', serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 6px 15px;
  margin: 0 0 10px 10px;
  display: inline-block;
  font-size: 0.7rem !important;
  border: 1px solid #000;
  transition: all 0.3s;
  outline: none;
  font-weight: normal;
  cursor: pointer;
  background: #fff;
  a {
    color: #000;
  }
}

.active {
  border: 1px solid #d44119;
  background-color: #fae091 !important;
}

.slide {
  position: relative;
  background: transparent;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
  z-index: 1;
  backface-visibility: hidden;
  perspective: 1000px;
  transform: translateZ(0);
  cursor: pointer;

  &:hover {
    color: #fff;
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    background: #000;
    transition: right 0.3s ease;
    z-index: -1;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: 108%;
    backface-visibility: hidden;
  }
  &:hover::before {
    right: -1px;
  }
}
</style>
