<template>
  
  <div>
    <BaseLayout></BaseLayout>
    <router-view></router-view>
  </div>

</template>

<script>
import BaseLayout from '/src/components/BaseLayout.vue';

export default {
  components: {
    BaseLayout,
    
  },
}

</script>


