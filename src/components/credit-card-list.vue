<template>
  <div class="credit-card-list">
    <CreditCard side="back">
      <template #cvc>
        <p class="cvc">000</p>
      </template>
    </CreditCard>

    <CreditCard side="front">
      <template #logo>
        <img
          class="credit-card-logo"
          src="/public/images/card-logo.svg"
          alt=""
        />
      </template>

      <template #serial>
        <p class="credit-card-serial">0000 0000 0000 0000</p>
      </template>

      <template #footer>
        <p class="credit-card-footer">
          <span class="holder">Jane Appleseed</span>
          <span class="exp">00/00</span>
        </p>
      </template>
    </CreditCard>
  </div>
</template>
<style lang="scss" scoped>
.credit-card-list {
  height: 250px;
  width: 343px;
  flex-grow: 0.3;
  position: relative;
}

.credit-card-logo {
  width: 54px;
  height: 30px;
}

.credit-card-serial {
  margin-top: 10px;
  letter-spacing: 2.2px;
}
.credit-card-footer {
  letter-spacing: 1.29px;
  font-size: 9px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
}

@media only screen and (min-width: 1024px) {
  .credit-card-list {
    position: absolute;
    margin: 0;
    left: min(264px, 100vw/6);
    margin-left: -100px;
    padding: 0;
    height: 527px;
    width: 541px;
    display: flex;
    flex-direction: column-reverse;
    gap: 37px;
  }
  .credit-card-logo {
    width: 84px;
    height: 47px;
  }

  .credit-card-serial {
    margin-top: 20px;
    letter-spacing: 3.42px;
    font-size: 28px;
  }
  .credit-card-footer {
    letter-spacing: 2px;
    font-size: 14px;
  }
}
</style>

<script setup>
import CreditCard from "./credit-card.vue";
</script>
