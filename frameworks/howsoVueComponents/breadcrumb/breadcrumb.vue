<template lang="html">
  <el-breadcrumb separator="/">
    <span class="db-breadcrumb-loc">位置：</span>
    <el-breadcrumb-item v-for="item in breadcrumbs" :to="item">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'breadcrumb',

  data() {
    return {
      breadcrumbs: []
    };
  },
    watch:{
      '$route'(){
          this.breadcrumbs = (this.$parent && this.$parent.$route && this.$parent.$route.matched) || [];
      }
    },

  mounted() {
    this.breadcrumbs = (this.$parent && this.$parent.$route && this.$parent.$route.matched) || [];
  }
};
</script>

<style lang="css">
.db-breadcrumb-loc {
  float: left;
}
</style>
