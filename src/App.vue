<template>
  <div id="app">
    <div id="nav">
      
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0c080c;
   background-color: #b05cb3;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #b05cb3;
}

#nav a.router-link-exact-active {
  color: #d378c4;
}
</style>
