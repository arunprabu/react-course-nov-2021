import React, { useEffect, useState } from 'react';

const UserData = () => {

  const [topicName, setTopicName] = useState("Welcome to Hooks!");

  // useEffect is like componentDidMount and componentDidUpdate to a class comp
  useEffect(  () => {
    // You can send ajax req from here
    console.log('Inside useEffect Hook');
    console.log(topicName);
    document.title = topicName;
  }, [topicName]); // second arg is dependency, remove the dep and keep empty array and see the o/p 
  // if the dep is update by any means, useEffect callback would be called
  // by default useEffect will be called once automatically 
  
  return (
    <div>
      <h4>UserData | useState() and useEffect() Demo</h4>
      <p>Topic Name: {topicName}</p>

      <input type="text" value={topicName} 
        onChange={ (e)=> setTopicName(e.target.value)}/>
    </div>
  )
}

export default UserData;
