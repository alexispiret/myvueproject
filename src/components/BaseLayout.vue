<template>
  <button
    :class="{ 'disabled': isDisabled }"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    @focus="isFocused = true"
    @blur="isFocused = false"
    :disabled="isDisabled"
  >
    <slot></slot>
  </button>
</template>



<script>
export default {
  data() {
    return {
      isHovered: false,
      isFocused: false,
    };
  },
  props: {
    isDisabled: Boolean,
  },
};
</script>


<style scoped>
button {
    background-color: #3498db;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    
}

button:hover,
button:focus {
  background-color: #2980b9;
}

button.disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}
</style>