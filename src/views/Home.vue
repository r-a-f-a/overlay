<template>
  <div class="home">
    <temperature :total="total" :command="commands" :selected="selected" :votation="votation" v-if="votation"></temperature>
    <div class="buttons" v-if='showButtons'>
      <button v-on:click="select(index)" v-for="(comp,index) in commands" :key='index'> {{index}}</button>
    </div>
    <template v-if="commands[selected]">
      <component :is="commands[selected].component" :params="commands[selected].params"></component>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import temperature from '@/components/temperature'
import blank from '@/components/overlay/blank'
import comp1 from '@/components/overlay/comp1'
import video from '@/components/overlay/video'
import comp3 from '@/components/overlay/comp3'

export default {
  name: 'Home',
  components:{
    temperature
  },
  data () {
    return {
      total: 0,
      lastMessage: '',
      selected: 'blank',
      votation: false,
      commands: {
        'blank': {
          component: blank,
          name:'blank'
        },
        '!crime': {
          component: comp1,
          name:'!crime',
          price: 10,
        },
        '!jojo': {
          component: video,
          params: {video:'ayaya.webm'},
          name:'!jojo',
          price: 5,
        },
        '!passed': {
          component: video,
          params: {video:'gta-passed.webm'},
          name:'!passed',
          price: 5,
        },
        '!ohh': {
          component: video,
          params: {video:'ohh.webm'},
          name:'!ohh',
          price: 5,
        },
        '!omg': {
          component: comp3,
          name:'!omg'
        }
      }
    }
  },
  methods: {
    select(comp) {
      this.selected = comp
    }
  },
  
  created(){

    this.$events.on('showComp',()=>{
      this.selected = this.votation
    })
    this.$events.on('setBlank',()=>{
      this.selected = 'blank'
      this.votation = false;
      this.total = 0;
      this.lastMessage = ''
    })
    window.client.on('message', (channel, tags, message, self) => {
        console.log('channel', channel)
        console.log('tags', tags)
        console.log('message', message)
        console.log('self', self)
        // this.messages.push({tags,message})

        if(message.indexOf('!') === 0 && message === this.lastMessage && this.commands[message]){
          if(this.votation != message){
            this.votation = message
            this.total = 0
          }
        }

        if(message.indexOf('!') === 0 && this.votation === message){
          this.total++
        }
        this.lastMessage = message
        // this.selected = message
        
    })
  },
  computed:{
    showButtons () {
      return this.$route.query.debug
    }
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