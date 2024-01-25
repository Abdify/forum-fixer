import { Metadata } from 'next';
import Link from 'next/link';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Button from '@/components/buttons/Button';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <RiAlarmWarningFill
            size={60}
            className='drop-shadow-glow animate-flicker text-red-500'
          />
          <h1 className='mb-5 mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
          <Button>
            <Link href='/'>Back to home</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
