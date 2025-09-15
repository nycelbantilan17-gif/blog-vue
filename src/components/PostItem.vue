<script setup>
// Removed unused imports
// import PostItem from '@/components/PostItem.vue';
// import Wrapper from '@/components/Wrapper.vue';

const post = [
  {
    "userId": 1,
    "id": 1,
    "name": "Juan Dela Cruz",
    "date": "2025-09-03",
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "name": "Maria Santos",
    "date": "2025-09-02",
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "name": "Pedro Reyes",
    "date": "2025-09-01",
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "name": "Ana Lopez",
    "date": "2025-08-30",
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  }
]
</script>

<template>
  <main>
    <div v-for="item in post" :key="item.id">
      <div class="wrapper">
        <div class="header">
          <span>Written by {{ item.name }} on {{ item.date }}</span>
          <div>
            <button class="del materials-icon">delete</button>
            <button class="save materials-icon">bookmark_border</button>
          </div>
        </div>
        <h2>{{ item.title }}</h2>
        <p>{{ item.body }}</p>
      </div>
    </div>
  </main>
</template> 

<style>
/* 🔘 Buttons inside circle */
.materials-icon {
  font-family: "Material Icons";
  font-size: 20px;
  border: none;
  background: #eae4e4;        /* white circle background */
  color: #f3eded;             /* default icon color */
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;      /* makes it circle */
  box-shadow: 0 2px 6px rgba(0,0,0,0.15); /* subtle shadow */
  transition: background 0.2s, transform 0.2s;
}

/* Hover effect */
.materials-icon:hover {
  background: #0d0c0c;   /* slightly darker circle */
  transform: scale(1.1);
}

/* ❌ Delete button (red icon) */
.del {
  color: #e57169;
}

/* 🔖 Bookmark button (blue icon) */
.save {
  color: #e1505c;
}
</style>

<style>
/* 🌈 Page background */
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #e3f2fd, #f4f6f8);
  font-family: "Segoe UI", Arial, sans-serif;
}

/* 📦 Card container */
.wrapper {
  max-width: 700px;
  margin: 40px auto;
  padding: 24px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.12);
}

/* 📌 Header bar */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: -24px -24px 16px -24px;
  padding: 12px 24px;
  background: #787c7e;
  border-bottom: 1px solid #d0e3ff;
  color: #444;
  font-size: 14px;
  border-radius: 16px 16px 0 0;
}

/* 🔘 Buttons */
.materials-icon {
  font-family: "Material Icons";
  font-size: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;
  transition: background 0.2s, transform 0.2s;
}
.materials-icon:hover {
  background: rgba(0, 0, 0, 0.05);
  transform: scale(1.1);
}
.del {
  color: #e53935;
}
.save {
  color: #22ae89;
}

/* 📝 Title and Body styles with background */
.title-box {
  background: #bbdefb; /* light blue */
  color: #0d47a1;      /* dark blue text */
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 26px;
  margin-bottom: 16px;
}

.body-box {
  background: #f1f8e9; /* light green */
  color: #33691e;      /* dark green text */
  padding: 16px;
  border-radius: 8px;
  line-height: 1.8;
  font-size: 16px;
}
</style>