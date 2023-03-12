<template>
  <div class="efficiency-evaluation">
    效率评估:{{ JSON.stringify(efficiencyResult) }}
  </div>
</template>

<script>
export default {
  props: ["efficiencyResult"],
};
</script>

<style></style>
