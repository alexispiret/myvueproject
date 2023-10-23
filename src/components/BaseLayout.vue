<template>
  <BaseHeader></BaseHeader>
  <SigninButton @updateUser="updateUser"></SigninButton>
  <div v-if="user">
      <!-- Affichez l'utilisateur si user n'est pas null -->
      User: {{ user }}
    </div>
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

  data() {
    return {
      user: null,
    };
  },

  methods: {
    updateUser(newUser) {
      this.user = newUser; // Mettre à jour la variable "user" avec la nouvelle valeur
    },
  },
  
}

</script>

