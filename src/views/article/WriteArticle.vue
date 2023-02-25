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
    <!-- 新增/编辑 弹出栏 -->
    <el-dialog
      title="编辑"
      :visible.sync="formVisible"
      width="30%"
      class="dialog-form"
      :before-close="handleClose"
    >
      <el-form
        ref="dialogForm"
        :model="dialogForm"
        :rules="formRules"
        label-width="100px"
      >
        <el-form-item label="姓名：" prop="name">
          <el-input v-model="dialogForm.name" />
        </el-form-item>
        <el-form-item label="手机：" prop="phone">
          <el-input v-model="dialogForm.phone" />
        </el-form-item>
        <el-form-item label="婚姻状况：" prop="married">
          <el-select v-model="dialogForm.married">
            <el-option :value="0" label="单身" />
            <el-option :value="1" label="未婚" />
            <el-option :value="2" label="已婚" />
            <el-option :value="3" label="离异" />
          </el-select>
        </el-form-item>
        <el-form-item label="爱好：" prop="hobby">
          <el-checkbox-group v-model="dialogForm.hobby">
            <el-checkbox label="羽毛球" name="hobby" />
            <el-checkbox label="乒乓球" name="hobby" />
            <el-checkbox label="篮球" name="hobby" />
            <el-checkbox label="排球" name="hobby" />
            <el-checkbox label="网球" name="hobby" />
            <el-checkbox label="旱冰" name="hobby" />
            <el-checkbox label="滑雪" name="hobby" />
            <el-checkbox label="跳高" name="hobby" />
            <el-checkbox label="冲浪" name="hobby" />
          </el-checkbox-group>
        </el-form-item>
        <div class="footer-item">
          <el-button @click="cancleForm">取 消</el-button>
          <el-button type="primary" :disabled="isSubmit" @click="submitForm('dialogForm')">确 定</el-button>
        </div>
      </el-form>
    </el-dialog>
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
      },
      formVisible: false,
      dialogForm: {
        name: '',
        phone: '',
        married: '',
        hobby: []
      },
      // 防止多次连续提交表单
      isSubmit: false,
      formRules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    toSaveOther() {
      this.formVisible = true
    },
    handleClose() {
      this.formVisible = false
      this.$refs.dialogForm.resetFields()
    },
    cancleForm() {
      this.formVisible = false
    },
    // 新增/编辑表单确认提交
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 此处添加 新增/编辑数据的接口 新增成功后调用fetchData方法更新列表
          // 先 this.isSubmit = true 接口返回成功后 再 this.isSubmit = false
          this.formVisible = false
        } else {
          this.isSubmit = false
          return false
        }
      })
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
  .dialog-form {
    .el-input {
      width: 380px;
    }
    .footer-item {
      margin-top: 50px;
      text-align: right;
    }
  }
}
</style>
