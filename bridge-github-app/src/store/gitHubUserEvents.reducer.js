import { USER_EVENTS_ACTION_TYPES } from "./gitHubUserEvents.actions";

// Define the state of the cat facts reducer
export const INITIAL_USER_EVENT_STATE = {
  gitHubUserName: '',
  userEvents: [],
  dataFilters: ['ForkEvent', 'PullRequestEvent'],
  errorMessage: '',
  isLoading: false
};

// Add action cases to the catFactsReducer
export const userEventsReducer = (
  state = INITIAL_USER_EVENT_STATE,
  action
) => {
  switch (action.type) {
    case USER_EVENTS_ACTION_TYPES.SET_GITHUB_USERNAME: {
      return {
        ...state,
        gitHubUserName: action.payload
      };
    }
    case USER_EVENTS_ACTION_TYPES.SET_USER_EVENTS: {
      return {
        ...state,
        userEvents: action.payload
      };
    }
    case USER_EVENTS_ACTION_TYPES.SET_DATA_FILTERS: {
      return {
        ...state,
        dataFilters: action.payload
      };
    }
    case USER_EVENTS_ACTION_TYPES.SET_ERROR_MESSAGE: {
      return {
        ...state,
        errorMessage: action.payload
      };
    }
    case USER_EVENTS_ACTION_TYPES.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
