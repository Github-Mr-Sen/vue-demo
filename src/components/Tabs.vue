<template>
  <el-tabs class="tabs"
           v-model="a"
           type="card"
           closable
           @tab-remove='closeTab'
           @tab-click='tabclick'>
    <el-tab-pane
        :key="item.name"
        v-for="(item) in tabList"
        :label="item.label"
        :name="item.name"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<script>
/* eslint-disable */
export default {
  name: "Tabs",
  data() {
    return {
      tabList: [],
      a:'/home'
    }
  },
  methods: {
    tabclick(tab) {
      console.log(tab);
      this.$router.push(tab.name)
      this.$store.commit("tabs/changActive", {name:tab[name],label:tab[label]})
    },
    closeTab(a) {
      console.log(a)
      this.$store.commit("tabs/removeTab",a)
      this.$router.push(this.$store.state.tabs.activeTab.name)
    }
  },
  created() {

    this.tabList = this.$store.state.tabs.tabList
    console.log(this.tabList)
  }


}
</script>

<style scoped>

</style>