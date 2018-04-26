<template>
  <div class="recommend-wrap">
    <div class="recommend">
    <h2 class="title">新歌首发</h2>
    <el-carousel v-bind:autoplay="false" arrow="always"  height="350px">
      <el-carousel-item v-for="(page, pindex) in songlistPage" :key="pindex">
        <ul class="main clearfix">
          <li  v-for="(item, index) in page" :key="index" class="song-menu-item clearifx">
            <div class="show-img float-left">
              <router-link v-bind:to="'/songlist/'+item.id">
                <img v-bind:src="item.picUrl" alt="">
                <div class="mask">
                  <i class="el-icon-caret-right"></i>
                </div>
              </router-link>
            </div>
           <div class="show-content float-left">
              <h3 class="nowrap-text"><router-link v-bind:to="'/songlist/'+item.id">{{ item.name }}</router-link></h3>
              <p>{{ item.singer }}</p>
           </div>
          </li>
        </ul>
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
</template>

<script>
export default {
  name: "SongListRecommend",
  async created() {
    let result = null;
    try {
      result = await this.$axios(this.$host + "personalized/newsong");
    } catch (e) {
      this.$message({
        message: "发生未知错误",
        type: "error"
      });
    }
    if (result.status === 200) {
      let temp = []
      let data = result.data.result.map(item=>{
        let song ={};
        song.id = item.id;
        song.name = item.name
        song.picUrl = item.song.album.picUrl;
        song.singer = item.song.artists.map(item=>item.name).join('，');
        song.alias = item.song.alias;
        return song;
      })
      temp.push(data.splice(0, 9));
      this.songlistPage = temp;
    }
  },
  data() {
    return {
      songlistPage: []
    };
  }
};
</script>

<style scoped>
.recommend-wrap {
  background: #ffffff;
  height: 530px;
  padding: 20px;
}
.recommend {
}
.song-menu{
  height: auto;;
}
.title {
  font-size: 32px;
  text-align: center;
}
.song-menu-item {
  width: 33.3%;
  float: left;
  padding-right: 15px;
}
.show-img{
    position: relative;
    float: left;
    width: 86px;
    height: 86px;
    margin-right: 14px;
    overflow: hidden;
}
.show-img:hover .mask{
  opacity: 1;
}
.mask{
  opacity: 0;
  transition: all .3s;
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  color: #ffffff;
  font-size: 60px;
  padding-top: 70px;
  padding-left: 75px;

}
</style>
