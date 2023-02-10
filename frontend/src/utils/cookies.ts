import Cookies from "js-cookie";

const storagePrefix = "ecommerce_aware_";

const cookies = {
  get: (key: string) => Cookies.get(`${storagePrefix}${key}`),
  set: (key: string, value: string) =>
    Cookies.set(`${storagePrefix}${key}`, value, { secure: true }),
  remove: (key: string) => Cookies.remove(`${storagePrefix}${key}`),
};

export default cookies;
