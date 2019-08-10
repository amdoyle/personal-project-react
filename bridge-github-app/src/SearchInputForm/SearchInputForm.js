import React from 'react';

const SearchInputForm = ({setGitHubUsername, setUserEvents, dataFilters, setErrorMessage, setIsLoading}) => {
  const getGitHubUserEvents = (username) => fetch(`https://api.github.com/users/${username}/events`)
                                        .then(response =>  {

                                          if(response.status === 200) {
                                            return response.json();
                                          }

                                          if(response.status === 404) {
                                            throw new Error(`User ${username} not found. Check your input and try again.`);
                                          }
                                        })
                                        .catch(error => setErrorMessage(error.message));

  const transformUserEventData = (data, dataFilters) => {
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
    setGitHubUsername(inputValue);
    getGitHubUserEvents(inputValue).then(data => {
      // check that there is data before continuing
      if(!data) return;
      const transformedData = transformUserEventData(data, dataFilters);
      return setUserEvents(transformedData);
    });
  }

  return (
    <form action="get" method="get" onSubmit={submitEvent}>
      <label>GitHub Username:
        <input type="search" id="get-github-user-data"
        aria-label="Input GitHub Username to Retrieve Data" placeholder="Type something..."/>
      </label>
      <button>Get User</button>
    </form>
  );
};


export  { SearchInputForm };