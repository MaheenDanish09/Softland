import { useEffect, useState } from 'react';

export default function ScrollTop() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => setActive(window.scrollY > 100);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#"
      id="scroll-top"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className={`fixed bottom-[15px] right-[15px] z-[99999] flex h-10 w-10 items-center justify-center rounded bg-accent transition-all duration-[400ms] hover:bg-accent-80 hover:text-contrast ${
        active ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <i className="bi bi-arrow-up-short text-2xl leading-[0] text-contrast" />
    </a>
  );
}
