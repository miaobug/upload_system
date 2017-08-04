<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import('Normalize.css');

export default {
  name: 'app',
};
</script>


<style>
@import "assets/css/global.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
