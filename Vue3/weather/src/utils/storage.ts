/*
  storage.ts
  Utility skeleton for localStorage/sessionStorage helpers.
  TODO: 实现 getItem / setItem / removeItem 等包装函数。
  仅包含类型签名与占位导出，不实现逻辑。
*/

export interface StorageHelper {
  getItem: <T = any>(key: string) => T | null;
  setItem: <T = any>(key: string, value: T) => void;
  removeItem: (key: string) => void;
}

export const storage: StorageHelper = {
  getItem() {
    throw new Error("Not implemented");
  },
  setItem() {
    throw new Error("Not implemented");
  },
  removeItem() {
    throw new Error("Not implemented");
  },
};
