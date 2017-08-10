<template>
  <div class="container">
    <div class="left dib">
      1
    </div>
    <div class="middle dib">
      2
    </div>
    <div class="right dib">
      3
    </div>
  </div>
</template>

<script>
export default {
  name: 'stagePassage',
  components: {
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style scoped>
.container {
  text-align: center;
}
.left {
  width: 200px;
}
.middle {
  width: 600px;
}
.right {
  width: 200px;
}
</style>
