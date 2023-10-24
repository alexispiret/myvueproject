<template>
  <BaseHeader></BaseHeader>
  
  <SigninButton></SigninButton>       <!--<SigninButton @updateUser="updateUser"></SigninButton>--><!--ancienne méthode de transmission-->
  <div v-if="user">
      <!-- Affichez l'utilisateur si user n'est pas null -->
      User: {{ user }}
      <router-link to="/conversations">Conversations</router-link> <!--display the conversations page link if user is login-->
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

  computed: {     //méthode de transmission avec store.js
    user() {
      return this.$store.state.user; // Access user from the store
    },
  },

  /*data() {
    return {
      user: null,
    };
  },

  methods: {      // méthode de transmission avec props/methods
    updateUser(newUser) {
      this.user = newUser; // Mettre à jour la variable "user" avec la nouvelle valeur
    },
  },

  inject: ['user'],*/        //méthode de transmission avec provide/inject
  
}

</script>

