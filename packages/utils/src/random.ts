/**
 * Get a random item from an array of items
 * @param array The array of items
 */
export const getRadomItem = <T>(array: T[]): T => {
  return array[Math.trunc(Math.random() * array.length)];
};
