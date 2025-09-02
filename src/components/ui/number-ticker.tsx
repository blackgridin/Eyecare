'use client';

import React from 'react';

interface NumberTickerProps {
  value: number;
  className?: string;
}

const NumberTicker = ({ value, className }: NumberTickerProps) => {
  return <span className={className}>{value.toLocaleString()}</span>;
};

export default NumberTicker;
