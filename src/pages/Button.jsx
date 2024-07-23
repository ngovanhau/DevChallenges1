import React from 'react';
import "../styles/Button.css";
const Button = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Buttons</h1>
      </div>
      <div className="body">
        <button className='buttondefault'>Default</button>
        <button className='buttondefaultborder'>Default</button>
        <button className='btntext'>Default</button>
        <button className='btndisabled'>Disabled</button>
        <button className='btnSecondary'>Secondary</button>
        <button className='btnDanger'>Danger</button>
      </div>
      <div className="footter">
        <h2>DevChallenges</h2>
      </div>
    </div>
  );
}

export default Button;
