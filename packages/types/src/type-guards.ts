/**
 * Check whether an argument is an array
 * where each member is of the specified type
 *
 * @param array - array to check
 * @param check - a type guard to use when validating each item
 * @public
 */
export function isTypedArray<T>(
  array: unknown,
  check: (x: any) => x is T
): array is T[] {
  if (!Array.isArray(array)) return false;
  const hasNoMismatch = array.every((item) => check(item));
  return hasNoMismatch;
}
