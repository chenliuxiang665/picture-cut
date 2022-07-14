<template>
  <div id="app">
    <PictureWork msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import PictureWork from './components/pictureWork.vue'

export default {
  name: 'App',
  components: {
    PictureWork
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>
