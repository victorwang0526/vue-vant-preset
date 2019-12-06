<template>
  <div id="app">
    <router-view/>
    <tab-bar></tab-bar>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import TabBar from "@/components/TabBar.vue";

@Component({
  components: {
    TabBar
  }
})
export default class extends Vue {

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
