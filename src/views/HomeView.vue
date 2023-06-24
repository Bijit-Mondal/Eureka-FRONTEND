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
