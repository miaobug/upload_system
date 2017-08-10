<template>
  <div class="container">
    <div id="info">
      此部分的短文包括：<br/>
      1、录入到系统中暂未上线的短文<br/>
      2、其他信息项未填完整的短文<br/>
      <br/>
      注意：<br/>
      1、首先去【设定体裁】再进行短文的上传或者创建<br/>
      2、只有信息项全部填写完整的短文才可发布成功<br/>
    </div>

    <div id="buttonDiv">
      <div style="flex: 1">
        <Button size="large" type="primary">批量上传短文文件</Button>
        <div style="color: dodgerblue">请确保上传的短文文件为Excel.xls格式</div>
      </div>
      <div style="flex: 1">
        <Button size="large" type="primary" @click="createPassage">创建单篇短文</Button>
      </div>
      <div style="flex: 1; text-align: center">
        <Button size="large" type="ghost" icon="ios-cloud-download-outline"> 下载短文/试题模板</Button>
        <div>短文上传的格式要求请参见《下载模板》</div>
      </div>
    </div>

    <Table :columns="columns" :data="data"></Table>

    <div style="text-align: center; margin: 60px">
      <Button @click="modal = true" size="large" type="ghost" icon="ios-cloud-download-outline"> 短文发布</Button>
      <Modal
        width="360px"
        v-model="modal"
        :loading=true
        @on-ok="publishPassages">
        <p slot="header" style="color: dodgerblue;text-align:center">
          <span>发布确认</span>
        </p>
        <div style="text-align:center">
          <p>确认短文内容无误并将短文发送到线上？</p>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
export default {
  name: 'uploadStagePassage',
  components: {
  },
  methods: {
    createPassage() {
      window.open('/404', '_self');
    },
    publishPassages() {
      setTimeout(() => {
        this.modal = false;
      }, 1000);
//      发布短文
    },
  },
  data() {
    return {
      modal: false,
      columns: [
        {
          title: '短文序号',
          key: 'no',
          width: 90,
          render: (h, params) =>
            h('div', `第${params.index + 1}篇`),
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
          render: (h, params) => h('div', {
            style: {
              textAlign: 'center',
              color: 'dodgerblue',
            },
          }, params.row.author),
        },
        {
          title: '编辑',
          key: 'edit',
          align: 'center',
          editable: false,
          render: (h, params) =>
            h('div', [
              h('Button', {
                props: {
                  type: 'ghost',
                  size: 'small',
                },
                style: {
                  marginRight: '10px',
                },
                on: {
                  click: () => {
                    this.data[params.index].editable = true;
                  },
                },
              }, '添加试题'),
              h('Button', {
                props: {
                  type: 'primary',
                  disabled: !this.data[params.index].editable,
                  size: 'small',
                },
                on: {
                  click: () => {
                    // eslint-disable-next-line
                    window.open(`/stagePassage/${params.row.no}`, '_self');
                  },
                },
              }, '编辑短文'),
            ]),
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
          editable: false,
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
          editable: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: block;
  margin: 20px;
}
#buttonDiv {
  display: flex;
  margin: 60px 0 30px 0;
  font-size: 14px;
}
#buttonDiv Button {
  margin-bottom: 20px;
}
</style>
