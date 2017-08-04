<template>
  <div class="dib">
    <Row>
      <div class="sys-title">短文系统</div>
      <Col span="8">
      <Menu :theme="theme"  v-bind:active-name="selectName" @on-select="select">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            学生端
          </template>
          <Menu-item name="1-1">未上线短文</Menu-item>
          <Menu-item name="1-2">已上线全部短文</Menu-item>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            老师端
          </template>
          <Menu-group title="延伸短文">
            <Menu-item name="2-1">未上线短文</Menu-item>
            <Menu-item name="2-2">已上线全部短文</Menu-item>
            <Menu-item name="2-3">编辑教材信息</Menu-item>
          </Menu-group>
          <Menu-group title="阶梯阅读">
            <Menu-item name="2-4">未上线短文</Menu-item>
            <Menu-item name="2-5">已上线全部短文</Menu-item>
            <Menu-item name="2-6">设定体裁</Menu-item>
          </Menu-group>
        </Submenu>

      </Menu>
      </Col>
    </Row>

    <Row>
      <div class="sys-title">新闻系统</div>
      <Col span="8">
      <Menu :theme="theme"  v-bind:active-name="selectName" @on-select="select">
        <Menu-item name="3">
          <Icon type="ios-paper"></Icon>
          上传新闻
        </Menu-item>
        <Menu-item name="4">
          <Icon type="ios-paper"></Icon>
          全部新闻
        </Menu-item>

      </Menu>
      </Col>
    </Row>

    <Row>
      <div class="sys-title">图书系统</div>
      <Col span="8">
      <Menu :theme="theme" v-bind:active-name="selectName" @on-select="select">
        <Menu-item name="5">
          <Icon type="ios-paper"></Icon>
          上传图书
        </Menu-item>
        <Menu-item name="6">
          <Icon type="ios-paper"></Icon>
          待上线图书
        </Menu-item>

        <Menu-item name="7">
          <Icon type="ios-paper"></Icon>
          已上线图书
        </Menu-item>
      </Menu>
      </Col>
    </Row>
      <!--<Menu :theme="theme2" active-name="1-2" :open-names="['1']">-->
  <!--<div>{{selectName}}1</div>-->
  </div>
</template>

<script>
  import router from '../router';

  const urlMap = {
    '2-4': '/stagePassage/upload',
    '2-5': '/stagePassage/all',
    '2-6': '/stagePassage/settype',
  };
  export default {
    data() {
      return {
        theme: 'light',
        selectName: '',
        tmp: this.$route.path,
      };
    },
    watch: {
      $route(to) {
        Object.keys(urlMap).forEach((key) => {
          if (urlMap[key] === to.path) {
            this.selectName = key;
          }
        });
      },
    },
    methods: {
      select(name) {
        this.selectName = name;
        if (urlMap[name] !== undefined) {
          router.push(urlMap[name]);
        } else {
          router.push('/404');
        }
      },
    },
  };
</script>

<style scoped>
  .sys-title {
    font-size: 16px;
    font-weight: 700;
    margin-left: 10px;
    border-right: 1px solid #ddd;
  }
  div.dib {
    margin-top: 20px;
    margin-left: 20px;
  }
</style>
