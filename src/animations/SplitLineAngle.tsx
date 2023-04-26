// duration: 3,
// yPercent: 100,
// ease: "power4",
// skewY: 10,
// stagger: 0.1

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
};

export default function SplitLines({
  children,
  start,
  content = false,
  heading,
}: AnimationProps) {
  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useIsomorphicLayoutEffect(() => {
    let mm = gsap.matchMedia(root);

    mm.add(
      '(min-width: 800px)',
      () => {
        let q = gsap.utils.selector(root.current);
        // const splitLines = new SplitText(q('p'), {
        //   type: 'lines',
        //   linesClass: 'outline-txt',
        // });

        const splitLines = new SplitText(q('p'), {
          type: 'lines',
          linesClass: 'split-child outline-txt',
        });
        const parentSplit = new SplitText(q('p'), {
          type: 'lines',
          linesClass: 'split-parent',
        });

        tl.current = gsap.timeline({
          scrollTrigger: {
            start: 'top-=50px center' || start,
            end: 'bottom bottom',
            trigger: root.current,
          },
        });

        tl.current.from(splitLines.lines, {
          duration: 3,
          yPercent: 250,
          ease: 'power4',
          skewY: 10,
          stagger: 0.1,
        });
        tl.current.to(
          q('p'),
          {
            textFillColor: 'rgb(245, 75, 27)',
          },
          '-=2'
        );

        return () => {
          splitLines.revert();
        };
      },

      root
    );

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
