<template>
  <div class="maintain-evaluation">
    可维护性评估:{{ JSON.stringify(maintainabilityResult) }}
  </div>
</template>

<script>
export default {
  props: ["maintainabilityResult"],
};
</script>

<style></style>
