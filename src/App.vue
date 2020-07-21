<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html {
    height: 100%;
    width: 100%;
}
body{
  height:100%;
  width: 100%;
  margin:0px;
}
#app {
  height: 100%;
  /* height: calc(100% - 20px); */
  /* border:10px solid yellow; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
