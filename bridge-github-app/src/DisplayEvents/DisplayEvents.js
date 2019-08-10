import React from 'react';

const ListEventItem = ({eventInfo}) => {
  return (
    <li >
      <a href={eventInfo.repo.url}>
        {eventInfo.repo.name}
      </a>
    </li>
  )
};

const DisplayEventList = ({title, eventList}) => {
  return(
    <>
    <h2>{title}</h2>
    <ul>
      {eventList.map(eventInfo => <ListEventItem key={eventInfo.id.toString()}
        value={eventInfo.id} eventInfo={eventInfo}/>)}
    </ul>
    </>

  );
}

const DisplayEvents = ({title, userEvents}) =>  {
  return (
    <>
      <h1>{title}</h1>
      {Object.keys(userEvents).map((eventType) => <DisplayEventList  title={eventType} eventList={userEvents[eventType]}/>)}
    </>
  )
}
export { DisplayEvents };