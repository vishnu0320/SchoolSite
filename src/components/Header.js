import React from 'react';

function Header() {
  return (
    <div className='Header'>
      <div className='HeaderLeft'>ABC SCHOOL</div>
      <div className='HeaderRight'>
        <div className='HeaderLink active'>Home</div>
        <div className='HeaderLink'>About</div>
        <div className='HeaderLink'>Contacts</div>
        <div className='HeaderLink'>Facility</div>
        <div className='HeaderLink'>More</div>
      </div>
    </div>
  );
}

export default Header;
