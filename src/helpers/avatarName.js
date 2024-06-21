export const avatarName = (name) => {
  const array = name.toUpperCase().split(' ');
  return String(array[0][0] + array[1][0]);
};
