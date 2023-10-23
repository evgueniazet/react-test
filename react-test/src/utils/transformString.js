export const transformString = (str) => {
  const regex = /([A-Z])/g;
  const newIconName = str.replace(regex, "-$1").toLowerCase();
  return newIconName.slice(3);
};
