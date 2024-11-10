<template>
  <div class="img" :class="side">
    <slot name="cvc"></slot>
    <slot name="logo"></slot>
    <slot name="serial"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<style lang="scss">
@use "../assets/variables" as *;
.img {
  position: absolute;
  width: 286px;
  height: 157px;
  background-repeat: no-repeat;
  background-size: contain;
  color: $color-white;
  box-shadow: 0px 39px 59px 0px rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: 0px 39px 59px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 39px 59px 0px rgba(0, 0, 0, 0.14);
  border-radius: 6px;
}

.back {
  right: 0;
  background-image: url("/public/images/bg-card-back.png");
  padding: 71px 37px 0 0;
  text-align: right;
  letter-spacing: 1.29px;
  font-size: 9px;
}

.front {
  bottom: 0;
  background-image: url("/public/images/bg-card-front.png");
  padding: 19px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media only screen and (min-width: 1024px) {
  .img {
    position: static;
    width: 447px;
    height: 245px;
    border-radius: 10px;
  }

  .back {
    padding: 111px 57px 0 0;
    letter-spacing: 2px;
    font-size: 14px;
    align-self: flex-end;
  }

  .front {
    padding: 28px 32px;
  }
}
</style>
<script setup>
defineProps({
  side: String,
});
</script>
