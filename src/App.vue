<template>
  <router-view />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #d3d7e7;
  text-align: center;
  background: linear-gradient(180deg, #223f5c 0%, #042a3f 100%);
  overflow-x: hidden;
  scroll-behavior: smooth;
}

a {
  color: #d3d7e7;
  text-decoration: none;
  transition: 0.1s linear;
  cursor: pointer;

  &:hover {
    color: #7a7c83;
  }
}

#app {
  display: flex;
}
</style>
