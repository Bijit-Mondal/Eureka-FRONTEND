<template>
    <div class="skeleton-component">
      <div class="skeleton-header"></div>
      <div class="skeleton-content">
        <div class="skeleton-image"></div>
        <div class="skeleton-text"></div>
        <div class="skeleton-input"></div>
        <div class="skeleton-button"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        team: ''
      };
    }
  }
  </script>
  
  <style lang="stylus" scoped>
  .skeleton-component
    display flex
    flex-direction column
    align-items center
    justify-content center
    min-height 200px
    background-color #fff
  
  .skeleton-header
    height 40px
    width 50%
    background-color #000
    margin-bottom 20px
    opacity 0
    animation skeleton-fade-in 1s ease-in-out forwards
  
  .skeleton-content
    display flex
    flex-direction column
    align-items center
    opacity 0
    animation skeleton-fade-in 1s ease-in-out forwards
  
  .skeleton-image
    width 200px
    height 200px
    background-color #000
    border-radius 4px
    margin-bottom 20px
  
  .skeleton-text
    width 300px
    height 16px
    background-color #000
    margin-bottom 20px
  
  .skeleton-input
    width 200px
    height 40px
    background-color #000
    margin-bottom 20px
  
  .skeleton-button
    width 200px
    height 40px
    background-color #000
  
  @keyframes skeleton-fade-in
    0%
      opacity 0
    100%
      opacity 1
  </style>
  