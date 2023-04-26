import { ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';

type AnimationProps = {
  children?: ReactNode;
  delay?: 0;
  start?: string;
  content?: boolean;
  heading?: string;
  duration?: number;
};

export default function FadeUp({
  children,
  start,
  content = false,
  heading,
  duration,
}: AnimationProps) {
  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useIsomorphicLayoutEffect(() => {
    let mm = gsap.matchMedia(root);

    mm.add('(min-width: 800px)', () => {
      let q = gsap.utils.selector(root.current);
      let targets = gsap.utils.toArray(q('.fadeUp'));

      tl.current = gsap.timeline({
        scrollTrigger: {
          start: start || 'top center',
          end: 'bottom bottom',
          trigger: root.current,
        },
      });

      tl.current.from(targets, {
        opacity: 0,
        yPercent: 75,
        duration: duration || 2,
        ease: 'power4',
        stagger: 0.25,
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={root} className='of-h'>
      {children}
    </div>
  );
}
