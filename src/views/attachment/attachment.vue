<template>
  <div class="table-classic-wrapper">
    <el-card shadow="always">
      <!-- 查询栏 -->
      <el-form
        ref="listQuery"
        :inline="true"
        :model="listQuery"
        label-width="90px"
        class="search-form"
      >
        <el-form-item label="关键词" prop="name">
          <el-input v-model="listQuery.name" placeholder="" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm('listQuery')">重置</el-button>
        </el-form-item>
      </el-form>
      <!-- 操作栏 -->
      <div class="control-btns">
        <el-button type="primary" icon="blog-shangchuan">上传</el-button>
      </div>
      <!-- 表格栏 -->
      <el-row :gutter="12">
        <el-col :span="24">
          <div class="grid grid-cols-2 gap-x-2 gap-y-3 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10">
            <div
              v-for="(attachment, index) in list.data"
              :key="index"
            >
              <div
                style="display: flex;justify-content: start"
                class="relative cursor-pointer overflow-hidden rounded-sm border-solid bg-white transition-all hover:shadow-sm"
              >
                <img
                  style="width: 100px; height: 100px;margin: 0 5px"
                  :src="attachment.thumbPath"
                  :alt="attachment.name"
                >
              </div>
            </div>
          </div>

        </el-col>
      </el-row>
      <!-- 分页栏 -->
      <Pagination :total="total" :page.sync="listQuery.currentPage" :limit.sync="listQuery.pageSize" @pagination="fetchData" />
    </el-card>
  </div>
</template>

<script>
import classifyTable from '@/api/classify/classifyTable'
import Pagination from '@/components/Pagination'
export default {
  name: 'Attachment',
  components: { Pagination },
  data() {
    return {
      // 数据列表加载动画
      listLoading: true,
      // 查询列表参数对象
      listQuery: {
        name: undefined,
        currentPage: 1,
        pageSize: 10
      },
      list: {
        data: [
          {
            thumbPath: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            name: '111'
          },
          {
            thumbPath: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            name: '111'
          }
        ]
      },
      // 数据总条数
      total: 0,
      // 表格数据数组
      tableData: [],
      // 多选数据暂存数组
      multipleSelection: [],
      // 新增/编辑 弹出框显示/隐藏
      formVisible: false,
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down', 'fill1', 'contain1', 'cover1', 'none1', 'scale-down1'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    // 多选操作
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    // 获取数据列表
    fetchData() {
      this.listLoading = true
      // 获取数据列表接口
      const data = JSON.stringify(this.listQuery)
      classifyTable.loadClassifyTable(data).then(res => {
        const data = res
        this.total = data.total
        this.tableData = data.categoriesList
        this.listLoading = false
      }).catch(() => {
        this.listLoading = false
      })
    },
    // 查询数据
    onSubmit() {
      this.listQuery.currentPage = 1
      this.fetchData()
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less">
.gridItem {
  border: solid black 1px;
  background-color: #CCCCCC;
}
.table-classic-wrapper {
  .el-card {
    min-height: 656px;
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
.image{
  display: flex;
  justify-content: space-around;
}
</style>
