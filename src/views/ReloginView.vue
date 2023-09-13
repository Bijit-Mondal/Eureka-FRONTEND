<template>
    <div class="otp">
        <ReloginComponent/>
    </div>
</template>
<script setup>
import ReloginComponent from '@/components/Login/ReloginComponent.vue';
</script>
<style lang="stylus" scoped>
.otp
  margin-top: 95px;
  display: flex;
  align-items: center;
  height: calc(100vh - 235px);
  justify-content: center;
</style>