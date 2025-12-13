/*
  debounce.ts
  Debounce utility skeleton.
  TODO: 实现 debounce 函数。
  仅包含签名与占位实现，不包含具体逻辑。
*/

export function debounce<T extends (...args: any[]) => any>(fn: T, wait = 300) {
  // TODO: 实现防抖并返回包装函数
  return ((..._args: any[]) => {
    throw new Error("Not implemented");
  }) as unknown as (...args: Parameters<T>) => void;
}
