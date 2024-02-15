export const chunkAddressCity = (address) => {
  if (!address) {
    return;
  }
  const adressArray = address.split(",");
  adressArray.shift();
  return adressArray[0];
};
export const chunkAddressCountry = (address) => {
  if (!address) {
    return;
  }
  const adressArray = address.split(",");
  adressArray.shift();
  return adressArray[1].trim();
};

export const firstLetterUpCase = (type) => {
  const lowerCaseType = type.toLowerCase();
  return lowerCaseType[0].toUpperCase() + lowerCaseType.slice(1);
};
