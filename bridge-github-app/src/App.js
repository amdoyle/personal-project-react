
import React, { useState, useEffect } from 'react';
import './App.css';
import { SearchInputForm } from './SearchInputForm/SearchInputForm';
import { DisplayEvents } from './DisplayEvents/DisplayEvents.js';
// Trying this with React Hooks as I've been using classes and lifeycle methods for the other assignment

const App = () => {

  const [gitHubUsername, setGitHubUsername] = useState('');
  const [userEvents, setUserEvents] = useState({});
  const [dataFilters, setDataFilters] = useState(['ForkEvent', 'PullRequestEvent']);

  useEffect (()=>{
  })

  return(
      <div className="App">
        {Object.keys(userEvents).length ?
          <DisplayEvents title={gitHubUsername} userEvents={userEvents} />
        :
          <SearchInputForm setGitHubUsername={setGitHubUsername} setUserEvents={setUserEvents} dataFilters={dataFilters}/>
        }
      </div>
    );
}

export default App;
