<template>
  <div class="container">
    <Button v-show="!editing" @click="editing = true" type="primary" icon="plus-round">添加体裁</Button>
    <Input v-show="editing" v-model="type" placeholder="输入体裁名称" id="input"></Input>
    <Button v-show="editing" type="ghost" @click="addType">确定</Button>

    <div id="type-list">
      <div id="list-title">体裁列表</div>
      <div class="list-item" v-for="(item, index) in typeList">
        <span class="col1 dib">{{index+1}}</span>
        <span class="col2 dib">{{item}}</span>
        <span class="col3 dib" @click="deleteType(index)">删除</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
//  name: 'setType',
  components: {
  },
  data() {
    return {
      editing: false,
      type: '',
      typeList: ['说明文', '议论文', '记叙文'],
    };
  },
  methods: {
    addType() {
      if (this.type !== '') {
//          TODO request
        this.typeList.push(this.type);
        this.editing = false;
      }
    },
    deleteType(index) {
//          TODO request
      this.typeList.splice(index, 1);
    },
  },
};
</script>

<style scoped>
  .container {
    margin: 40px;
    display: block;
  }
  #input {
    width: 160px;
    margin-right: 20px;
  }
  #type-list {
    margin-top: 40px;
  }
  #list-title {
    font-size: 18px;
  }
  .list-item {
    margin: 10px 0;
    font-size: 16px;
  }
  .col1 {
    width: 40px;
  }
  .col2 {
    width: 160px;
  }
  .col3 {
    margin-left: 100px;
    cursor: pointer;
    color: dodgerblue;
  }
</style>
