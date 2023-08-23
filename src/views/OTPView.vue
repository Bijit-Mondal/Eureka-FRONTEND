<template>
    <div class="otp">
        <OTPComponent/>
    </div>
</template>
<script setup>
import OTPComponent from '@/components/OTP/OTPComponent.vue';
</script>
<style lang="stylus" scoped>
.otp
  margin-top: 95px;
  display: flex;
  align-items: center;
  height: calc(100vh - 235px);
  justify-content: center;
</style>