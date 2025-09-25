function convertNumberOfPagesInArray(number) {
  let numberOfPages = [];

  for (let i = 1; i < number + 1; i++) {
    numberOfPages.push(i);
  }

  return numberOfPages;
}

export default convertNumberOfPagesInArray;
