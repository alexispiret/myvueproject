<template>
  
  <div>
    
      <button @click="signIn">SigninButton</button>
    
  </div>
  
</template>

<script>
import {signInAndGetUser} from '/src/lib/microsoftGraph.js'


export default {
    

    methods: {

    async signIn()
    {
    try
    {   const authResult= await signInAndGetUser()
        console.log(authResult.name)
        const user = authResult.name;
        this.updateUser(user);
    }
    catch(error)
    {
    console.error(error)
    }
  },

  updateUser(newUser) {
      this.$emit('updateUser', newUser);
    },
  
},

    props: ['user'],
}

</script>
