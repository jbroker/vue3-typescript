<template>
  <div>
    <h1>THIS IS TEST 1 {{testState.name }}</h1>
    <button @click="inc()">Clicked {{ testState.clicks }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { testStore } from '../store/test-store';

export default defineComponent({
  setup() {
    const router = useRouter();

    const inc = () => {
      testStore.addClick();
      testStore.getState().clicks = 5;
    };

    console.log('TEST 1 ROUTER', router.getRoutes());

    return {
      testState: testStore.getState(),
      inc,
    };
  },
});
</script>

<style>

</style>
