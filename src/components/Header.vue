<template>
  <div class="header">
    <div class="dib" id="logo">
      <img src="../assets/img/logo.png" alt="">
    </div>
    <div id="white"></div>
    <div class="dib" id="name">{{userEmail}}</div>
    <div class="dib" id="logout">
      <Button type="primary">退出</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'teacher',
  data() {
    return {
      userEmail: 'zhaoyun@koalareading.com',
    };
  },
};
</script>

<style scoped>
  .header {
    height: 80px;
    background-color: #ccc;
    display: flex;
    align-items: center;
  }
  #logo {
    text-align: center;
    width: 150px;
  }
  #logo img {
    width: 70px;
  }
  #white {
    flex: 1;
  }
  #name {
    width: 300px;
    font-size: 18px;
    color: white;
  }
  #logout {
    width: 200px;
  }

</style>
