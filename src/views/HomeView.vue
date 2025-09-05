<script setup>
const posts = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
]
</script>

<template>
  <div class="wrapper">
    <div v-for="post in posts" :key="post.id" class="post">
      <div class="header-navbar">
        <span>Written by NAME</span>
        <div class="icons">
          <button class="del material-icons">delete</button>
          <button class="save material-icons">bookmark_border</button>
        </div>
      </div>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 700px;
  margin: 0 auto;
  padding: 2em;
}
.post {
  border: 1px solid #ddd;
  padding: 1em;
  margin-bottom: 1em;
  border-radius: 8px;
}
.header-navbar {
  background: #b2f7b8; /* light green */
  padding: 0.7em 1em;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* push icons to the other side */
  margin-bottom: 1em;
}
.header-navbar span {
  color: #145a1f; /* dark green for contrast */
  font-weight: bold;
}
.icons {
  display: flex;
  gap: 2em;
}
.icons .del,
.icons .save {
  color: #145a1f;
  font-weight: bold;
  cursor: pointer;
}
</style>