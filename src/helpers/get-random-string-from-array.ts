export const getRandomStringFromArray = (array: string[]): string => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
