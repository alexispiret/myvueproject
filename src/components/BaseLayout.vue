<template>
  <div>
    <header>
      <!-- Contenu de l'en-tête -->
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <!-- Contenu du pied de page -->
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "BaseLayout"
    };
  }
}
</script>