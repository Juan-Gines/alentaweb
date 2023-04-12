import React from 'react';
import MainHeader from '../sections/header/MainHeader';
import juegos from '../../assets/img/seta2.png';

const Games = () => {Games
  return (
    <main className='min-h-screen'>
      <MainHeader icon={juegos} text='Juegos' />
    </main>
  );
}

export default Games;
