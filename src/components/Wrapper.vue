<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<style lang ="scss" scoped>
.wrapper {
  max-width: 550px;
  margin: 40px auto;
  padding: 30px;
  background: linear-gradient(135deg, #cecd91 0%, #ce5f96 100%);
  border-radius: 25px;
  box-shadow: 0 4px 20px rgba(26, 23, 23, 0.08);

}
</style>