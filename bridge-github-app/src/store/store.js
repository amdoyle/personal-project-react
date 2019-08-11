import { createStore, applyMiddleware } from "redux";

import { userEventsReducer } from './gitHubUserEvents.reducer'
import reduxThunk from "redux-thunk";
import logger from "redux-logger";

// Create a redux store with the catFactsReducer
// Add Redux middleware:
//    - logger
//    - devtools
//    - thunks

export const store = createStore(userEventsReducer, applyMiddleware(logger, reduxThunk));

