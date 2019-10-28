<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  font-family: ubuntulight;
  background-color: black;
  padding: 30px;
  color: grey;
  a {
    font-weight: bold;
    color: #adadad;
    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}

.sentance {
  text-align: right;
}
</style>
