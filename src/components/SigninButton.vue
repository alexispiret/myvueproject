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
    }
    catch(error)
    {
    console.error(error)
    }
  },
  
}
}

</script>
