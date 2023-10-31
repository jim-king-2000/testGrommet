'use client';

export default function Page() {
  function toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      screen.orientation.unlock();
    } else {
      document.documentElement.requestFullscreen();
      screen.orientation.lock('landscape');
    }
  }

  return (
    <button onClick={() => toggleFullScreen()}>lock/unlock</button>
  );
}