<template>
  <header class="side-bar">
    <slot></slot>
  </header>
</template>
<style scoped lang="scss">
@use "../assets/variables" as *;

.side-bar {
  background-image: url("/images/bg-main-mobile.png");
  background-repeat: no-repeat;
  background-position: top right;
  background-color: $color-very-dark;
  height: 240px;
  padding: 32px 16px 0;
  display: flex;
  justify-content: center;
}

@media only screen and (min-width: 1024px) {
  .side-bar {
    background-image: url("/images/bg-main-desktop.png");
    background-repeat: no-repeat;
    background-position: top left;
    width: 483px;
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
  }
}
</style>
