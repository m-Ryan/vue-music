<template>
  <div>
    <Header />
    <SongListRecommend />
    <NewSongRecommend />
    <NewAlbum />
    <MV />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import SongListRecommend from '../components/SongListRecommend'
import NewSongRecommend from '../components/NewSongRecommend'
import NewAlbum from '../components/NewAlbum'
import MV from '../components/MV'
import Footer from '../components/Footer'

export default {
  name: 'Index',
  components: {
    Header,
    SongListRecommend,
    NewSongRecommend,
    NewAlbum,
    MV,
    Footer
  },
  data(){
    return {

    }
  }
}
</script>

<style>

</style>
