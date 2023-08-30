<template>
    <div class="winner-list">
        <WinnerList/>
    </div>
</template>
<script setup>
import WinnerList from '@/components/Winner/WinnerListComponent.vue'
</script>
<style lang="stylus" scoped>
.winner-list
  margin-top: 95px;
  display:flex;
  width 100%
  align-items: center;
  height: calc(100vh - 235px);
  justify-content: center;
</style>