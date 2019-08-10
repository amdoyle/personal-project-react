import React from 'react';

const ErrorComponent = ({setIsLoading, errorMessage = 'An Error Has Occured'}) => {
  setIsLoading(false);
  return (
    <div>
      <p>{errorMessage}</p>
    </div>
  )
}

export {ErrorComponent}