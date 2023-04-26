import { useRef, ReactNode } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import cn from 'classnames';
import Image from 'next/image';
import gsap from 'gsap';
import styles from '@/styles/components/MarqueeLoop.module.scss';
import { horizontalLoop } from '@/helpers/horizontalLoop';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

type LoopProps = {
  children: ReactNode;
  reversed?: boolean;
  repeat?: number;
};

export default function MarqueeLoop({ children, repeat = 40 }: LoopProps) {
  const root = useRef<HTMLUListElement>(null);
  const tl = useRef<gsap.core.Timeline>();

  const gsapAnimate = () => {
    const boxes = gsap.utils.toArray('#item');

    document.fonts.ready.then(function () {
      tl.current = horizontalLoop(boxes, { repeat: -1, speed: 1 });
    });

    ScrollTrigger.create({
      trigger: root.current,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => tl?.current?.play(),
      onEnterBack: () => tl?.current?.play(),
      onLeave: () => tl?.current?.pause(),
    });
  };

  useIsomorphicLayoutEffect(() => {
    window.addEventListener('load', gsapAnimate);

    return () => {
      window.removeEventListener('load', gsapAnimate);
    };
  }, []);

  return (
    <div className={styles['container']}>
      <div className={styles['marquee']}>
        <ul className={styles['content']} ref={root}>
          {new Array(repeat).fill(children).map((_, i) => (
            <li key={i} className={styles['item']} id='item'>
              {children}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
