<script setup>
import { computed, reactive } from 'vue';
import Wrapper from '@/components/Wrapper.vue';

const post = reactive({
    title: '',
    body: ''
});

const invalidForm = computed(() => {
  return post.title === '' || post.body === '';
})
</script>

<template>
    <Wrapper>
        <form>
            <h3>Add a New Post</h3>
            <div>
                <label>📝 Post Title</label>
                <input type="text" v-model="post.title" placeholder="Enter your post title here..." />
            </div>
            <div>
                <label>✍️ Post Content</label>
                <textarea rows="5" v-model="post.body"></textarea>
            </div>
            <div>
                <button :disabled="invalidForm">🚀 Upload</button>
            </div>
        </form>
    </Wrapper>
</template>


<style lang="scss" scoped>
.wrapper {
  max-width: 500px !important;
}
  form {
    /* Remove background, border-radius, and box-shadow */
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
        border-radius: 2cap;
        font-size: 1rem;
        background-color: #fafafa;
        transition: border-color 0.3s;

        &:focus {
          border-color: #007bff;
          outline: none;
          background-color: #fff;
        }
      }

      button {
        display: block;
        margin: 0 auto;
        padding: 0.75rem 2rem;
        background-color: #007bff;
        color: #fff;
        font-size: 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
          background-color: #0056b3;
        }
      }
      button:disabled {
        background-color: #29d89e;
        cursor: not-allowed;
      }
    }
  }
</style>