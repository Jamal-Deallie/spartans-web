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

export default function FadeIn({
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

      tl.current = gsap.timeline({
        scrollTrigger: {
          start: start || 'top+=100px center',
          end: 'bottom bottom',
          trigger: root.current,
        },
      });

      tl.current.from(q('.fadeIn'), {
        opacity: 0,
        duration: duration || 3,
        ease: 'power4.out',
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
