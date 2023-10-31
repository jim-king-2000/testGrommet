'use client';

import { useState } from 'react';

export default function Page() {
  const [fs, setFs] = useState(false);
  function toggleFullScreen() {
    if (fs) {
      document.exitFullscreen();
      screen.orientation.unlock();
      setFs(false);
    } else {
      document.documentElement.requestFullscreen();
      screen.orientation.lock('landscape');
      setFs(true);
    }
  }

  return (
      <button onClick={() => toggleFullScreen()}>{fs ? 'unlock' : 'lock'}</button>
  );
}