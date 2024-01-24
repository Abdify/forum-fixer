import Image from 'next/image';
import Link from 'next/link';
import { FaRegUserCircle, FaSearch } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import Button from '@/components/buttons/Button';

import forum from '../../../public/images/forum.jpg';
import logo from '../../../public/images/logo.jpg';

export default function Header() {
  return (
    <>
      {/* this is header image  */}
      <Image
        src={forum}
        width={1920}
        height={1080}
        alt='header image'
        className='w-full h-[50dvh] object-cover'
      />
      {/* this is navbar  */}
      <div className='border-b border-b-gray-300 shadow-lg'>
        <div className='container mx-auto  px-10 py-2 flex items-center justify-between gap-6'>
          <Image src={logo} width={40} height={40} alt='logo' />
          {/* this div contain search box avatar etc  */}
          <div className='flex items-center gap-6'>
            {/* this is search box  */}
            <div className='flex items-center rounded'>
              <input
                type='text'
                placeholder='Search topics'
                className='px-4 py-2 w-60 border-none rounded bg-grey'
              />
              <div className='bg-darkish rounded p-2'>
                <FaSearch className='text-white text-2xl' />
              </div>
            </div>
            {/* this is button  */}
            <Link href='/create-issue'>
              <Button className='border border-primary-500'>
                Start new Topic
              </Button>
            </Link>
            {/* this is inbox icon  */}
            <MdEmail className='text-4xl text-darkish' />
            {/* this is avatar section */}
            <FaRegUserCircle className='text-4xl text-darkish' />
          </div>
        </div>
      </div>
    </>
  );
}
