import React from 'react';
import '../../styles/title.css'

const Title = ({title}) => {
  return(
    <div className='container-title'>
      <h2 className='title'>{title}</h2>
    </div>
  )
};

export default Title;
