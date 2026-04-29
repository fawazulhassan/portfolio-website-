import { useEffect } from 'react';

export default function ProjectLightbox({ open, image, title, onOpenChange }) {
  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onOpenChange(false);
      }
    };

    if (open) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
      onClick={() => onOpenChange(false)}
    >
      {/* Close Button */}
      <button
        onClick={() => onOpenChange(false)}
        className="absolute top-4 right-4 text-white text-3xl z-50 hover:opacity-70 transition-opacity"
        aria-label="Close lightbox"
      >
        ✕
      </button>

      {/* Image Wrapper - prevents backdrop click from firing */}
      <div
        className="relative max-w-4xl max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain rounded-md"
        />

        {/* Counter */}
        <p className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-xs text-white">
          1 / 1
        </p>
      </div>
    </div>
  );
}
