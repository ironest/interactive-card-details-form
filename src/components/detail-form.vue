<template>
  <form class="credit-card-info">
    <label for="card-holder-name">Cardholder name</label>
    <input
      type="text"
      id="card-holder-name"
      name="card-holder-name"
      placeholder="e.g. Jane Appleseed"
    />

    <label for="card-number">Card number</label>
    <input
      type="text"
      id="card-number"
      name="card-number"
      placeholder="e.g. 1234 5678 9123 0000"
    />

    <div class="double-column">
      <div class="card-expiration">
        <label for="card-expiration-month">Exp. date (MM/YY)</label>
        <input
          type="text"
          id="card-expiration-month"
          name="card-expiration-month"
          placeholder="MM"
        />
        <input
          type="text"
          id="card-expiration-year"
          name="card-expiration-year"
          placeholder="YY"
        />
      </div>

      <div class="card-cvc">
        <label for="card-cvc">CVC</label>
        <input
          type="text"
          id="card-cvc"
          name="card-cvc"
          placeholder="e.g. 123"
        />
      </div>
    </div>

    <button>Confirm</button>
  </form>
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
  }

  input {
    border: 1px solid $color-light;
    border-radius: 8px;
    padding: 11px 16px;
    margin-bottom: 20px;

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

  button {
    background-color: $color-very-dark;
    color: $color-white;
    padding: 15px;
    border: 0;
    border-radius: 8px;
    margin-top: 8px;
  }
}

@media only screen and (min-width: 1024px) {
  form {
    width: 380px;
  }
}
</style>
