<template>
  <div class="container">
    <div class="left dib">
      <span>阶梯阅读 / </span>
      <span style="color: dodgerblue">查看/编辑短文</span>
      <div>
        <!--doc: http://vanthink-ued.github.io/vue-core-image-upload/index.html -->
        <vue-core-image-upload
          style="height: 120px;"
          crop="local"
          crop-ratio="2:1"
          @imageuploaded="imageuploaded"
          :max-file-size="maxSize"
          url="http://101.198.151.190/api/upload.php" >
          <img :src="imgSrc" alt="" style="width: 200px;">
        </vue-core-image-upload>
      </div>

      <div id="optionDiv">
        <Radio-group v-model="editType" type="button" style="width: 200px;  margin: 20px 0 100px 0;" @on-change="add">
          <Radio label="正文标题" style="width: 140px" ></Radio>
          <Radio label="正文内容" style="width: 140px" ></Radio>
          <Radio label="图片" style="width: 140px" ></Radio>
          <!--upload img-->
          <vue-core-image-upload
            style="height: 120px;"
            crop="local"
            crop-ratio="2:1"
            @imageuploaded="imageuploaded2"
            :max-file-size="maxSize"
            url="http://101.198.151.190/api/upload.php"
            v-show="0"
            id="uploadImg2"
          >
          </vue-core-image-upload>
        </Radio-group>

        <Button type="primary" style="width: 140px">保存</Button>
      </div>

    </div>
    <div class="middle dib">
      <h1 contenteditable="true">{{passage.title}}</h1>
      <div style="display: flex" id="metaDiv1">
        <Input v-model="passage.src" placeholder="输入文章来源" style="width: 140px"></Input>
        <div style="flex: 1"></div>
        <Button type="ghost" style="width: 100px; margin-right: 10px" :disabled="passage.isPinyin" @click="addPinyin">添加拼音</Button>
        <Button type="ghost" style="width: 100px" :disabled="!passage.isPinyin" @click="rmPinyin">取消拼音</Button>
      </div>

      <div id="metaDiv2">
        <Input v-model="passage.length" placeholder="输入短文字数" style="width: 140px; margin-right: 10px"></Input>
        <Input v-model="passage.er" placeholder="输入ER值" style="width: 140px"></Input>
        <div style="flex: 1"></div>
        <Select v-model="passage.grade" style="width:160px; margin-right: 10px">
          <Option v-for="item in gradeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="passage.type" style="width:100px">
          <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>

      <div v-for="(item, index) in passage.content" @click="editIndex = index">
        <h2 v-if="item.type == 'title'" contenteditable="true" v-on:keyup="changed(index, $event)" v-on:blur="changed(index, $event)" v-on:paste="changed(index, $event)" v-on:delete="changed(index, $event)" v-on:focus="changed(index, $event)">
          {{ item.text}}
        </h2>
        <div v-if="item.type == 'paragraph'" contenteditable="true" v-on:keyup="changed(index, $event)" v-on:blur="changed(index, $event)" v-on:paste="changed(index, $event)" v-on:delete="changed(index, $event)" v-on:focus="changed(index, $event)">
          {{ item.text}}
        </div>
        <div v-if="item.type == 'img'">
          <img :src="item.src" alt="">
        </div>
      </div>
    </div>
    <div class="right dib">
      3
    </div>
  </div>
</template>

<script>
  import VueCoreImageUpload from 'vue-core-image-upload';

  const imgSrc = require('../../assets/img/pageImg.jpg');

  export default {
    name: 'stagePassage',
    components: {
      'vue-core-image-upload': VueCoreImageUpload,
    },
    data() {
      return {
        id: this.$route.params.id,
        imgSrc,
        maxSize: 5242880,
        editType: undefined,
        passage: {
          title: '杏仁吃多了真的会中毒么?',
          scr: '',
          isPinyin: false,
          length: undefined,
          er: undefined,
          grade: -1,
          type: 0,
          editIndex: -1,
          content: [
            {
              type: 'title',
              text: '一、杏仁会不会引起中毒？',
            },
          ],
        },
        gradeList: [
          {
            value: -1,
            label: '选择合适年级',
          },
          {
            value: 1,
            label: '一年级',
          },
          {
            value: 2,
            label: '二年级',
          },
          {
            value: 3,
            label: '一年级',
          },
          {
            value: 4,
            label: '四年级',
          },
          {
            value: 5,
            label: '五年级',
          },
          {
            value: 6,
            label: '六年级',
          },
        ],
        typeList: [
          {
            value: 0,
            label: '说明文',
          },
          {
            value: 1,
            label: '议论文',
          },
          {
            value: 2,
            label: '记叙文',
          },
        ],
      };
    },
    methods: {
      add(type) {
        const map = {
          正文标题: 'title',
          正文内容: 'paragraph',
          图片: 'img',
        };
        const key = map[type];
        this.editIndex = this.editIndex + 1;
        const item = {
          type: key,
          text: '',
        };
        if (key !== 'img') {
          this.passage.content.splice(this.editIndex, 0, item);
        } else {
          document.getElementById('uploadImg2').fireEvent('click');
        }
        this.editType = undefined;
      },
      changed(index, event) {
//        console.log(index, event);
        if (event.key === 'Tab') {
          event.stopPropagation();
        }
        this.editIndex = index;
        this.passage.content[index].text = event.target.innerText;
      },
      addPinyin() {
        this.passage.isPinyin = true;
      },
      rmPinyin() {
        this.passage.isPinyin = false;
      },
      imageuploaded(res) {
        if (res.errcode === 0) {
          this.imgSrc = res.data.src;
        }
      },
      imageuploaded2(res) {
        return res.data.src;
      },
    },
  };
</script>

<style scoped>
.container {
  text-align: center;
  height: 1000px;
}
.left {
  width: 200px;
  vertical-align: top;
  /*position: fixed;*/
}
.middle {
  width: 600px;
  margin: 0 20px 0 20px;
  vertical-align: top;
  text-align: left;
}
.right {
  width: 200px;
  vertical-align: top;
}
#optionDiv {
  background-color: #eee;
  height: 300px;
}
#metaDiv2 {
  margin: 8px 0;
  padding-bottom: 6px;
  border-bottom: 1px solid #999;
  display: flex;
}
</style>
