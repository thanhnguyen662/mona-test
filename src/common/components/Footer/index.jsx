import React from 'react';
import { FaPhoneAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer(props) {
   return (
      <div className='bg-[#f4f2f9] py-10'>
         <div className='container mx-auto px-4'>
            <div className='flex gap-10 text-lg'>
               <div className='flex items-center gap-3'>
                  <RoundedIcon>
                     <FaPhoneAlt className='text-white text-sm' />
                  </RoundedIcon>
                  Call us: +84 908 02 02 58
               </div>
               <div className='flex items-center gap-3'>
                  <RoundedIcon>
                     <MdEmail className='text-white text-sm' />
                  </RoundedIcon>
                  Email: chucinog@gmail.com
               </div>
               <div className='flex-auto'></div>
               <div className='flex items-center gap-3'>
                  Follow us
                  <hr className='w-16 border-black border-[1px]' />
                  <RoundedIcon>
                     <FaFacebookF className='text-white text-sm' />
                  </RoundedIcon>
                  <RoundedIcon>
                     <FaInstagram className='text-white text-sm' />
                  </RoundedIcon>
               </div>
            </div>
         </div>
      </div>
   );
}

function RoundedIcon({ children }) {
   return <div className='bg-purple p-1.5 rounded-full'>{children}</div>;
}

export default Footer;
