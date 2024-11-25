import { createStore } from "vuex";

const defaultState = {
  cardHolderName: "Jane Appleseed",
  cardNumber: "0000 0000 0000 0000",
  cardExpirationMonth: "00",
  cardExpirationYear: "00",
  cardCvc: "000",
  submitted: false,
};

export const store = createStore({
  state() {
    return {
      ...defaultState,
    };
  },

  mutations: {
    setField(
      state: any,
      { field, value }: { field: keyof typeof state; value: string | boolean }
    ) {
      state[field] = value;
    },
    resetState(state) {
      Object.assign(state, defaultState);
    },
  },
  actions: {
    updateField(ctx, payload) {
      ctx.commit("setField", payload);
    },
    resetState(ctx) {
      console.log("ACTION resetState");
      ctx.commit("resetState");
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
    submitted(state) {
      return state.submitted;
    },
  },
});
