import React, { useState } from 'react';

const MyProfile = () => {

  // useState() - will let you have state in fn comp 
  const [ personName, setPersonName ] = useState('Arun');
  console.log(personName);

  const handleChangeName = () => {
    // the following is the setter
    // will change the personName using setPersonName fn
    // it will result in the whole fn getting exec'd to show the update in UI
    setPersonName('John'); 
  }

  return (
    <div>
      <h4>My Profile | useState() - Demo</h4>
      <p>Person Name is: {personName}</p>

      <button type="button" className="btn btn-primary" 
        onClick={handleChangeName}>Change Name to John</button>

      <br /><br/>
      <button type="button" className="btn btn-primary"
      onClick={ () => setPersonName('Steve') }>Change Name to Steve</button>
    </div>
  )
}

export default MyProfile;
