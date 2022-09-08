export const getSavedBusinessIds = () => {
  const savedBusinessIds = localStorage.getItem('saved_business')
    ? JSON.parse(localStorage.getItem('saved_business'))
    : [];

  return savedBusinessIds;
};

export const saveBusinessIds = (businessIdArr) => {
  if (businessIdArr.length) {
    localStorage.setItem('saved_business', JSON.stringify(businessIdArr));
  } else {
    localStorage.removeItem('saved_business');
  }
};

export const removeBusinessId = (businessId) => {
  const savedBusinessIds = localStorage.getItem('saved_business')
    ? JSON.parse(localStorage.getItem('saved_business'))
    : null;

  if (!savedBusinessIds) {
    return false;
  }

  const updatedSavedBusinessIds = savedBusinessIds?.filter((savedBusinessId) => savedBusinessId !== businessId);
  localStorage.setItem('saved_business', JSON.stringify(updatedSavedBusinessIds));

  return true;
};
