<template>
  <div id="editor">
    <mavon-editor
      ref="md"
      v-model="content"
      style="max-height: 100%;min-height: 95%"
      :code-style="codeStyle"
      :ishljs="true"
      :toolbars="toolbars"
      @imgAdd="$imgAdd"
    />
  </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import {uploads} from "../../api/WriteArticleApi";

export default {
  name: 'Markdown',
  components: { mavonEditor },
  data() {
    return {
      content: '',
      // 代码高亮主题
      codeStyle: 'github-dark',
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        // readmodel: true, // 沉浸式阅读
        // htmlcode: true, // 展示html源码
        // help: true, // 帮助
        /* 1.3.5 */
        // undo: true, // 上一步
        // redo: true, // 下一步
        // trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        // alignleft: true, // 左对齐
        // aligncenter: true, // 居中
        // alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    }
  },
  // mounted
  mounted() {
  },
  methods: {
    // 绑定@imgAdd event
    // 获取转换成html内容
    // console.log(this.$refs.md.d_render)
    // 原文的值
    // console.log(this.$refs.md.d_value)
    $imgAdd(pos, $file) {
      console.log('11111')
      // 第一步.将图片上传到服务器.
      var formdata = new FormData()
      formdata.append('image', $file)
      uploads(formdata).then(res => {
        console.log(res)
      })
      // $vm.$img2Url(pos, url);
    }
  }

}
</script>
<style>
#editor {
  margin: auto;
  width: 100%;
  height: 636px;
}
</style>
