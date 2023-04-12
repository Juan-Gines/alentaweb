import React from 'react';
import MainHeader from '../sections/header/MainHeader';
import porfolio from '../../assets/img/porfolio.png';

const Porfolio = () => {
  return (
		<main className='min-h-screen'>
      <MainHeader icon={porfolio} text='Porfolio' />
    </main>
  );
}

export default Porfolio;
