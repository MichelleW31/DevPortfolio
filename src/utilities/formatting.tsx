export const capitalizeFirstLetter = (word: string) => {
  // Capitalize first letter and then add to the rest of the word
  return word.charAt(0).toUpperCase() + word.slice(1);
};
