<template>
  <Suspense>
    <template #default>
      <HeaderComponent/>
    </template>
    <template #fallback>
      <HeaderSkeleton/>
    </template>
  </Suspense>

  <router-view/>

  <FooterComponent/>

</template>
<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import HeaderSkeleton from '@/components/HeaderSkeleton.vue'
import FooterComponent from './components/FooterComponent.vue';
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
