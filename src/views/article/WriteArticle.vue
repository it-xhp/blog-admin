<template>
  <div class="form-list-wrapper">
    <el-card shadow="always">
      <el-form id="title-input" :rules="rules" :model="acticle">
        <el-form-item prop="title">
          <el-input v-model="acticle.title" placeholder="请输入文章标题" maxlength="15" />
        </el-form-item>
      </el-form>
      <markdown />
      <div id="submit-btns">
        <el-button type="primary" @click="toSaveOther">发布</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown'

export default {
  name: 'Form',
  components: { Markdown },
  data() {
    return {
      acticle: {
        title: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入文章标题', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    toSaveOther() {
      console.log(this.$refs.md.d_render)
    }
  }
}
</script>

<style lang="less">
.form-list-wrapper {
  .el-card {
    padding-top: 5px;
  }
  #submit-btns {
    text-align: right;
    margin: 10px 0px;
  }
  #title-input {
    margin: 0 0 10px 0;
  }
}
</style>
