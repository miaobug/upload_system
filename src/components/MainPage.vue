<template>
  <div class="">
    <HeaderDiv></HeaderDiv>
    <div class="div">
      <NavBar></NavBar>
    </div>
    <div class="div">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderDiv from './Header';
import NavBar from './NavBar';

export default {
  name: 'mainPage',
  components: {
    HeaderDiv,
    NavBar,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>

</style>
