<template>
  <p>{{ message }}</p>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const message = ref("");
    message.value = "aaaaaa";
    return {
      message,
    };
  },
});
</script>
<style scoped lang="scss">
p {
  color: green;
}
</style>