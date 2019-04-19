<template>
  <div id="mainBody">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloFabble',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
 H1 {
   color: #ffffff;
   font-family: 'Helvetica Neue', sans-serif;
   font-size: 275px;
   font-weight: bold;
   letter-spacing: -1px;
   line-height: 1;
   text-align: center;
 }

 p {
   color: #ffffff;
   font-family: 'Helvetica Neue', sans-serif;
   font-size: 14px;
   line-height: 24px;
   text-align: center;
   

 }
</style>



