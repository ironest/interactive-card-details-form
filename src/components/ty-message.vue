<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();

const onClick = () => {
  store.dispatch("resetState");
};
</script>

<template>
  <div class="ty-message">
    <img src="/images/icon-complete.svg" alt="" />
    <span class="primary">Thank you!</span>
    <span class="secondary">We've added your card details</span>
    <button @click="onClick">Continue</button>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/variables" as *;

.ty-message {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 80px;
    height: 80px;
  }

  .primary {
    font-size: 28px;
    letter-spacing: 3.5px;
    text-transform: uppercase;
    color: $color-very-dark;
    margin-top: 35px;
  }

  .secondary {
    font-size: $font-size-base;
    color: $color-dark;
    margin-top: 16px;
  }

  button {
    background-color: $color-very-dark;
    color: $color-white;
    padding: 15px;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    margin-top: 48px;
  }
}

@media only screen and (min-width: 1024px) {
  .ty-message {
    width: 380px;
  }
}
</style>
