// components/BrowserPersonalization.tsx
import { useEffect, useState } from 'react';

const BrowserPersonalization = () => {
  const [browser, setBrowser] = useState<string | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
      setBrowser('Safari');
    } else if (userAgent.includes('firefox')) {
      setBrowser('Firefox');
    } else if (userAgent.includes('chrome') && !userAgent.includes('edge')) {
      setBrowser('Chrome');
    } else if (userAgent.includes('edge')) {
      setBrowser('Edge');
    } else {
      setBrowser('Other');
    }
  }, []);

  return (
    <>
      {browser === 'Safari' && <p>You are viewing this from Safari 🧭</p>}
      {browser === 'Firefox' && <p>You are using Firefox 🦊</p>}
      {browser === 'Chrome' && <p>You are on Chrome 🔵</p>}
      {browser === 'Edge' && <p>You are using Microsoft Edge 🟢</p>}
      {browser === 'Other' && <p>Unknown browser 🌐</p>}
    </>
  );
};

export default BrowserPersonalization;
