<template>
  <div class="home-wrapper">
    <div class="date-row">
      <div v-for="(item, index) in cardInfoData" :key="index" class="data-col">
        <el-card shadow="always" :body-style="{padding: '0px'}">
          <div class="date-block">
            <i :class="[ item.icon ]" :style="{ background: item.color }" class="icon-box" />
            <div class="date-cont">
              <CountTo class="count" :start-val="0" :end-val="item.count" :duration="3000" />
              <p class="title">{{ item.title }}</p>
            </div>
          </div>
        </el-card>
      </div>
    </div>
    <el-row class="date-box" :gutter="20">
      <el-col :span="8">
        <el-card shadow="always" :body-style="{padding: '0px'}">
          <ChartsPie :title="text" type="pie" :data="chartsPieData" class="data-desc" />
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card shadow="always" :body-style="{padding: '0px'}">
          <ChartsBar :title="title" :data="commonChartsData" class="data-chart" />
        </el-card>
      </el-col>
    </el-row>
    <el-row class="date-box">
      <el-col :span="24">
        <el-card shadow="always" :body-style="{padding: '0px'}">
          <ChartsLine :title="title" :data="commonChartsData" class="data-chart" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
import ChartsPie from '@/components/Charts/ChartsPie'
import ChartsBar from '@/components/Charts/ChartsBar'
import ChartsLine from '@/components/Charts/ChartsLine'
import { getPostCount, getTagCount, getCategoryCount } from '@/api/home'
export default {
  name: 'Home',
  components: { CountTo, ChartsPie, ChartsBar, ChartsLine },
  data() {
    return {
      text: '分类',
      title: '近七天用户访问量条形图',
      cardInfoData: [
        { title: '访问量', icon: 'blog-liulanliang', count: 0, color: '#2d8cf0' },
        { title: '文章', icon: 'blog-wenzhang', count: 0, color: '#19be6b' },
        { title: '标签', icon: 'blog-biaoqian', count: 0, color: '#ff9900' },
        { title: '分类', icon: 'blog-fenlei', count: 0, color: '#e46cbb' }
      ],
      chartsPieData: [
        { value: 1920, name: '直接访问' },
        { value: 1169, name: '邮件营销' },
        { value: 986, name: '联盟广告' },
        { value: 621, name: '视频广告' },
        { value: 3256, name: '搜索引擎' }
      ],
      commonChartsData: {
        Mon: 782,
        Tue: 925,
        Wed: 1196,
        Thu: 812,
        Fri: 328,
        Sat: 222,
        Sun: 1080
      }
    }
  },
  created() {
  },
  mounted() {
    this.getPostCount()
    this.getTagCount()
    this.getCategoryCount()
  },
  methods: {
    getPostCount() {
      getPostCount().then(res => {
        this.cardInfoData[1].count = res.postCount
      })
    },
    getTagCount() {
      getTagCount().then(res => {
        this.cardInfoData[2].count = res.tagCount
      })
    },
    getCategoryCount() {
      getCategoryCount().then(res => {
        this.cardInfoData[3].count = res.categoryCount
      })
    }
  }
}
</script>

<style lang="less">
@import "../assets/less/home";
</style>
