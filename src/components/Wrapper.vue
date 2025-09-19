<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  background: linear-gradient(135deg, #e9c46a, #f4a261, #e76f51, #f78da7);
  padding: 0.8rem;            // smaller padding
  border-radius: 12px;        // smaller radius
  max-width: 520px;           // narrower card
  margin: 1rem auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}
</style>
