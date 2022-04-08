import { getSession } from "./session";
import { isEmpty } from "../constants/isEmpty";

export const getApiCartConfig = () => {
  const config = {
    headers: {
      "X-Headless-CMS": true,
    },
  };

  const storedSession = getSession();

  if (!isEmpty(storedSession)) {
    config.headers["x-wc-session"] = storedSession;
  }

  return config;
};
