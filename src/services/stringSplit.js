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

export const chunkConditions = (rentalConditions) => {
  const conditionsArr = rentalConditions.split("\n");
  const conditionsObject = {
    maxAge: conditionsArr[0],
    validDrive: conditionsArr[1],
    security: conditionsArr[2],
  };
  return conditionsObject;
};

export const chunkMaxAge = (maxAge) => {
  const splitMaxAgeStrin = maxAge.split(":");
  const ageObject = {
    title: splitMaxAgeStrin[0].trim(),
    age: splitMaxAgeStrin[1].trim(),
  };
  return ageObject;
};
