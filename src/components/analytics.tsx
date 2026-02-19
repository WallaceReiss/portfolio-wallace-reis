'use client';

import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

const Analytics = () => {
  useEffect(() => {
    if (GA_TRACKING_ID && process.env.NODE_ENV === 'production') {
      ReactGA.initialize(GA_TRACKING_ID);
    }
  }, []);

  return null;
};

export default Analytics;
