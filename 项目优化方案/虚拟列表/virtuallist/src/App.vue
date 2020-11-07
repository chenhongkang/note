<template>
  <div id="app">
    <VirtualList :list="list"/>
  </div>
</template>

<script>
import VirtualList from './components/VirtualList.vue'

export default {
  name: 'App',
  components: {
    VirtualList
  },
  data () {
    return {
      list: [
        {value: 1},
        {value: 2, name: 'a'},
        {value: 3},
        {value: 4},
        {value: 5},
        {value: 6},
        {value: 7},
        {value: 8},
        {value: 9},
        {value: 10},
        {value: 11},
        {value: 12},
        {value: 13},
        {value: 14},
        {value: 15},
        {value: 16},
        {value: 17},
        {value: 18},
        {value: 19},
        {value: 20},
        {value: 21},
        {value: 22},
        {value: 23},
        {value: 24},
        {value: 25},
        {value: 26},
        {value: 27},
        {value: 28},
        {value: 29},
        {value: 30},
        {value: 31},
        {value: 32},
        {value: 33},
        {value: 34},
        {value: 35},
        {value: 36},
        {value: 37},
        {value: 38},
        {value: 39},
        {value: 40},
        {value: 41},
        {value: 42},
        {value: 43},
        {value: 44}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
