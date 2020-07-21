<template>
  <div class="home">
    <div class="buttons">
      <button v-on:click="select(index)" v-for="(comp,index) in components" :key='index'> {{index}}</button>
    </div>
    <template v-if="components[selected]">
      <component :is="components[selected].component" :params="components[selected].params"></component>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import comp1 from '@/components/overlay/comp1'
import video from '@/components/overlay/video'
import comp3 from '@/components/overlay/comp3'

export default {
  name: 'Home',
  data () {
    return {
      selected: '',
      components: {
        '!crime': {
          component: comp1
        },
        '!jojo': {
          component: video,
          params: {video:'ayaya.webm'}
        },
        '!passed': {
          component: video,
          params: {video:'gta-passed.webm'}
        },
        '!ohh': {
          component: video,
          params: {video:'ohh.webm'}
        },
        '!omg': {
          component: comp3
        }
      },
      messages:[]
    }
  },
  components: {},
  methods: {
    select(comp) {
      this.selected = comp
    }
  },
  created(){
    window.client.on('message', (channel, tags, message, self) => {
        console.log('channel', channel)
        console.log('tags', tags)
        console.log('message', message)
        console.log('self', self)
        // this.messages.push({tags,message})
        this.selected = message
    })
  }
}
</script>
<style scoped>
.home {
  height: 100%;
  width: 100%;
}
.buttons{
  top:25%;
  left:0;
  position: absolute;
  z-index: 9999 !important;
  border:1px solid black;
  background: white;
}
.buttons button{
  border: 1px solid black;
  font-size: 30px;
  padding: 10px;
  float:left;
  clear: both;
  width:100%;
}
</style>