/* eslint-disable-next-line */
export const doubleNum = num => {
  const str = num.toString();
  const regex = new RegExp('.{1,' + str.length / 2 + '}', 'g');
  if ((str.length & 1)) {
    return num * 2;
  }
  return str.match(regex).every((val, i, arr) => val === arr[0] ) ? num : num * 2;
};
