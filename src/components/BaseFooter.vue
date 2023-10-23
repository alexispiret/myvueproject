<template>
  <body>
    <footer>
      <p>&copy; 2023 MyvueProject. Tous droits réservés. | <a href="/politique-de-confidentialite">Politique de confidentialité</a> | <a href="/conditions-dutilisation">Conditions d'utilisation</a></p>
    </footer>
  </body>
</template>

<style>
body {
      margin: 0;
      padding: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      
    }

/* Style CSS pour le footer */
    footer {
      margin-top: auto;
      background-color: #333; 
      height: 50px;
      color: white; 
      padding: 10px; /* Espacement autour du texte */
      text-align: center; 
    }
</style>


<script>

export default {
  components : {

  },
  
  data() {
    return {
      message: "BaseFooter",
      
    };
  }
}
</script>
