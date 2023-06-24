<template>
    <div class="skeleton-component">
      <div class="skeleton-header"></div>
      <div class="skeleton-content">
        <div class="skeleton-avatar"></div>
        <div class="skeleton-text"></div>
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
  
  <style scoped>
  .skeleton-component {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    background: linear-gradient(to right, #e91a43, #FF4081);
    opacity: 0.8;
  }
  
  .skeleton-header {
    height: 1px;
    width: 50%;
    background-color: #000;
    margin-bottom: 10px;
    opacity: 0;
    animation: skeleton-fade-in 1s ease-in-out forwards;
  }
  
  .skeleton-content {
    display: flex;
    width: 75%;
    opacity: 0;
    animation: skeleton-fade-in 1s ease-in-out forwards;
  }
  
  .skeleton-avatar {
    width: 70px;
    height: 70px;
    background-color: #000;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .skeleton-text {
    flex: 1;
    height: 40px;
    background-color: #000;
  }
  
  @keyframes skeleton-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  </style>
  