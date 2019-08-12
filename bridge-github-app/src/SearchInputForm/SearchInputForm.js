import React from 'react';
import { getGitHubUserEvents } from './gitHubFetchCaller';

const Button = ({label, type}) => <button type={type}>{label}</button>;
const Input = ({placeholder, type}) => <input placeholder={placeholder} type={type} />;
const InputWithLabel = ({label, type, placeholder}) => {
  return (
    <label>{label}
      <Input type={type} placeholder={placeholder}/>
    </label>
  )
}

const SearchInputForm = ({setErrorMessage, setIsLoading, setGitHubUserName, setUserEvents, dataFilters}) => {
  const submitEvent = (event)=> {
    event.preventDefault();
    setIsLoading(true);
    const usernameInput = event.currentTarget.querySelector('input[type=search]').value;
    setGitHubUserName(usernameInput);
    return getGitHubUserEvents(usernameInput, dataFilters, setErrorMessage)
                            .then(transformedData => setUserEvents(transformedData))
                            .catch(error => setErrorMessage(error.message));
  }


  return (
    <form onSubmit={submitEvent} data-testid="get-github-user" >
      <InputWithLabel label="GitHub Username:" type="search" placeholder="Type something..." />
      <Button label='Get User' type='submit'/>
    </form>
  );
};


export  { SearchInputForm };