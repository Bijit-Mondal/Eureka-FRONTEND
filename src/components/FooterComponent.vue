<template>
    <div class="fixed-div" style="display: flex; margin-top: 5ch; background: linear-gradient(to right, #FDBCBC, #fff); opacity: 0.8;">
      <div style="display: flex; flex-direction: column; width: 100%;">
        <div style="display: flex; flex: 1; justify-content: center; align-items: center; margin: 10px;">
            <span class="anurati">EUREKA</span>
        </div>
        <div style="display: flex; flex: 2; justify-content: center; align-items: center; margin: 10px;">
            <span class="outfit">All © Reserved by Ramakrishna Mission Vivekananda Centenary College</span>
        </div>
        <div style="display: flex; flex: 2; justify-content: center; align-items: center; margin: 10px;">
            <span class="outfit">Developed with ❤️ by <a class="text-color" style="text-decoration: none !important;" href="https://github.com/Bijit-Mondal">Bijit</a></span>
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
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    display: flex;
    border-bottom: 1px solid #000;
    background: linear-gradient(to right, #e91a43, #FF4081);
    opacity: 0.8;
  </style>