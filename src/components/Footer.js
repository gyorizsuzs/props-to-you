import React from 'react';

function Footer({ date, today, showDate, handleClick }) {
  return (
    <>
      {showDate && (
        <div className='footer'>
          <div className='date-container' onClick={handleClick}>
            {date} {today}
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
