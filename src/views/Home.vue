<template>
  <div style="overflow: hidden">
    <el-image
        style="width: 35%;"
        :src="require('@/assets/yy_home.webp')"
        :fit="cover"
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