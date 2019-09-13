export const getUnique = <T extends {}>(items: T[], key: keyof T) => {
  return [...new Set(items.map(item => item[key]))];
};
