
import React, { useState, useEffect } from 'react';
import './App.css';
import { SearchInputForm } from './SearchInputForm/SearchInputForm';
import { DisplayEvents } from './DisplayEvents/DisplayEvents.js';
import { ErrorComponent } from './ErrorComponent/ErrorComponent';
import { LoadingComponent } from './LoadingComponent/LoadingComponent';

// Trying this with React Hooks as I've been using classes and lifeycle methods for the other assignment
const App = () => {

  const [gitHubUsername, setGitHubUsername] = useState('');
  const [userEvents, setUserEvents] = useState({});
  const [dataFilters] = useState(['ForkEvent', 'PullRequestEvent']);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState('');

  useEffect (()=>{
    // If thre is an errorMessage
    // And a gitHub Username was been provided
    // And that user exists and has events
    // Clear the error message
    if(errorMessage && gitHubUsername && Object.keys(userEvents).length) {
      setErrorMessage('');
    }
  })

  return(
      <div className="App">
        {errorMessage ? <ErrorComponent errorMessage={errorMessage} setIsLoading=
          {setIsLoading} /> : null}
        {Object.keys(userEvents).length ?
          <DisplayEvents title={gitHubUsername} userEvents={userEvents} setIsLoading=
          {setIsLoading}/>
        :
          <SearchInputForm setGitHubUsername={setGitHubUsername} setUserEvents={setUserEvents} dataFilters={dataFilters} setErrorMessage={setErrorMessage} setIsLoading=
          {setIsLoading}/>
        }

        {isLoading ? <LoadingComponent /> : null}

      </div>
    );
}

export default App;
