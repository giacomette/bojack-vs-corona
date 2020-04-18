import React from 'react';
import bojackAndando from '../assets/images/bojack-andando.gif';

function Bojack(props) {

  return (
    <div {...props}>
      <img src={bojackAndando} style={{ maxWidth: '100%', width: '100%' }} />
    </div>
  )
}

export default Bojack;