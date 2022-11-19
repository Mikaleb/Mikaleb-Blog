import { NuxtState } from '@nuxt/types/app'
import { ActionTree } from 'vuex'
// eslint-disable-next-line camelcase
import { WP_Post } from 'wp-types'
const siteUrl = process.env.NUXT_ENV_WP_URL

export const state = () => ({
  posts: [],
  post: {},
  tags: [],
  menus: {},
})

export type RootState = ReturnType<typeof state>

export const mutations = {
  // eslint-disable-next-line camelcase
  updatePosts: (state: NuxtState, posts: WP_Post[]): any => {
    state.posts = posts
  },
  // eslint-disable-next-line camelcase
  updatePost: (state: NuxtState, post: WP_Post) => {
    state.post = post
  },
  updateTags: (state: NuxtState, tags: any) => {
    state.tags = tags
  },
  updateMenus: (state: NuxtState, menus: any) => {
    state.menus = menus
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async getPosts({ commit }) {
    try {
      let posts = await fetch(
        `${siteUrl}/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1`
      ).then((res) => res.json())

      posts = posts
        .filter((el: { status: string }) => el.status === 'publish')
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
          }: any) => ({
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

    let allTags: any = state.posts.reduce((acc, item: any) => {
      return acc.concat(item.tags)
    }, [])
    allTags = allTags.join()

    try {
      let tags = await fetch(
        `${siteUrl}/wp-json/wp/v2/tags?page=1&per_page=40&include=${allTags}`
      ).then((res) => res.json())

      tags = tags.map(({ id, name }: any) => ({
        id,
        name,
      }))

      commit('updateTags', tags)
    } catch (err) {
      // console.log(err)
    }
  },

  async getMenus({ state, commit }) {
    if (state.menus) {
      return
    }

    try {
      const menus = await fetch(`${siteUrl}/wp-json/wp/v2/menus`).then((res) =>
        res.json()
      )
      commit('updateMenus', menus)
    } catch (err) {
      // console.log(err)
    }
  },

  async getPost({ commit }, slug) {
    try {
      const post = await fetch(
        `${siteUrl}/wp-json/wp/v2/posts?slug=${slug}&_embed=1`
      ).then((res) => res.json())

      if (post.length) commit('updatePost', post[0])
    } catch (err) {
      // console.log(err)
    }
  },
}
