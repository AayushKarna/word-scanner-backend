module.exports = (searchIn, searchTermsArr) => {
  searchIn = searchIn.trim().toLowerCase();

  const isPresent = searchTermsArr.some(term =>
    searchIn.includes(term.toLowerCase())
  );

  return isPresent;
};
