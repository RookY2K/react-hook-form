import isObject from './isObject';

export function deepMerge<
  T extends Record<keyof T, any>,
  U extends Record<keyof U, any>
>(target: T, source: U): T & U {
  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  for (const key in source) {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = deepMerge(targetValue, sourceValue);
    } else {
      target[key] = sourceValue;
    }
  }

  return target;
}
