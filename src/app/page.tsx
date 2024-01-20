'use client';

import Link from 'next/link';
import * as React from 'react';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <main>
      {numbers.map((number) => (
        <Link
          key={number}
          href='#'
          className='h-2 w-2 bg-gray-400 p-2 text-gray-50'
        >
          {number}
        </Link>
      ))}
    </main>
  );
}
