import React from 'react';
const SearchInputForm = ({setErrorMessage, getGitHubUserEvents, setIsLoading, setGitHubUserName, setUserEvents, dataFilters}) => {

  const transformUserEventData = (dataFilters, data = []) => {
    return data.filter((event) => dataFilters.includes(event.type) ? event : null)
                .reduce((startValue, item) => {
                  startValue[`${item.type}`] = startValue[`${item.type}`] ? [...startValue[`${item.type}`], item] : [item];
                  return startValue;
                  },
                {});
  };

  const submitEvent = (event)=> {
    event.preventDefault();
    setIsLoading(true);
    const inputValue = event.currentTarget.querySelector('input[type=search]').value;
    setGitHubUserName(inputValue);
    getGitHubUserEvents(inputValue).then((response) => {
      if(response.status === 200) {
        return response.json();
      }

      if(response.status === 404) {
        throw new Error(`User ${inputValue} not found. Check your input and try again.`);
      }
    })
    .then(data => {
      // check that there is data before continuing
      if(!data) return;
      const transformedData = transformUserEventData(dataFilters, data);
      // check that user has the events are looking for
      if(Object.keys(transformedData).length === 0) setErrorMessage(`${inputValue} does not have any events.`);
      return setUserEvents(transformedData);
    })
    .catch(error => setErrorMessage(error.message));;
  }

  return (
    <form onSubmit={submitEvent} data-testid="get-github-user" >
      <label>GitHub Username:
        <input type="search" id="get-github-user-data"
        aria-label="Input GitHub Username to Retrieve Data" placeholder="Type something..."/>
      </label>
      <input type="submit" value="Get User" />
    </form>
  );
};


export  { SearchInputForm };