export const storeSession = (session) => {
  localStorage.setItem("x-wc-session", session);
};

export const getSession = () => {
  return localStorage.getItem("x-wc-session");
};
