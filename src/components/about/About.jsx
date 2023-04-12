import React from 'react';
import MainHeader from '../sections/header/MainHeader';
import about from '../../assets/img/about.png';

const About = () => {
  return (
		<main className='min-h-screen'>
      <MainHeader icon={about} text='Sobre Nosotros' />
    </main>
  );
}

export default About;
