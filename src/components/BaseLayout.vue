<template>
  
  <div>
    <BaseHeader></BaseHeader>
    <div class="content">
      
    </div>
    <BaseFooter></BaseFooter>
  </div>

</template>

<script>

import BaseHeader from '/src/components/BaseHeader.vue';
import BaseFooter from '/src/components/BaseFooter.vue';

export default {
  components: {
    BaseHeader,
    BaseFooter
  },
}

</script>

<style>
  
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
