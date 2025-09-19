<script setup>
import { ref, onMounted } from 'vue'
import { usePostsStore } from '@/stores/posts'
import PostItem from '@/components/PostItem.vue'
import Wrapper from '@/components/Wrapper.vue'

// ✅ Store
const postStore = usePostsStore()

// ✅ State
const showSaved = ref('all')

// ✅ Toggle between all posts and saved posts
const postFilter = () => {
  showSaved.value = showSaved.value === 'all' ? 'saved' : 'all'
}

// ✅ Fetch posts on mount
onMounted(() => {
  postStore.getPosts()
})

// ✅ Methods for delete and save
const deletePost = (id) => {
  postStore.deletePost(id)
}

const savePost = (id) => {
  postStore.savedPost(id)
}
</script>

<template>
  <div class="header">
    <div>
      <h4>{{ showSaved === 'all' ? 'All Posts' : 'Saved Posts' }}</h4>
      <span v-show="postStore.loading" class="material-icons">cached</span>
    </div>

    <button @click="postFilter">
      {{ showSaved === 'all' ? 'Show Saved Posts' : 'Show All Posts' }}
    </button>
  </div>

  <!-- ✅ Error Message -->
  <div v-if="postStore.errorMessage" class="error">
    ⚠️ {{ postStore.errorMessage }}
  </div>

  <!-- ✅ All posts -->
  <div v-if="showSaved === 'all'">
    <div v-if="postStore.sorted.length === 0">
      <p>No posts yet. 🚀 Add your first post!</p>
    </div>
    <div v-else v-for="post in postStore.sorted" :key="post.id">
      <Wrapper>
        <PostItem
          :post="post"
          @delete="deletePost(post.id)"
          @save="savePost(post.id)"
        />
      </Wrapper>
    </div>
  </div>

  <!-- ✅ Saved posts -->
  <div v-if="showSaved === 'saved'">
    <div v-if="postStore.save.length === 0">
      <p>No saved posts yet.</p>
    </div>
    <div v-else v-for="post in postStore.save" :key="post.id">
      <Wrapper>
        <PostItem
          :post="post"
          @delete="deletePost(post.id)"
          @save="savePost(post.id)"
        />
      </Wrapper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  position: sticky;
  top: 56px;
  background: #fff;
  z-index: 10;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h4 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #333;
      margin: 0;
    }

    .material-icons {
      animation: rotate 1.2s linear infinite;
      font-size: 1.5rem;
      color: #4f8cff;
    }
  }

  button {
    background: #4f8cff;
    color: #fff;
    border: none;
    border-radius: 1cap;
    padding: 0.5rem 1.2rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #a53fa8;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

.error {
  background-color: #fee2e2;
  color: #b91c1c;
  border: 1px solid #fca5a5;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(252, 165, 165, 0.08);
}
</style>
