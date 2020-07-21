<template>
<div class="jail sweep-to-top">
  <div class="police">
    <img src="./police.gif">
  </div>
</div>
  
</template>

<script>
// import animate from 'animate.css'
export default {
  name:'COMP 1',
}
</script>

<style>
.jail-scene{
  height: 100%;
}
.jail {
  animation: fadeInDown; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 3s; /* don't forget to set a duration! */
  position: absolute;
  border: 1px solid red;
    /* The image used */
  background-image: url("./jail3.png");

  /* Full height */
  height: 100%;
  width:100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: repeat;
  /* background-size: cover; */
}

</style>