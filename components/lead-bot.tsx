'use client';

import { useEffect } from 'react';

export function LeadBot() {
  useEffect(() => {
    // This will run only on the client side
    console.log('LeadBot component mounted');
  }, []);

  return <div id="lead-bot"></div>;
}
