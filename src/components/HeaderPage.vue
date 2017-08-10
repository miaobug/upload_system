<template>
  <div>
    <HeaderDiv></HeaderDiv>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderDiv from './Header';

export default {
  name: 'headerPage',
  components: {
    HeaderDiv,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.container {
}
</style>
