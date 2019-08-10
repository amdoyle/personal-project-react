import React from 'react';

const SearchInputForm = ({setGitHubUsername, setUserEvents, dataFilters}) => {

  const getGitHubUserEvents = (username) => fetch(`https://api.github.com/users/${username}/events`)
                                        .then(response => response.json());
  const changeEvent =(event)=> {
  }

  const transformUserEventData = (data, dataFilters) => {
    // console.log(data);
    // console.log(data.filter((event) => dataFilters.includes(event.type) ? event : null))
    return data.filter((event) => {
      if(dataFilters.includes(event.type)) {
        return event;
      }
    })
          .reduce((startValue, item) => {
            startValue[`${item.type}`] = startValue[`${item.type}`] ? [...startValue[`${item.type}`], item] : [item];
            return startValue;
            },
          {});
  };

  const submitEvent = (event)=> {
    event.preventDefault();
    const inputValue = event.currentTarget.querySelector('input[type=search]').value;
    setGitHubUsername(inputValue);
    getGitHubUserEvents(inputValue).then(data => {
      const transformedData = transformUserEventData(data, dataFilters);
      return setUserEvents(transformedData);
    });
  }

  return (
  <form action="get" method="get" onSubmit={submitEvent}>
    <label>GitHub Username:
      <input type="search" id="get-github-user-data"
       aria-label="Input GitHub Username to Retrieve Data" placeholder="Type something..."onChange={changeEvent}/>
    </label>
    <button>Get User</button>
  </form>
  );
};


export  { SearchInputForm };