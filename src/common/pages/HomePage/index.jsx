import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchCard from '../../components/SearchCard';

function HomePage(props) {
   return (
      <div className='w-full h-screen bg-[#f4f2f9] relative'>
         <div className='bg-home h-[70vh] bg-cover relative'>
            <Header theme='dark' />
            <div className='container mx-auto px-4'>
               <div className='absolute container left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  px-4 flex flex-col text-7xl font-thin leading-none gap-4'>
                  <h1>Hello!</h1>
                  <h1>Where are</h1>
                  <span>
                     you <b className='text-purple'>flying </b> to ...
                  </span>
               </div>
            </div>
            <div className='absolute container left-[50%] top-[100%] translate-x-[-50%] translate-y-[-50%]  px-4'>
               <SearchCard />
            </div>
         </div>
         <div className='absolute w-full left-[50%] bottom-[0%] translate-x-[-50%]'>
            <Footer />
         </div>
      </div>
   );
}

export default HomePage;
