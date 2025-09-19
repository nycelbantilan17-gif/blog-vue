import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts-store', {
  state() {
    return {
      posts: [],
      loading: true,
      errorMessage: ''
    }
  },

  getters: {
    // ✅ Sorted by latest date
    sorted(state) {
      return [...state.posts].sort((a, b) => new Date(b.date) - new Date(a.date))
    },

    // ✅ Filter saved posts only
    save(state) {
      return state.posts
        .filter((p) => p.saved)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    }
  },

  actions: {
    // ✅ Get posts
    async getPosts() {
      try {
        const res = await fetch('http://localhost:3000/posts')
        const data = await res.json()

        this.posts = data
        this.errorMessage = '' // clear error kung ok
      } catch (error) {
        this.errorMessage = 'Unable to fetch posts.'
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    // ✅ Add post
    addPost(post) {
      const newPost = {
        id: this.posts.length + 1,
        title: post.title,
        body: post.body,
        name: 'Nycel Bantilan',
        date: new Date().toLocaleDateString(),
        saved: false
      }

      this.posts.push(newPost)

      fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
      }).catch((error) => console.error(error))
    },

    // ✅ Delete post with confirmation
    deletePost(id) {
      const confirmed = window.confirm('Are you sure you want to delete this post?')

      if (!confirmed) {
        return // kung "No", dili siya ma-delete
      }

      this.posts = this.posts.filter((p) => p.id !== id)

      fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE'
      }).catch((error) => console.error(error))
    },

    // ✅ Save/Unsave post
    savedPost(id) {
      const post = this.posts.find((p) => p.id === id)
      if (!post) return

      post.saved = !post.saved

      fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ saved: post.saved })
      }).catch((error) => console.error(error))
    }
  }
})
