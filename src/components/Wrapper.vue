<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 550px;
  margin: 2rem auto;
 padding: 2rem 2.5rem;
  background: #088dc2;
  border-radius: 1rem;
  box-shadow: 0 8px 25px rgba(36, 31, 31, 0.08);
  font-family: 'Kanit', sans-serif;
}
</style>