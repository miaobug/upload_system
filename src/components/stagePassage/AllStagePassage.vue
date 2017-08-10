<template>
  <div class="container">
    <div class="msg">短文发布成功</div>

    <Table :columns="columns" :data="data" style="margin: 20px; text-align: center"></Table>
  </div>
</template>

<script>
export default {
  name: 'allStagePassage',
  components: {
  },
  data() {
    return {
      columns: [
        {
          title: '短文序号',
          key: 'no',
          width: 90,
        },
        {
          title: '短文题目',
          key: 'title',
          width: 90,
        },
        {
          title: '适读年级',
          key: 'grade',
          width: 90,
        },
        {
          title: '体裁',
          key: 'type',
          width: 80,
        },
        {
          title: '难度(ER)',
          key: 'erLevel',
          width: 90,
        },
        {
          title: '短文字数',
          key: 'length',
          width: 90,
        },
        {
          title: '发布人员账号',
          key: 'author',
          width: 200,
          render: (h, params) => h('div',
            {
              style: {
                textAlign: 'center',
              },
            },
            [
              h('div', params.row.author),
              h('div', params.row.date),
              h('div', params.row.time),
            ],
          ),
        },
        {
          title: '编辑',
          key: 'edit',
//          width: 150,
          align: 'center',
          render: (h, params) => h('Button', {
            props: {
              type: 'ghost',
              size: 'small',
            },
            style: {
              marginRight: '5px',
            },
            on: {
              click: () => {
                window.open(`/stagePassage/${params.row.no}`, '_self');
              },
            },
          }, '查看短文'),
        },
      ],
      data: [
        {
          no: 1,
          title: '短文',
          grade: '一年级',
          type: '记叙文',
          erLevel: 800,
          length: 1000,
          author: 'zhaoyun@koalareading.com',
          date: '2017-05-15',
          time: '16:08',
        },
        {
          no: 3,
          title: '2短文',
          grade: '二年级',
          type: '议论文',
          erLevel: 8100,
          length: 2000,
          author: 'aaaaaayun@koalareading.com',
          date: '2013-05-15',
          time: '6:09',
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: block;
  text-align: center;
}
.msg {
  margin-top: 100px;
  font-size: 16px;
}
</style>
