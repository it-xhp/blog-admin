<template>
  <div class="table-classic-wrapper">
    <el-card shadow="never" />
    <el-card shadow="never" />
  </div>
</template>

<script>
export default {
  name: 'CurrentUser',
  components: {},
  data() {
    return {}
  },
  created() {
    this.fetchData()
  },
  methods: {
    // 获取数据列表
    fetchData() {
    }
  }
}
</script>

<style lang="less">
.table-classic-wrapper {
  display: flex;
  justify-content: space-between;
  .el-card {
    min-height: 656px;
    min-width: 49%;
  }

  .control-btns {
    margin-bottom: 20px;
  }

  .search-form {
    padding-top: 18px;
    margin-bottom: 15px;
    background-color: #f7f8fb;
  }

  .el-table thead {
    font-weight: 600;

    th {
      background-color: #f2f3f7;
    }
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

  .upload-box,
  .export-data {
    width: 300px;
    margin: 0 auto 30px;
  }

  .upload-box {
    width: 156px;

    .files-upload {
      color: #20a0ff;
    }
  }

  .hints {
    font-size: 12px;
    color: #aaa;
    text-align: center;
  }
}
</style>
