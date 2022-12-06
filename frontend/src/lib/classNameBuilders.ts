export const useKeyOnly = (val: boolean, key: string) => val && key;

export const useValueAndKey = (val: boolean | string, key: string) =>
  val && val !== true && `${val} ${key}`;

export const useKeyOrValueAndKey = (val: boolean | string, key: string) =>
  val && (val === true ? key : `${val} ${key}`);
