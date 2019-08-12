import React from 'react';

const GenerateLink = (linkData) => {
  return (
    <a href={linkData.url}>
      {linkData.name}
    </a>
  )
};

const ListForkedEvent = ({eventInfo}) => {
  return (
    <li className="fork-event-list-item" >
      <span>
      {GenerateLink(eventInfo.payload.forkee)}
      </span>
      <br />
      <span>
        Forked from:
        {GenerateLink(eventInfo.repo)}
      </span>
    </li>
  )
};

const ListPullRequestEvent = ({eventInfo}) => {
  return (
    <li lassName="pull-request-event-list-item" >
      <span>
        {GenerateLink(eventInfo.repo)}
      </span>
      <br />
      <span>
        Status: <a href={eventInfo.payload.pull_request.html_url}>
          {eventInfo.payload.action}</a>
      </span>
    </li>
  )
};

const ListEventItem = ({eventInfo}) => {
  return (
    <li lassName="event-list-item" >
      <span>
        {GenerateLink(eventInfo.repo)}
      </span>
    </li>
  )
};

const DisplayEventList = ({title, eventList }) => {
  return(
    <>
    <h2 className={`evnet-type-${title}`}>{title}</h2>
    <ul className={`event-list-${title}`}>
      { eventList.map(eventInfo => {
          if(eventInfo.type === 'ForkEvent') {
           return <ListForkedEvent key={eventInfo.id.toString()}
            value={eventInfo.id} eventInfo={eventInfo}/>
          } else if (eventInfo.type === 'PullRequestEvent') {
            return  <ListPullRequestEvent key={eventInfo.id.toString()}
            value={eventInfo.id} eventInfo={eventInfo}/>
          } else {
            return <ListEventItem key={eventInfo.id.toString()}
            value={eventInfo.id} eventInfo={eventInfo}/>
          }
      })}
    </ul>
    </>

  );
}

const DisplayEvents = ({gitHubUserName, userEvents, setIsLoading, errorMessage, setErrorMessage}) =>  {
  if(errorMessage && gitHubUserName && userEvents) {
    setErrorMessage('');
  }
  setIsLoading(false);
  return (
    <>
      <h1 className="username">{gitHubUserName}</h1>
      {Object.keys(userEvents).map((eventType) => <DisplayEventList  title={eventType} eventList={userEvents[eventType]}/>)}
    </>
  )
}
export { DisplayEvents };