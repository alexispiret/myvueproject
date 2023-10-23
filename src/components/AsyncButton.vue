<!--<template>
  <Baselayout :isDisabled="isDisabled" @click="handleClick">
    <slot></slot>
  </BaseLayout>
</template>

<script>
/* eslint-disable */
import BaseLayout from './BaseLayout.vue';

export default {
  components: {
    BaseLayout,
  },
  props: {
    onClick: Function,
  },
  data() {
    return {
      isDisabled: false,
    };
  },
  methods: {
    async handleClick() {
      if (this.isDisabled) return;

      this.isDisabled = true;
      try {
        await this.onClick();
      } finally {
        this.isDisabled = false;
      }
    },
  },
};
</script>

<style scoped>
.custom-button {
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.custom-button:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}
</style>-->
<template>
  <BaseButton
    :disabled="isPending"
    :color="color"
    @click.stop.prevent="handleClick"
  >
    <span 
      v-if="isPending"
      pulse
    />
    <slot />
  </BaseButton>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'AsyncButton',
  components: { BaseButton },
  inheritAttrs: false,

  props: {
    color: {
      type: String,
      default: 'primary'
    }
  },

  data () {
    return {
      isPending: false
    }
  },

  methods: {
    handleClick () {
      const originalOnClick = /** @type {() => Promise<void>} */ (this.$attrs.onClick)
      this.isPending = true
      originalOnClick().finally(() => { this.isPending = false })
    }
  }
}
</script>
