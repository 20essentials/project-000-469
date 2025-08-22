import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const aroCount = 15;
  return (
    <aside className='w-[300px] h-[300px] relative transform-style-preserve-3d perspective-[500px] rotate-x-[60deg] flex flex-wrap place-content-center zoom-[0.7] sm:zoom-[1]'>
      {Array.from({ length: aroCount }).map((_, i) => (
        <div
          key={i}
          className='absolute inset-[calc(var(--s)*10px)] shadow-[inset_0_0_80px_#ffe4b599] clip-custom animate-up_and_down'
          style={{ '--s': i, animationDelay: `${i * -0.1}s` }}
        ></div>
      ))}
      <style>
        {`
          @keyframes up_and_down {
            0%, 100% { transform: translateZ(-100px) rotate(0deg); }
            50% { transform: translateZ(100px) rotate(90deg); }
          }
          .animate-up_and_down { animation: up_and_down 3s infinite ease-in-out both; }
          .clip-custom { clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%); }
        `}
      </style>
    </aside>
  );
};

const rootEl =
  document.getElementById('root') ||
  (() => {
    const el = document.createElement('div');
    el.id = 'root';
    document.body.appendChild(el);
    return el;
  })();

createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
