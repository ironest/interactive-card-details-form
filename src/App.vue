<script setup lang="ts"></script>

<template>
  <div class="app-container">
    <div class="side-bar">
      <div class="cc-container">
        <div class="img back">
          <p class="cvc">000</p>
        </div>
        <div class="img front">
          <img
            class="credit-card-logo"
            src="/public/images/card-logo.svg"
            alt=""
          />
          <p class="credit-card-serial">0000 0000 0000 0000</p>
          <p class="credit-card-footer">
            <span class="holder">Jane Appleseed</span>
            <span class="exp">00/00</span>
          </p>
        </div>
      </div>
    </div>
    <main>
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
    </main>
  </div>
</template>

<style scoped lang="scss">
@use "./assets/variables" as *;
.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;

  .side-bar {
    background-image: url("/images/bg-main-mobile.png");
    background-repeat: no-repeat;
    background-position: top right;
    background-color: #21092f;
    height: 240px;
    padding: 32px 16px 0;
    display: flex;
    justify-content: center;

    .cc-container {
      height: 250px;
      width: 343px;
      flex-grow: 0.3;
      position: relative;

      .img {
        position: absolute;
        width: 286px;
        height: 157px;
        background-repeat: no-repeat;
        background-size: contain;
        color: white;
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
      }
    }
  }

  main {
    padding: 90px 24px 45px;
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
        color: white;
        padding: 15px;
        border: 0;
        border-radius: 8px;
        margin-top: 8px;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;
    width: 100%;

    .side-bar {
      background-image: url("/images/bg-main-desktop.png");
      background-repeat: no-repeat;
      background-position: top left;
      background-color: #21092f;
      width: 483px;
      height: 100%;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      position: relative;

      .cc-container {
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
      }
    }

    main {
      margin-left: 150px;
      flex-grow: 1;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      form {
        width: 380px;
      }
    }
  }
}
</style>
