import axios from "axios";
import { CART_ENDPOINT } from "../constants/endpoints";
import { isEmpty } from "../constants/isEmpty";
import { getApiCartConfig } from "./api";
import { getSession, storeSession } from "./session";

export const addToCart = (productId, qty = 1) => {
  const storedSession = getSession();
  const addOrViewCartConfig = getApiCartConfig();

  axios
    .post(
      CART_ENDPOINT,
      {
        product_id: productId,
        quantity: qty,
      },
      addOrViewCartConfig
    )
    .then((res) => {
      if (!isEmpty(storedSession)) {
        storeSession(res.headers["x-wc-session"]);
      }
      viewCart();
    })
    .catch((err) => {
      console.log("error", err);
    });
};

export const viewCart = () => {
  const addViewCartConfig = getApiCartConfig();

  axios
    .get(CART_ENDPOINT, addViewCartConfig)
    .then((res) => {
      console.log("res", res);
    })
    .catch((err) => {
      console.log("error", err);
    });
};
