<template>
  <div>
    <h1>THIS IS TEST 2</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();
    console.log('TEST 1 ROUTER', router.getRoutes());
  },
});
</script>

<style>
</style>
