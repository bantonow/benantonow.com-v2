'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TextScramble } from './TextScramble';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export function TextScrambleLink({ href, children }: LinkProps) {
  const [isTrigger, setIsTrigger] = useState(false);

  return (
    <Link
      href={href}
      className="scramble-link"
      onMouseEnter={() => setIsTrigger(true)}
      onMouseLeave={() => setIsTrigger(false)}
    >
      <TextScramble
        speed={0.02}
        scrambleDuration={0.3}
        trigger={isTrigger}
        onScrambleComplete={() => setIsTrigger(false)}
      >
        {typeof children === 'string' ? children : 'Default Text'}
      </TextScramble>
    </Link>
  );
}