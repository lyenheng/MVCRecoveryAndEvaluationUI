<template>
  <div class="card">
    <slot> </slot>
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
</style>
