import React from 'react';
import MainHeader from '../sections/header/MainHeader';
import blog from '../../assets/img/blog.png';

const Blog = () => {
  return (
		<main className='min-h-screen'>
      <MainHeader icon={blog} text='Blog' />
    </main>
  );
}

export default Blog;
