<script setup>
defineProps({
    post: {
        type: Object,
        required: true
    }
})
</script>

<template>
<div class="post-card">
  <div class="header">
    <span>Written by {{ post.name }} on {{ post.date }}</span>
    <div>
      <button class="del material-icons">delete</button>
      <button class="save material-icons">bookmark_border</button>
    </div>
  </div>
  <h1>{{ post.title }}</h1>
  <p>{{ post.body }}</p>
</div>
</template>

<style lang="scss" scoped>
.post-card {
  border: 1px solid #e0e0e0; // Neutral, light gray border
  border-radius: 1rem;
  background: #fff;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 16px rgba(36, 31, 31, 0.06);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  span {
    color: #888;
    font-size: 0.95rem;
  }

  button {
    background: #f5f5f5;
    border: none;
    border-radius: 6px;
    padding: 8px 16px;
    margin-left: 8px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background 0.2s;

    &.del {
      color: #d32f2f;
    }
    &.save {
      color: #388e3c;
    }
    &:hover {
      background: #e0e0e0;
    }
  }
}

h1 {
  font-size: 2.2rem;
  margin-bottom: 16px;
  color: #222;
}

p {
  font-size: 1.15rem;
  color: #444;
  line-height: 1.7;
}
</style>
