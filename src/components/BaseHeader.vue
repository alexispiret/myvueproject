<template>
  <body>
    <div class="navbar">
      <a href="#">Accueil</a>
      <a href="#">À propos</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </div>
    

    
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


.navbar {
      
      background-color: #333; 
      overflow: hidden; /* Pour gérer les éléments flottants à l'intérieur */
    }

    /* Style pour les liens de la barre de navigation */
    .navbar a {
      float: left; 
      display: block; 
      color: white; 
      text-align: center; 
      padding: 14px 16px; /* Espacement autour du texte */
      text-decoration: none; 
    }

    /* Style pour les liens au survol */
    .navbar a:hover {
      background-color: #ddd; 
      color: black; 
    }

</style>


<script>

export default {
  components : {
    
  },
  
  data() {
    return {
      message: "BaseHeader",
    };
  }
}
</script>