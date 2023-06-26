function checkSpam(str) {
  let lowStr = str.toLowerCase();

  if(lowStr.includes("1xbet") || lowStr.includes("xxx") ) {
    return true;
  };
  return false;
}
checkSpam('1XbeT now');