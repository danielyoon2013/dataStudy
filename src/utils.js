const getDateOfTwoDayBefore = () => {
  const twoDaysAgo = new Date((new Date()).valueOf() - 1000*60*60*24*2);
  const year = twoDaysAgo.getFullYear();
  const month = twoDaysAgo.getMonth() + 1; // Jan starts with index 0
  const date =  twoDaysAgo.getDate();
  return `${year}${month < 10 ? '0' + month : month}${date < 10 ? '0' + date : date}`
}

module.exports.getDateOfTwoDayBefore = getDateOfTwoDayBefore;
