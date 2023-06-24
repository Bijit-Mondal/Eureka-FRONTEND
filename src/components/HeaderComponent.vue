<template>
  <div class="fixed-div" style="display: flex; border-bottom: 1px solid #000; background: linear-gradient(to right, #e91a43, #FF4081); opacity: 0.8;">
    <div style="display: flex; width: 75%;">
      <div style="display: flex; flex: 1; justify-content: flex-start; align-items: center; margin: 10px;">
        <router-link to="/">
          <vs-avatar size="70px" src="https://bijit.xyz/cockpit-master/storage/uploads/2023/06/24/logo_uid_64967492a4ab1.png"/>
        </router-link>
      </div>
      <div style="display: flex; flex: 2; justify-content: center; align-items: center;">
        <span class="anurati logo">EUREKA</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeItem: 0
    };
  }
}
</script>
<style lang="stylus" scoped>
.fixed-div
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  border-bottom: 1px solid #000;
  background: linear-gradient(to right, #e91a43, #FF4081);
  opacity: 0.8;
</style>