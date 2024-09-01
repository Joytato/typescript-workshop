export const getLongWords = (longWords: string[]): string[] => {
  return longWords.filter(word => word.length > 5);
};
