import { ReactNode } from 'react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import useWindowSize from '@/hooks/useWindowSize';

type ParallaxProps = {
  className?: string;
  children: ReactNode;
  speed?: number;
  position?: string;
  id?: string;
};
export function Parallax({
  className,
  children,
  speed = 1,
  id = 'parallax',
  position,
}: ParallaxProps) {
  const trigger = useRef<HTMLDivElement>(null!);
  const target = useRef<HTMLDivElement>(null!);
  const timeline = useRef<gsap.core.Timeline>(null!);
  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    const y = windowWidth * speed * 0.1;
    const mm = gsap.matchMedia();

    timeline.current = gsap
      .timeline({
        scrollTrigger: {
          id,
          trigger: position === 'top' ? document.body : trigger.current,
          scrub: true,
          start: position === 'top' ? 'top top' : 'top bottom',
          end: position === 'top' ? '+=100%' : 'bottom top',
        },
      })
      .fromTo(
        target.current,
        { y: position === 'top' ? 0 : -y },
        { y: y, ease: 'none' }
      );

    mm.add(
      {
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      context => {
        const { reduceMotion }: any = context.conditions;

        if (reduceMotion) {
          timeline?.current?.from(target.current, { y: 0 });
          timeline?.current?.kill();
        }
      }
    );

    return () => {
      timeline?.current?.kill();
    };
  }, [id, speed, position, windowWidth]);

  return (
    <div ref={trigger}>
      <div ref={target} className={className}>
        {children}
      </div>
    </div>
  );
}
