<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
// import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { ref, watch } from "vue";

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
      .length(19, "Must be 16 digits"),
    "card-expiration-month": z
      .string()
      .min(1, "Required")
      .max(2, "2 digits")
      .regex(/^\d+$/, "Numbers only"),
    "card-expiration-year": z
      .string()
      .min(1, "Required")
      .max(2, "2 digits only")
      .regex(/^\d+$/, "Numbers only"),
    "card-cvc": z
      .string()
      .length(3, "Must be 3 digits")
      .regex(/^\d+$/, "Numbers only"),
  })
);

const formattedCardNumber = ref("");

// Watch for changes in the card number and format it
watch(formattedCardNumber, (newValue) => {
  // Remove non-numeric characters and format every 4 digits
  formattedCardNumber.value = newValue
    .replace(/\D/g, "")
    .replace(/(\d{4})(?=\d)/g, "$1 ")
    .trim();
});
</script>

<template>
  <Form :validation-schema="validationSchema" @submit.prevent>
    <label for="card-holder-name">Cardholder name</label>
    <Field
      type="text"
      id="card-holder-name"
      name="card-holder-name"
      placeholder="e.g. Jane Appleseed"
    />
    <ErrorMessage name="card-holder-name" />

    <label for="card-number">Card number</label>
    <Field
      type="text"
      id="card-number"
      name="card-number"
      placeholder="e.g. 1234 5678 9123 0000"
      inputmode="numeric"
      v-model="formattedCardNumber"
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
          inputmode="numeric"
        />
        <Field
          type="text"
          id="card-expiration-year"
          name="card-expiration-year"
          placeholder="YY"
          inputmode="numeric"
        />
      </div>

      <div class="card-cvc">
        <label for="card-cvc">CVC</label>
        <Field
          type="text"
          id="card-cvc"
          name="card-cvc"
          placeholder="e.g. 123"
          inputmode="numeric"
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

    <button>Confirm</button>
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
