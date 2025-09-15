<script setup>
import PostItem from '@/components/PostItem.vue';
import Wrapper from '@/components/Wrapper.vue';

const posts = [
  {
    "userId": 1,
    "id": 1,
    "name": "Nycel Bantilan",
    "date": "2025-09-03",
    "title": "To be or not to be responsible: Choosing to avoid responsibility",
    "body": "Because there are obligations,\npeople avoid consequences by escaping duties,\nsome blame others instead of doing their part,\nwe all face situations like this, yet someone must still do the work."
  },
  {
    "userId": 1,
    "id": 2,
    "name": "Nycel Bantilan",
    "date": "2025-09-03",
    "title": "Who is this person?",
    "body": "In the timeline of life,\nsome follow blindly, others suffer in silence,\nthere are those who fake kindness but only hurt people,\nwhy do some people just cause problems and never offer solutions?"
  },
  {
    "userId": 1,
    "id": 3,
    "name": "Nycel Bantilan",
    "date": "2025-09-03",
    "title": "Complaints and burdens: Always falling on me",
    "body": "Even when I'm fair, I'm still blamed,\npeople expect perfection and always want more,\nwhy am I the one accused or pressured?\nI carry hate, work hard, and still it's not enough."
  },
  {
    "userId": 1,
    "id": 4,
    "name": "Nycel Bantilan",
    "date": "2025-09-03",
    "title": "Why does everything fall on me?",
    "body": "I’m often forced to accept tasks others reject,\nI try to be responsible, but get blamed when things go wrong,\npeople don’t understand the effort it takes,\nand yet, they expect me to fix everything."
  },
  {
    "userId": 1,
    "id": 5,
    "name": "Nycel Bantilan",
    "date": "2025-09-03",
    "title": "Frustration and anger",
    "body": "I’m tired of apologizing and doing everything,\nothers take advantage while I stay quiet,\nwhy do I always have to fix their mistakes?\nThe pain and responsibility are too much."
  },
  {
    "userId": 1,
    "id": 6,
    "name": "Nycel Bantilan",
    "date": "2025-09-03",
    "title": "Suffering in silence",
    "body": "My body is exhausted and my mind tired,\nwe try to stay strong even when hurting inside,\nwe get blamed and misunderstood,\nbut still we carry on with the pain and the work."
  },
  {
    "userId": 1,
    "id": 7,
    "name": "Nycel Bantilan",
    "date": "2025-09-03",
    "title": "Why is it always difficult?",
    "body": "Life keeps throwing problems our way,\nsome people act like they care, but don’t really help,\nand when trouble comes, they disappear,\nwe’re left to deal with it alone again."
  },
  {
    "userId": 1,
    "id": 8,
    "name": "Nycel Bantilan",
    "date": "2025-09-03",
    "title": "Pain behind the smile",
    "body": "We try to look strong on the outside,\nbut our hearts are tired from carrying pain,\nevery day we hide what we feel,\nand yet, life keeps challenging us more."
  },
  {
    "userId": 1,
    "id": 9,
    "name": "Nycel Bantilan",
    "date": "2025-09-03",
    "title": "Legal problems, temporary fixes, and frustrations",
    "body": "People know what’s right, but still ignore it,\nwe're promised change but get the same results,\ntemporary solutions just delay real progress,\nand we suffer the consequences."
  },
  {
    "userId": 1,
    "id": 10,
    "name": "Nycel Bantilan",
    "date": "2025-09-03",
    "title": "Annoyances and mistakes we endure",
    "body": "We deal with poor service and wrong decisions,\nwe're forced to stay silent when things go bad,\nwe sit through the errors,\nand no one is held accountable."
  },
  {
    "userId": 2,
    "id": 11,
    "name": "Arnil Gerodiaz",
    "date": "2025-09-03",
    "title": "Recognizing and praising the good",
    "body": "Some people still care and do what’s right,\nwe see kindness and honesty in them,\nthey help even when no one’s watching,\nand that gives us hope for the community."
  },
  {
    "userId": 2,
    "id": 12,
    "name": "Arnil Gerodiaz",
    "date": "2025-09-03",
    "title": "Old problems still not solved",
    "body": "These issues have been around for a long time,\nand yet, no real solution has been done,\nit’s frustrating when no one listens,\neven when the problems are clear and serious."
  }
]
</script>

<template>
  <main>
    <div v-for="post in posts" :key="post.id">
      <Wrapper>
        <PostItem :post="post"/>
      </Wrapper>
    </div>
  </main>
</template>