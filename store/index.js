const siteURL = process.env.NUXT_ENV_WP_URL

export const state = () => ({
  posts: [],
  tags: [],
  menus: {},
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  },
  updateTags: (state, tags) => {
    state.tags = tags
  },
  updateMenus: (state, menus) => {
    state.menus = menus
  },
}

export const actions = {
  async getPosts({ commit }) {
    try {
      let posts = await fetch(
        `${siteURL}/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1`
      ).then((res) => res.json())

      posts = posts
        .filter((el) => el.status === 'publish')
        .map(
          ({
            id,
            slug,
            title,
            excerpt,
            date,
            tags,
            content,
            // eslint-disable-next-line camelcase
            featured_image_src,
          }) => ({
            id,
            slug,
            title,
            excerpt,
            date,
            tags,
            content,
            featured_image_src,
          })
        )

      commit('updatePosts', posts)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  },
  async getTags({ state, commit }) {
    if (state.tags.length) {
      return
    }

    let allTags = state.posts.reduce((acc, item) => {
      return acc.concat(item.tags)
    }, [])
    allTags = allTags.join()

    try {
      let tags = await fetch(
        `${siteURL}/wp-json/wp/v2/tags?page=1&per_page=40&include=${allTags}`
      ).then((res) => res.json())

      tags = tags.map(({ id, name }) => ({
        id,
        name,
      }))

      commit('updateTags', tags)
    } catch (err) {
      // console.log(err)
    }
  },

  async getMenus({ state, commit }) {
    if (state.menus.length) {
      return
    }

    try {
      const menus = await fetch(`${siteURL}/wp-json/wp/v2/menus`).then((res) =>
        res.json()
      )
      commit('updateMenus', menus)
    } catch (err) {
      // console.log(err)
    }
  },
}
