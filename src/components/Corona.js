import React from 'react';
import corona from '../assets/images/corona-virus.png';

function Corona(props) {

  return (
    <div {...props}>
      <img src={corona} style={{ maxWidth: '100%', width: '100%' }} />
    </div>
  )
}

export default Corona;