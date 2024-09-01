export const printFruits = (fruits: string[]): void => {
  fruits.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit}`);
  });
};
