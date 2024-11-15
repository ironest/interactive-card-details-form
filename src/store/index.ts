import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      cardHolderName: "Jane Appleseed",
      cardNumber: "0000 0000 0000 0000",
      cardExpirationMonth: "00",
      cardExpirationYear: "00",
      cardCvc: "000",
    };
  },

  mutations: {
    setField(
      state,
      { field, value }: { field: keyof typeof state; value: string }
    ) {
      state[field] = value;
    },
  },
  actions: {
    updateField(ctx, payload) {
      ctx.commit("setField", payload);
    },
  },
  getters: {
    cardHolderName(state) {
      return state.cardHolderName;
    },
    cardNumber(state) {
      return state.cardNumber;
    },
    cardExpirationMonth(state) {
      return state.cardExpirationMonth;
    },
    cardExpirationYear(state) {
      return state.cardExpirationYear;
    },
    cardCvc(state) {
      return state.cardCvc;
    },
  },
});
