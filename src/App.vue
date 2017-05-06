<template>
  <div id="app">
    <div>
      <v-button type="primary" @click="test">Primary</v-button>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      test(){
        console.log("!!!")
      }
    }
  }
</script>

<style>
  .ghost {
    background-color: #00a2ae;
  }
</style>
