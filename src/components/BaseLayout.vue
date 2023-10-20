<template>
  <!--<button
    :class="{ 'disabled': isDisabled }"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    @focus="isFocused = true"
    @blur="isFocused = false"
    :disabled="isDisabled"
  >
    <slot></slot>
  </button>-->
  <button :class="['button', `button-${color}`]" :disabled="isDisabled">
    <slot></slot>
  </button>
</template>



<script>
export default {
  /*data() {
    return {
      isHovered: false,
      isFocused: false,
    };
  },
  */
  
  props: {
    color: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return ['primary', 'warn', 'danger'].includes(value);
      },
    },
    isDisabled: Boolean,
  },
};
</script>




<style scoped>
.button {
  /* Styles communs à tous les boutons */
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button-primary {
  background-color: #42b983;
}

.button-warn {
  background-color: #e67e22;
}

.button-danger {
  background-color: #e74c3c;
}

.button:disabled {
  /* Styles pour les boutons désactivés */
  background-color: #bdc3c7;
  cursor: not-allowed;
}
button:hover,
button:focus {
  background-color: #2980b9;
}

</style>