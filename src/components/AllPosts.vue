<script setup>
import { usePostsStore } from '@/stores/posts'
import { onMounted, ref } from 'vue'

const postStore = usePostsStore()

// ✅ notification state
const toastMessage = ref('')
const showToast = ref(false)

// ✅ show toast helper
const showToastMessage = (msg) => {
  toastMessage.value = msg
  showToast.value = true
  setTimeout(() => (showToast.value = false), 3000)
}

// ✅ Fetch posts once
onMounted(() => {
  postStore.getPosts()
})

// ✅ Handle delete
const handleDelete = (id) => {
  const confirmed = window.confirm('Are you sure you want to delete this post?')
  if (!confirmed) return

  postStore.deletePost(id)
  showToastMessage('🗑 Post deleted successfully!')
}

// ✅ Handle save/unsave
const handleSave = (id) => {
  postStore.savedPost(id)
  const post = postStore.posts.find((p) => p.id === id)
  showToastMessage(post.saved ? '✅ Post saved!' : '💾 Post unsaved!')
}
</script>

<template>
  <div class="all-posts">
    <h2>All Posts</h2>

    <!-- ✅ Error -->
    <div v-if="postStore.errorMessage" class="error-box">
      ⚠️ {{ postStore.errorMessage }}
    </div>

    <!-- ✅ Loading -->
    <div v-else-if="postStore.loading">
      ⏳ Loading posts...
    </div>

    <!-- ✅ Posts -->
    <div v-else>
      <div
        v-for="post in postStore.sorted"
        :key="post.id"
        class="post-card"
      >
        <div class="header">
          <small>✍️ {{ post.name }} • {{ post.date }}</small>
          <div>
            <button class="del" @click="handleDelete(post.id)">🗑 Delete</button>
            <button class="save" @click="handleSave(post.id)">
              {{ post.saved ? '✅ Saved' : '💾 Save' }}
            </button>
          </div>
        </div>
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>

    <!-- ✅ Toast Notification -->
    <div v-if="showToast" class="toast">
      {{ toastMessage }}
    </div>
  </div>
</template>

<style scoped>
.all-posts {
  max-width: 650px;
  margin: 0 auto;
  padding: 1rem;
}

.error-box {
  background: #ffe6e6;
  border: 1px solid #ffb3b3;
  padding: 12px;
  color: #cc0000;
  margin-bottom: 1rem;
  border-radius: 6px;
  font-weight: 500;
}

.post-card {
  padding: 1.2rem;
  margin-bottom: 1rem;
  background: #fdfdfd;
  border-radius: 10px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .8rem;
}

.header small {
  color: #555;
}

button {
  border: none;
  padding: 6px 12px;
  margin-left: 6px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s ease;
}

button.del {
  background: #ffdddd;
  color: #a40000;
}

button.del:hover {
  background: #ffb3b3;
}

button.save {
  background: #ddffdd;
  color: #006600;
}

button.save:hover {
  background: #a8e6a3;
}

/* ✅ Toast styles */
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333;
  color: #fff;
  padding: 12px 20px;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  animation: fadein 0.3s, fadeout 0.3s 2.7s;
}

@keyframes fadein {
  from { opacity: 0; transform: translate(-50%, -60%); }
  to { opacity: 1; transform: translate(-50%, -50%); }
}
@keyframes fadeout {
  from { opacity: 1; transform: translate(-50%, -50%); }
  to { opacity: 0; transform: translate(-50%, -40%); }
}
</style>
