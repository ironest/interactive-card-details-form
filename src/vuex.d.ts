/* eslint-disable import/extensions */

// Workaround for incorrectly exported types from 'vuex'.
// See https://github.com/vuejs/vuex/issues/2213
declare module "vuex" {
  export * from "vuex/types/index.d.ts";
  export * from "vuex/types/helpers.d.ts";
  export * from "vuex/types/logger.d.ts";
  export * from "vuex/types/vue.d.ts";
}
