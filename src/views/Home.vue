<template>
  <div class="imgs">
    <el-image
        style="height: 100%;"
        :src="require('@/assets/yy_home.webp')"
        ></el-image>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data(){
    return{
    }
  }
}
</script>
<style scoped>
.imgs{
  height:100%;
  display: block;

}

</style>