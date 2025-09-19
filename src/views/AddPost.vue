<script setup>
import { reactive } from 'vue'
import { usePostsStore } from '@/stores/posts'
import Wrapper from '@/components/Wrapper.vue'

const postStore = usePostsStore()

const post = reactive({
  title: '',
  body: ''
})

const submit = () => {
  // ✅ Directly add post to store
  postStore.addPost(post)

  // ✅ Reset form after submit
  post.title = ''
  post.body = ''
}
</script>

<template>
  <Wrapper>
    <form @submit.prevent="submit">
      <h3>Add a New Post</h3>
      <div>
        <label>📝 Post Title</label>
        <input type="text" v-model="post.title" placeholder="Enter your post title here..." />
      </div>
      <div>
        <label>✍️ Post Content</label>
        <textarea rows="5" v-model="post.body" placeholder="Enter your post content here..."></textarea>
      </div>
      <div>
        <!-- 🚀 Old version: no validation, always enabled -->
        <button>🚀 Upload</button>
      </div>
    </form>
  </Wrapper>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 500px !important;
}

form {
  padding: 2rem 2.5rem;
  width: 100%;
  max-width: 500px;

  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: #100e20;
  }

  div {
    margin-bottom: 1.2rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: #555;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      font-size: 1rem;
      background-color: #fafafa;
      transition: border-color 0.3s;

      &:focus {
        border-color: #007bff;
        outline: none;
        background-color: #fff;
      }
    }
  }

  button {
    display: block;
    margin: 1.5rem auto 0;
    padding: 0.75rem 2rem;
    background-color: #1daf6b;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s ease;

    &:hover {
      background-color: #46c6ca;
      transform: scale(1.05);
    }
  }
}
</style>
