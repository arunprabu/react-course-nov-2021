import React, { useState } from 'react';
// import './Company.css';

const Company = (props) => {
  
  const [favCompany, setFavCompany] = useState('');

  const updateCompany = (e) => {
    setFavCompany(e.target.value)
  }

  return(
    <div>
      <p>Welcome to My Company's Official Webpage!!!</p>
      <div data-testid='companyEl' className='redText'>{props.companyName}</div>
      {/* adding test case to find the following element by placeholder */}
      <input type='text' placeholder="company"/> 
      <p>This is amazing!!</p>
      <br/>
      <br/>
      <input type='text' 
        placeholder='Fav Company' 
        value={favCompany}
        onChange={updateCompany}/>
    </div>
  )
}
export default Company;