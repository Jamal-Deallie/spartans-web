import { ReactNode, useRef, useEffect, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

type AnimationProps = {
  children?: ReactNode;
};

export default function BatchFade({ children }: AnimationProps) {
  const root = useRef<HTMLDivElement>(null!);

  useIsomorphicLayoutEffect(() => {
    let mm = gsap.matchMedia(root);
    const q = gsap.utils.selector(root.current);
    mm.add('(min-width: 800px)', () => {
      gsap.set(q('.fade'), { autoAlpha: 0 });
      ScrollTrigger.create({
        trigger: root.current,
        start: 'top-=55px center',
        end: 'top top+=100px',
        animation: gsap.to(q('.fade'), {
          duration: 0.8,
          ease: 'sine.in',
          y: 0,
          autoAlpha: 1,
        }),
        toggleActions: 'play reverse reverse reverse',
      });
    });
    mm.add('(max-width: 799px)', () => {
      gsap.set(q('.fade'), { autoAlpha: 1 });
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={root} style={{ overflow: 'hidden' }}>
      {children}
    </div>
  );
}
