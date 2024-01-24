import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/favicon/favicon-32x32.png';

const socialIcons = [
  { label: '#Facebook', icon: 'fab fa-facebook' },
  { label: '#Twitter', icon: 'fab fa-twitter' },
  { label: '#Google Plus', icon: 'fab fa-google-plus' },
  { label: '#Dribbble', icon: 'fab fa-dribbble' },
  { label: '#Cloud', icon: 'fa-solid fa-cloud' },
  { label: '#RSS', icon: 'fa-solid fa-rss' },
];

export default function Footer() {
  return (
    <footer className='container mx-auto mt-10 py-4'>
      <div className='color flex items-center space-x-11'>
        <div>
          <Image src={logo} alt='' className='' width={32} height={32} />
        </div>
        <div className='flex w-full justify-between space-x-4'>
          <div>
            <p>Copyrights 2014, forumfixer.com</p>
          </div>
          <div className='flex space-x-5'>
            {socialIcons.map(({ label, icon }, index) => (
              <Link
                key={index}
                href={label}
                target='_blank'
                className='text-gray-500'
              >
                <i className={icon}></i>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
