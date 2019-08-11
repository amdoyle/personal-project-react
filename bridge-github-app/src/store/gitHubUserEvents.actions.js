
// Define Action types for the GitHub User Events
export const USER_EVENTS_ACTION_TYPES = {
  SET_GITHUB_USERNAME: "set github user",
  SET_USER_EVENTS: 'set user events',
  SET_DATA_FILTERS: 'set data filters',
  SET_ERROR_MESSAGE: 'set error message',
  SET_IS_LOADING: 'set is loading'
};

// Create and export action creator functions for each action
export const setGitHubUserName = (name) => {
  return {
    type: USER_EVENTS_ACTION_TYPES.SET_GITHUB_USERNAME,
    payload: name
  };
};

export const setUserEvents = (events) => ({
  type: USER_EVENTS_ACTION_TYPES.SET_USER_EVENTS,
  payload: events
})

export const setDataFilters = (filters) => ({
  type: USER_EVENTS_ACTION_TYPES.SET_DATA_FILTERS,
  payload: filters
})

export const setErrorMessage = (message) => ({
  type: USER_EVENTS_ACTION_TYPES.SET_ERROR_MESSAGE,
  payload: message
})

export const setIsLoading = (isLoading) => {
  return {
    type: USER_EVENTS_ACTION_TYPES.SET_IS_LOADING,
    payload: isLoading
  }
};