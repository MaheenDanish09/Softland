import { useEffect, useRef } from 'react';
import { Modal } from 'flowbite';

/**
 * Gallery lightbox built on the Flowbite Modal component
 * (replaces GLightbox from the original template).
 */
export default function Lightbox({ images, index, onClose, onChange }) {
  const elRef = useRef(null);
  const modalRef = useRef(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  const open = index !== null;

  // Create the Flowbite modal once
  useEffect(() => {
    const modal = new Modal(elRef.current, {
      placement: 'center',
      backdrop: 'dynamic',
      backdropClasses: 'bg-black/80 fixed inset-0 z-[99998]',
      closable: true,
      onHide: () => closeRef.current(),
    });
    modalRef.current = modal;
    return () => {
      if (modal.isVisible()) modal.hide();
      modalRef.current = null;
    };
  }, []);

  // Open / close when `index` changes
  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;
    if (open && !modal.isVisible()) modal.show();
    if (!open && modal.isVisible()) modal.hide();
  }, [open]);

  // Arrow-key navigation
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') onChange((index + 1) % images.length);
      if (e.key === 'ArrowLeft') onChange((index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, index, images.length, onChange]);

  const btn =
    'flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/90 text-[22px] leading-[0] text-heading transition hover:bg-accent hover:text-contrast';

  return (
    <div
      ref={elRef}
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-0 z-[99999] hidden h-full w-full overflow-y-auto overflow-x-hidden p-4"
    >
      <div className="relative flex max-h-full items-center gap-3">
        <button type="button" aria-label="Previous" className={btn} onClick={() => onChange((index - 1 + images.length) % images.length)}>
          <i className="bi bi-chevron-left" />
        </button>

        {open && (
          <img
            src={images[index]}
            alt=""
            className="max-h-[85vh] max-w-[calc(100vw-9rem)] rounded-[10px] bg-white"
          />
        )}

        <button type="button" aria-label="Next" className={btn} onClick={() => onChange((index + 1) % images.length)}>
          <i className="bi bi-chevron-right" />
        </button>

        <button
          type="button"
          aria-label="Close"
          className={`${btn} absolute -top-3 right-0 translate-x-1/2`}
          onClick={onClose}
        >
          <i className="bi bi-x-lg text-[16px]" />
        </button>
      </div>
    </div>
  );
}
