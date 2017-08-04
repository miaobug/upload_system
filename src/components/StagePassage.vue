<template>
  <div class="container">
    <div class="div">
      <NavBar></NavBar>
    </div>
    <div class="div"></div>
  </div>
</template>

<script>
import NavBar from './NavBar';

export default {
  name: 'teacher',
  components: {
    NavBar,
  },
  data() {
    return {
      pageId: this.$route.params.id,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
}

</style>
