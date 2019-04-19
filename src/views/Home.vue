<template>
  <div id="main">
    <HelloFabble msg="fabble."/>
    <p>comming soon</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloFabble from '@/components/HelloFabble.vue'

export default {
  name: 'home',
  components: {
    HelloFabble
  }
}
</script>

<style lang="scss">
 body {
  background-color: #d36e00;
}
</style>

