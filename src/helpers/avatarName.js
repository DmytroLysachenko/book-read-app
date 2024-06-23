export const avatarName = (name) => {
  const array = name.toUpperCase().split(' ');
  if (array.length > 1) {
    return String(array[0][0] + array[1]?.[0]);
  }
  return String(array[0][0]);
};
