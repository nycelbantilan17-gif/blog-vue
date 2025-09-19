<template>
  <div class="post-card">
    <div class="header">
      <small>
        Written by {{ post.name }} on {{ post.date }}
      </small>
      <div class="actions">
        <button @click="$emit('delete')" class="delete">🗑</button>
        <button @click="$emit('save')" class="save">
          {{ post.saved ? '✅' : '🔖' }}
        </button>
      </div>
    </div>

    <h3>{{ post.title }}</h3>
    <!-- apply class here -->
    <p class="post-body">{{ post.body }}</p>
  </div>
</template>

<script setup>
defineProps({
  post: Object
})
</script>

<style scoped lang="scss">
.post-card {
  background: #fff;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  line-height: 1.4;
}

.post-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.4rem;
}

.post-body {
  font-size: 1.15rem;
  color: #444;
  line-height: 1.7;
  white-space: pre-line;       
  word-wrap: break-word;        
  overflow-wrap: break-word;    
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;
}

.actions {
  display: flex;
  gap: 0.3rem;
}

button {
  background: #f5f5f5;
  border: none;
  border-radius: 6px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background 0.2s ease;
}

button:hover {
  background: #e0e0e0;
}
</style>
