import Section from "./Section";

const SectionList = () => {  
  const sectionList = ['blog', 'games', 'utils', 'porfolio', 'contact', 'about'];

  return (    
    <section className=' px-5 py-16 sm:px-10 md:p-16 max-w-7xl m-auto font-semibold text-gray-700'>
      <div className='grid gap-6 grid-cols-1 lg:grid-cols-2'>
        {sectionList.map((sec, i) => <Section key={i} sec={sec} /> )}      
      </div>
    </section>    
  );
}

export default SectionList;
