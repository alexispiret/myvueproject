<template>
  <BaseHeader></BaseHeader>
  <SigninButton></SigninButton>
  <BaseFooter></BaseFooter>
</template>

<script>

import BaseHeader from '/src/components/BaseHeader.vue'
import BaseFooter from '/src/components/BaseFooter.vue'
import SigninButton from '/src/components/SigninButton.vue'

export default {
  components: {
    SigninButton,
    BaseHeader,
    BaseFooter
  },
  
  
}

</script>

