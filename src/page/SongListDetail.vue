<template>
  <div>
    <Header />
   歌单详情
   {{ songlistData }}
  </div>
</template>

<script>
import Header from '../components/Header'


export default {
  name: 'SongListDetail',
  components: {
    Header,
  },
  async created() {
    let result = null;
    let songlistId = window.location.pathname.split('/songlist/')[1];
    try {
      result = await this.$axios(this.$host+`playlist/detail?id=${songlistId}`);
    } catch (e) {
      this.$message({
        message: "发生未知错误",
        type: "error"
      });
    }
    if (result.status === 200) {
      this.songlistData = result.data.result;
    }
  },
  data(){
    return {
      songlistData: []
    }
  }
}
</script>

<style>

</style>
