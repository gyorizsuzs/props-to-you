import React from 'react';

function Footer({ date, today, showDate, handleClick }) {
  return (
    <div className='footer'>
      {showDate && (
        <div className='date-container' onClick={handleClick}>
          {date} {today}
        </div>
      )}
    </div>
  );
}

export default Footer;
