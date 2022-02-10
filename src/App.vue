<template>
  <div>
    <app-bar></app-bar>
    <router-view></router-view>
  </div>
</template>
<script>
import appBar from "./components/app-bar.vue";
export default {
  components: {
    appBar,
  },
};
</script>
<style lang="scss">
.main-header {
  width: inherit;
  height: 3.5rem;
  background-color: #00695c;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
}

.main-header__item {
  margin: 0 1rem;
  padding: 0;
  font-size: 1.5rem;
  list-style: none;
  text-decoration: none;
  color: white;
}
.router-link-active {
  color: yellow;
}
</style>
