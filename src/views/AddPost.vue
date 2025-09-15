<script setup>
import Wrapper from '@/components/Wrapper.vue';
</script>

<template>
  <Wrapper>
    <form>
      <h3>Add a New Post</h3>
      <div>
        <label>Post Title</label>
        <input type="text" placeholder="What's your post title?" />
      </div>
      <div>
        <label>Post Content</label>
        <textarea rows="5" placeholder="Share your thoughts here..."></textarea>
      </div>
      <div>
        <button type="submit"> PUBLISH</button>
      </div>
    </form>
  </Wrapper>
</template>

<style lang="scss" scoped>
form {
  background: #088dc2;
  padding: 2rem 2.5rem;
  width: 100%;
  max-width: 550px;
  margin: 2rem auto;
  border-radius: 2rem;
  box-shadow: 0 8px 25px rgba(36, 31, 31, 0.08);
  font-family: 'Kanit', sans-serif;

  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.6rem;
    font-weight: 600;
    color: #fff;
    text-align: center;
    letter-spacing: 0.5px;
  }

  div {
    margin-bottom: 1.5rem;

    label {
      display: block;
      margin-bottom: 0.6rem;
      font-weight: 500;
      color: #e0f7fa;
      font-size: 0.95rem;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.9rem 1rem;
      border: 1px solid #07afe2;
      border-radius: 1rem;
      font-size: 1rem;
      background-color: #ebf1ee;
      font-family: 'Kanit', sans-serif;
      transition: all 0.3s ease;

      &:focus {
        border-color: #121032;
        background-color: #fff;
        outline: none;
        box-shadow: 0 0 0 4px rgba(8, 141, 194, 0.15);
      }

      &::placeholder {
        color: #aaa;
        font-size: 0.9rem;
      }
    }

    button {
      width: 100%;
      padding: 0.9rem;
      background: linear-gradient(135deg, #088dc2, #4b132f);
      color: #fff;
      font-size: 1.05rem;
      font-weight: 600;
      border: none;
      border-radius: 1rem;
      cursor: pointer;
      font-family: 'Kanit', sans-serif;
      transition: transform 0.2s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 15px rgba(8, 141, 194, 0.2);
      }

      &:active {
        transform: translateY(0);
        box-shadow: none;
      }
    }
  }
}
</style>