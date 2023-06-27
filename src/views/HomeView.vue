<template>
  <Suspense>
    <template #default>
      <div class="home">
        <LoginComponent />
      </div>
    </template>
    <template #fallback>
        <span>Loading...</span>
    </template>
  </Suspense>
</template>
<script setup>
import LoginComponent from '@/components/Login/LoginComponent.vue'

</script>
<style lang="stylus" scoped>

.home
  margin-top: 95px;
  display: flex;
  align-items: center;
  height: calc(100vh - 235px);
  justify-content: center;

</style>