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
    <li >
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
    <li >
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
    <li >
      <span>
        {GenerateLink(eventInfo.repo)}
      </span>
    </li>
  )
};

const DisplayEventList = ({title, eventList}) => {
  return(
    <>
    <h2>{title}</h2>
    <ul>
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

const DisplayEvents = ({title, userEvents, setIsLoading}) =>  {
  setIsLoading(false);
  return (
    <>
      <h1>{title}</h1>
      {Object.keys(userEvents).map((eventType) => <DisplayEventList  title={eventType} eventList={userEvents[eventType]}/>)}
    </>
  )
}
export { DisplayEvents };