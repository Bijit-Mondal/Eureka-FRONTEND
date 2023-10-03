<template>
  <Suspense>
    <template #default>
      <div class="home">
        <!-- <div id="hint">
          Abol Tabol
        </div> -->
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
import { useAuthStore } from '@/store/auth';
import { useLevelStore } from '@/store/level';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
const router = useRouter();

onMounted(()=>{
  const authStore = useAuthStore();
  const levelStore = useLevelStore();
  if(authStore.accessToken){
    router.push(levelStore.nextURI);
  }
})
</script>
<style lang="stylus" scoped>

.home
  margin-top: 95px;
  display: flex;
  align-items: center;
  height: calc(100vh - 235px);
  justify-content: center;

</style>