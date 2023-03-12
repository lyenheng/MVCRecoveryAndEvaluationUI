<template>
  <div class="function-evaluation">
    功能性评估:{{ JSON.stringify(functionalityResult) }}
  </div>
</template>

<script>
export default {
  props: ["functionalityResult"],
};
</script>

<style></style>
