
import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { SearchInputForm } from './SearchInputForm/SearchInputForm';
import { DisplayEvents } from './DisplayEvents/DisplayEvents.js';
import { ErrorComponent } from './ErrorComponent/ErrorComponent';
import { LoadingComponent } from './LoadingComponent/LoadingComponent';
import {
  setGitHubUserName,
  setUserEvents,
  setErrorMessage,
  setIsLoading } from "./store/gitHubUserEvents.actions";

class App extends React.Component {

  render () {
    const {errorMessage , isLoading, userEvents, gitHubUserName} = this.props;
      return (
          <div className="App">
            { errorMessage ? <ErrorComponent errorMessage={errorMessage} setIsLoading={this.props.setIsLoading}/> : '' }

            {Object.keys(userEvents).length ?
              <DisplayEvents gitHubUserName={gitHubUserName} errorMessage={errorMessage} userEvents={userEvents} setErrorMessage={this.props.setErrorMessage} setIsLoading={this.props.setIsLoading}/>
            :
              <SearchInputForm setErrorMessage={this.props.setErrorMessage} setUserEvents={this.props.setUserEvents} dataFilters={this.props.dataFilters}  setGitHubUserName={this.props.setGitHubUserName} setIsLoading={this.props.setIsLoading}/>
            }

            {isLoading ? <LoadingComponent /> : ''}
          </div>
      )
  };
}

const mapStateToProps = (state) => ({
  gitHubUserName: state.gitHubUserName,
  userEvents: state.userEvents,
  dataFilters: state.dataFilters,
  errorMessage: state.errorMessage,
  isLoading: state.isLoading
});

const mapDispatchToProps =  {
  setGitHubUserName,
  setUserEvents,
  setErrorMessage,
  setIsLoading
}

const AppContainer =  connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;