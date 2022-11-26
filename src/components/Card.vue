<template>
  <div class="card p-15">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 2px 2px 4px rgb(239, 237, 237);
  background-color: #fff;

  height: 100%;
  width: 100%;
}
.title {
  font-size: 12px;
  line-height: 20px;
}
</style>
