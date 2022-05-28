import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchCard from '../../components/SearchCard';

function HomePage(props) {
   return (
      <div className='w-full h-screen bg-[#f4f2f9]'>
         <div className='bg-home h-[70vh] bg-cover'>
            <Header theme='dark' />
            <div className='md:container md:mx-auto relative'>
               <div className='absolute top-[50%] translate-y-[50%] flex flex-col text-[64px] font-thin leading-none gap-4'>
                  <h1>Hello!</h1>
                  <h1>Where are</h1>
                  <span>
                     you <b className='text-purple'>flying </b> to ...
                  </span>
               </div>
            </div>
         </div>

         <div className='md:container md:mx-auto relative'>
            <div className='absolute top-0 translate-y-[-50%] w-full'>
               <SearchCard />
            </div>
         </div>
         <div className='fixed w-full bottom-0'>
            <Footer />
         </div>
      </div>
   );
}

export default HomePage;
