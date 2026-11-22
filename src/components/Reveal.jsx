import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// GSAP versions of the AOS animations the original template used.
const FROM = {
  'fade-up': { y: 100 },
  fade: {},
  'zoom-in': { scale: 0.6 },
  'zoom-out': { scale: 1.2 },
};

/**
 * Scroll-reveal wrapper (replaces AOS).
 * animation: 'fade-up' | 'fade' | 'zoom-in' | 'zoom-out'
 * delay: milliseconds (ignored on screens <= 768px, like the original)
 */
export default function Reveal({
  as: Tag = 'div',
  animation = 'fade-up',
  delay = 0,
  children,
  ...rest
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        ...FROM[animation],
        autoAlpha: 0,
        duration: 0.6,
        delay: isMobile ? 0 : delay / 1000,
        ease: 'power1.inOut',
        clearProps: 'transform,opacity,visibility',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=120', // same 120px offset AOS uses
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [animation, delay]);

  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
}
