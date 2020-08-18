<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {

}

#nav {
  padding: 30px;

  a {
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
