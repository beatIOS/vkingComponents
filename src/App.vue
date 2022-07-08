<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <vking-btn type="firstmain" styles="width:240px;" @click="showChildMsg" :disable="disable" >一级主要按钮</vking-btn>
    <br/>
    <br/>
    <vking-btn type="firstminor" styles="width:240px;" :disable="disable" >一级跟随按钮</vking-btn>
    <br/>
    <br/>
    <vking-btn type="secondmain" styles="width:104px;" :disable="disable" >二主按钮</vking-btn>
    <br/>
    <br/>
    <vking-btn type="secondminor" styles="width:104px;" :disable="disable" >二次按钮</vking-btn>
    <br/>
    <br/>
    <vking-btn type="secondmaini" styles="width:104px;" :disable="disable" >二主按图</vking-btn>
    <br/>
    <br/>
    <vking-btn type="secondmainib" styles="width:104px;" :disable="disable" >二主图描</vking-btn>
    <br/>
    <br/>
    <vking-btn type="secondminorib" styles="width:104px;" :disable="disable" >二随图描</vking-btn>
    <br/>
    <br/>
    <vking-btn type="thirdmain" styles="width:104px;" :disable="disable" >三主按钮</vking-btn>
    <br/>
    <br/>
    <vking-btn type="thirdminor" styles="width:104px;" :disable="disable" >三随按钮</vking-btn>
    <br/>
    <br/>
    <vking-btn type="thirdmainb" styles="width:104px;" :disable="disable" >三主按描</vking-btn>
    <br/>
    <br/>
    <vking-btn type="thirdminorb" styles="width:104px;" :disable="disable" >三随按描</vking-btn>
    <br/>
    <br/>
    <vking-btn type="textmain" :disable="disable" >文字主要按钮</vking-btn>
    <vking-btn type="textminor" :disable="disable" >文字跟随按钮</vking-btn>
    <vking-btn type="textmaini" :disable="disable" >文字主要按钮带图标</vking-btn>
    <vking-btn type="textminori" :disable="disable" >文字跟随按钮带图标</vking-btn>
    <br/>
    <br/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      disable:false,
    }
  },  
  methods:{
    showChildMsg(data){
      console.log(data)
      console.log(1)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #122733;
}
</style>
