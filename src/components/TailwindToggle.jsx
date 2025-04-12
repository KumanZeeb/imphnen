import { useState, useEffect } from 'react';

const TailwindToggle = () => {
  const [tailwindEnabled, setTailwindEnabled] = useState(true);

  useEffect(() => {
    const styleTag = document.getElementById('tailwind-override');
    
    if (!tailwindEnabled) {
      const style = document.createElement('style');
      style.id = 'tailwind-override';
      style.textContent = `
        * {
          all: revert !important;
          font-family: system-ui, sans-serif !important;
        }
        .footer *, #tailwind-toggle-btn {
          all: unset !important;
        }
      `;
      document.head.appendChild(style);
    } else {
      if (styleTag) {
        styleTag.remove();
      }
    }
  }, [tailwindEnabled]);

  return (
    <button
      id="tailwind-toggle-btn"
      onClick={() => setTailwindEnabled(!tailwindEnabled)}
      className={`
        px-3 py-1 rounded-md text-sm
        transition-colors duration-200
        border border-white/20
        ${
          tailwindEnabled
            ? 'bg-white/5 text-white/80 hover:bg-white/10'
            : 'bg-white/10 text-white'
        }
      `}
      title={tailwindEnabled ? 'Nonaktifkan Tailwind' : 'Aktifkan Tailwind'}
    >
      {tailwindEnabled ? 'CSS: On' : 'CSS: Off'}
    </button>
  );
};

export default TailwindToggle;