'use client';
import { useEffect, useState } from 'react';

// Owner's local time (IST). Rendered as text so the server and client agree on the markup.
export function LocalTime() {
  const [t, setT] = useState('');
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' });
    const tick = () => setT(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return <time suppressHydrationWarning>{t || '--:--'} IST</time>;
}
