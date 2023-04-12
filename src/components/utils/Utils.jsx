import React from 'react';
import MainHeader from '../sections/header/MainHeader';
import utilidades from '../../assets/img/utilidades.png';

const Utils = () => {
  return (
		<main className='min-h-screen'>
      <MainHeader icon={utilidades} text='Utilidades' />
    </main>
  );
}

export default Utils;
