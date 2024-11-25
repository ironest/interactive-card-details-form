<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();

// Get the last two digits of the current year dynamically
const currentYear = new Date().getFullYear() % 100;

const validationSchema = toTypedSchema(
  z.object({
    "card-holder-name": z
      .string()
      .min(3, "Invalid name")
      .max(100, "This seems too long"),
    "card-number": z
      .string()
      .min(1, "Required")
      .regex(/^[0-9\s]*$/, "Wrong format, numbers only")
      .refine((providedNumber) => {
        const cleanStr = providedNumber.replace(/ /g, "");
        return cleanStr.length === 16;
      }, "Must be 16 digits"),
    "card-expiration-month": z
      .string()
      .min(1, "Invalid month")
      .max(2, "Invalid month")
      .regex(/^[0-9\s]*$/, "Invalid month")
      .refine((providedMonth) => {
        const num = parseInt(providedMonth, 10);
        return num >= 1 && num <= 12;
      }, "Invalid month"),
    "card-expiration-year": z
      .string()
      .min(2, "Invalid year")
      .regex(/^[0-9\s]*$/, "Invalid year")
      .refine((providedYear) => {
        const num = parseInt(providedYear, 10);
        return num >= currentYear;
      }, "Invalid year"),
    "card-cvc": z
      .string()
      .length(3, "Must be 3 digits")
      .regex(/^\d+$/, "Numbers only"),
  })
);

// Handle field value updates
const updateField = (fieldName: string, value: string) => {
  store.dispatch("updateField", { field: fieldName, value });
};

const formattedCardNumber = ref("");

// Watch for changes in the card number and format it
watch(formattedCardNumber, (newValue) => {
  // Remove non-numeric characters and format every 4 digits
  formattedCardNumber.value = newValue
    .replace(/ /g, "")
    .replace(/\D/g, "")
    .replace(/(\d{4})(?=\d)/g, "$1 ")
    .trim();
});

function onSubmit() {
  store.dispatch("updateField", { field: "submitted", value: true });
}
</script>

<template>
  <Form
    :validation-schema="validationSchema"
    v-slot="{ meta, handleSubmit }"
    as="div"
  >
    <form @submit="handleSubmit($event, onSubmit)">
      <label for="card-holder-name">Cardholder name</label>
      <Field
        type="text"
        id="card-holder-name"
        name="card-holder-name"
        placeholder="e.g. Jane Appleseed"
        @update:modelValue="(value) => updateField('cardHolderName', value)"
      />
      <ErrorMessage name="card-holder-name" />

      <label for="card-number">Card number</label>
      <Field
        type="text"
        id="card-number"
        name="card-number"
        placeholder="e.g. 1234 5678 9123 0000"
        v-model="formattedCardNumber"
        @update:modelValue="(value) => updateField('cardNumber', value)"
      />
      <ErrorMessage name="card-number" />

      <div class="double-column">
        <div class="card-expiration">
          <label for="card-expiration-month">Exp. date (MM/YY)</label>
          <Field
            type="text"
            id="card-expiration-month"
            name="card-expiration-month"
            placeholder="MM"
            @update:modelValue="
              (value) => updateField('cardExpirationMonth', value)
            "
          />
          <Field
            type="text"
            id="card-expiration-year"
            name="card-expiration-year"
            placeholder="YY"
            @update:modelValue="
              (value) => updateField('cardExpirationYear', value)
            "
          />
        </div>

        <div class="card-cvc">
          <label for="card-cvc">CVC</label>
          <Field
            type="text"
            id="card-cvc"
            name="card-cvc"
            placeholder="e.g. 123"
            @update:modelValue="(value) => updateField('cardCvc', value)"
          />
        </div>
      </div>
      <div class="one-line-errors">
        <div class="quarter">
          <ErrorMessage name="card-expiration-month" />
        </div>
        <div class="quarter">
          <ErrorMessage name="card-expiration-year" />
        </div>
        <div class="half">
          <ErrorMessage name="card-cvc" />
        </div>
      </div>

      <button :disabled="!meta.valid">Confirm</button>
    </form>
  </Form>
</template>
<style scoped lang="scss">
@use "../assets/variables" as *;

form {
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    color: $color-very-dark;
    font-size: 12px;
    letter-spacing: 2px;
    margin-bottom: 9px;
    text-transform: uppercase;
    margin-top: 20px;
  }

  input {
    border: 1px solid $color-light;
    border-radius: 8px;
    padding: 11px 16px;

    &::placeholder {
      color: $color-light;
      opacity: 1;
    }

    &::-ms-input-placeholder {
      color: $color-light;
    }

    /* Hide number input controls in most browsers */
    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type="number"] {
      -moz-appearance: textfield;
      appearance: textfield;
    }

    &:hover {
      border: 1px solid $color-dark;
    }
  }

  .double-column {
    display: flex;
    column-gap: 11px;

    .card-expiration {
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      column-gap: 8px;
      label {
        width: 100%;
      }
      input {
        width: calc((100% - 8px) / 2);
      }
    }
    .card-cvc {
      width: 50%;
      display: flex;
      flex-direction: column;
    }
  }

  span[role="alert"] {
    color: $color-error;
    font-size: 12px;
    margin-top: 8px;
  }

  button {
    background-color: $color-very-dark;
    color: $color-white;
    padding: 15px;
    border: 0;
    border-radius: 8px;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
      background-color: $color-dark;
      color: $color-very-dark;
    }
  }

  .one-line-errors {
    display: flex;
    column-gap: 9px;

    .quarter {
      width: 23%;
    }
    .half {
      width: 50%;
    }
  }
}

@media only screen and (min-width: 1024px) {
  form {
    width: 380px;
  }
}
</style>
