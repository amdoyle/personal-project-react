import React from 'react';
import ReactDOM from 'react-dom';

import {render, waitForElement, createEvent, fireEvent, cleanup} from '@testing-library/react';
import {SearchInputForm} from './SearchInputForm';

const submitEvent = jest.fn(()=>[]);
const getGitHubUserEvents = jest.fn(()=>{})
const setGitHubUsername = jest.fn(()=>'');
const setUserEvents = jest.fn(()=>{});
const dataFilters = [];
const setErrorMessage = jest.fn(()=>'');
const setIsLoading = jest.fn(()=>{});

// test('<SearchInputForm>', ()=>{
//   const div = document.createElement('div');
//   const {getByText, getByTestId} = render(<SearchInputForm />, div)

//   fireEvent.click(getByText('Get User'));
//   fireEvent.submit(getByTestId('get-github-user'));
//   expect(submitEvent).toHaveBeenCalledTimes(1);
//   expect(getGitHubUserEvents).toHaveBeenCalledTimes(1);
//   expect(getGitHubUserEvents).toHaveBeenCalledWith(1);
// });