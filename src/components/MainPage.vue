<template>
  <div>
    <HeaderDiv></HeaderDiv>
    <div class="container">
      <NavBar></NavBar>
      <div class="childView">
        <router-view></router-view>
      </div>
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
.container {
  display: flex;
}
.childView {
  flex: 1;
}
</style>
