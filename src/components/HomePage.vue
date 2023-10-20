<template>
  <body>
    <div class="navbar">
      <a href="#">Accueil</a>
      <a href="#">À propos</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </div>
    <div class="content">
      <BaseLayout>BaseButton</BaseLayout>
      <BaseLayout color="warn">BaseButton with color props</BaseLayout>
      <BaseLayout color="danger">BaseButton with color props</BaseLayout>
      <BaseLayout color="danger" :isDisabled="true">BaseButton Disabled</BaseLayout>
      <AsyncButton :onClick="effectuerTacheAsync">Disabled and Animated</AsyncButton>
    </div>

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


.navbar {
      flex: 1;
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
import BaseLayout from './BaseLayout.vue';
import AsyncButton from './AsyncButton.vue';

export default {
  components : {
    BaseLayout,
    AsyncButton
  },
  methods: {
    async effectuerTacheAsync() {
      // Simulez une tâche asynchrone
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('Tâche asynchrone terminée');
          resolve();
        }, 2000);
      });
    },
  },
  data() {
    return {
      message: "HomePage"
    };
  }
}
</script>