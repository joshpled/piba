const toCapitalizeEach = (word) => {
  if (word === '') {
    return word;
  }
  return word
    .split('_')
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(' ');
};

const toCamelCase = (str) => {
  let newStr = '';
  if (str) {
    let wordArr = str.split(/[-_]/g);
    for (let i in wordArr) {
      if (i > 0) {
        newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
      } else {
        newStr += wordArr[i];
      }
    }
  } else {
    return newStr;
  }
  return newStr;
};

export { toCapitalizeEach, toCamelCase };
