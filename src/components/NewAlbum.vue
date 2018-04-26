<template>
  <div class="recommend-wrap">
    <div class="recommend">
    <h2 class="title">新碟首发</h2>
    <el-carousel v-bind:autoplay="false" arrow="always"  height="350px">
      <el-carousel-item v-for="(page, pindex) in albumsList" :key="pindex">
        <ul class="main clearfix">
          <li  v-for="(item, index) in page" :key="index" class="song-menu-item">
            <div class="show-img">
              <router-link v-bind:to="'/songlist/'+item.id">
                <img v-bind:src="item.picUrl" alt="">
                <div class="mask">
                  <i class="el-icon-caret-right"></i>
                </div>
              </router-link>
            </div>
            <h3 class="nowrap-text"><router-link v-bind:to="'/songlist/'+item.id">{{ item.name }}</router-link></h3>
            <div><span>{{item.singer}}</span></div>
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
      result = await this.$axios(this.$host + "top/album?offset=0&limit=20");
    } catch (e) {
      this.$message({
        message: "发生未知错误",
        type: "error"
      });
    }
    if (result.status === 200) {
      let albums = result.data.albums.map(item=>{
          let song ={};
          song.id = item.id;
          song.name = item.name;
          song.picUrl = item.blurPicUrl;
          song.singer = item.artists.map(item=>item.name).join('，');
          song.alias = item.alias;
          return song;
      });
      let temp = [];
      let len = Math.floor(albums.length / 5);
      for(let i=0; i< len; i++){

        temp.push(albums.splice(0, 5))
      }
      this.albumsList = temp;
    }
  },
  data() {
    return {
      albumsList: []
    };
  }
};
</script>

<style scoped>
.recommend-wrap {
  background: #f5f5f5;
  height: 530px;
  padding: 20px;
}
.recommend {
}
.song-menu{
  height: auto;;
}
h3{
  margin: 5px 0;
}
.title {
  font-size: 32px;
  text-align: center;
}
.song-menu-item {
  width: 20%;
  float: left;
  padding: 0 20px;
  overflow: hidden;
}
.show-img{
  position: relative;
  width: 230px;
  height: 230px;
  overflow: hidden;
  transition: all .3s;
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
