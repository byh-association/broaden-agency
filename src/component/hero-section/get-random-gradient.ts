import { getRandomStringFromArray } from "../../helpers/get-random-string-from-array";

const GRADIENTS = [
  "gradient-orange-yellow",
  "gradient-orange-red",
  "gradient-blue-red",
  "gradient-green-yellow",
  "gradient-pink-purple",
];

export const getRandomGradient = () => {
  return getRandomStringFromArray(GRADIENTS);
};
