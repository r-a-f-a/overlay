<template>


<video id="overlay-video" autoplay="" :src="`./videos/${params.video}`"  playsinline="" style="background-color: transparent; opacity: 1; filter: blur(0px)" class="rotate-out"></video>
</template>

<script>
// import seeThru from 'seethru'
export default {
  name:'overlay-video',
  props:['params'],
  mounted() {
    var aud = document.getElementById("overlay-video");
    let _this = this
    aud.onended = function() {
      _this.$events.emit('setBlank')
        // console.log("VOLTAR PARA O COMP VIA EVENTO");
    };
    // var transparentVideo = seeThru.create('#my-video');
    // transparentVideo.play()
    // console.log(transparentVideo)
  },
}
</script>

<style>
video{
  height: 100%;
  width:100%;
}
</style>