<script setup lang="ts">
import CreditCardList from "./components/credit-card-list.vue";
import DetailForm from "./components/detail-form.vue";
import SideBar from "./components/side-bar.vue";
import TyMessage from "./components/ty-message.vue";
import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <div class="app-container">
    <SideBar>
      <CreditCardList />
    </SideBar>
    <main>
      <TyMessage v-if="store.getters.submitted" />
      <DetailForm v-else />
    </main>
  </div>
</template>

<style scoped lang="scss">
@use "./assets/variables" as *;
.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;

  main {
    padding: 90px 24px 45px;
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;
    width: 100%;

    main {
      margin-left: 150px;
      flex-grow: 1;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
