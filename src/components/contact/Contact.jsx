import React from 'react';
import MainHeader from '../sections/header/MainHeader';
import contacto from '../../assets/img/contacto.png';

const Contact = () => {
  return (
		<main className='min-h-screen'>
      <MainHeader icon={contacto} text='Contacto' />
    </main>
  );
}

export default Contact;
