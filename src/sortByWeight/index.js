/* eslint-disable-next-line */
const convert = item => {
  return item.split('').map(item => +item).reduce((a, b) => a + b);
};
export const sortByWeight = arr => {
  return arr.sort((a,b) => {
    return convert(a) - convert(b);
  });
};
