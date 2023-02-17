<template>
  <div class="github-link-wrapper">
    <el-tooltip effect="dark" content="网站前台" placement="bottom">
      <a href="http://116.63.161.202/" target="_self" rel="noopener">
        <i class="blog-web" style="font-size: 30px" />
      </a>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'WebLink'
}
</script>

<style lang="less">
.github-link-wrapper {
  float: left;
  width: 22px;
  height: 22px;
  padding: 4px;
  cursor: pointer;
  .icon {
    font-size: 24px;
  }
  &:hover {
    color: #409eff;
  }
}
</style>
