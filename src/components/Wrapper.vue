<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<style lang ="scss" scoped>
.wrapper {
  max-width: 900px; // Increased width for HomeView
  margin: 40px auto;
  padding: 32px;
  background: linear-gradient(135deg, #2e59aa 60%, #434343 100%);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
}
</style>