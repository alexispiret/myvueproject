<template>
  
  <div>
    
      <button @click="signIn">SigninButton</button>
    
  </div>
  
</template>

<script>
import {signInAndGetUser} from '/src/lib/microsoftGraph.js'
/*import { mapMutations } from 'vuex';*/  //pas besoin de mapMutations car on utilise directement this.$store.commit pour déclencher la mutation.


export default {
    

    methods: {
        
        async signIn()
    {
        try
            {   const authResult= await signInAndGetUser()
                /*console.log(authResult.name)*/
                const user = authResult.name;
                this.$store.commit('setUser', user); // Commit the setUser mutation in the store
                /*this.setUser(user);*/ // Commit the setUser mutation
                /*this.updateUser(user);*/ /*ancienne méthode*/
            }
        catch(error)
            {
                console.error(error)
            }
    },

    /*updateUser(newUser) {
      this.$emit('updateUser', newUser);
    },*/
  
    },

    /*props: ['user'], */       /* n'est plus utile car transmission par provide/inject */

    /*provide() {
        return {
            user: this.user,
        };
    },*/ //ancienne méthode provide/inject
}

</script>
