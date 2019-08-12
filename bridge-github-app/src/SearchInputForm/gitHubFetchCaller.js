
const gitHubUserAPI = (username) => fetch(`https://api.github.com/users/${username}/events`);

const transformUserEventData = (dataFilters, data = []) => {
  return data.filter((event) => dataFilters.includes(event.type) ? event : null)
              .reduce((startValue, item) => {
                startValue[`${item.type}`] = startValue[`${item.type}`] ? [...startValue[`${item.type}`], item] : [item];
                return startValue;
              },{});
};

const getGitHubUserEvents = (username, dataFilters) => {
  return gitHubUserAPI(username).then(response =>  response)
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      }

      if(response.status === 404) {
        debugger;
        throw new Error(`User ${username} not found. Check your input and try again.`);
      }
    })
  .then(data => {
    // check that there is data before continuing
    debugger;
    if(!data) throw new Error(`${username} does not have any events.`);
    return  transformUserEventData(dataFilters, data);
  })
};

export { getGitHubUserEvents }