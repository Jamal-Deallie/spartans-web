import { ReactNode, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';

type AnimationProps = {
  children?: ReactNode;
};

export default function HeroAnimation({ children }: AnimationProps) {
  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    let mm = gsap.matchMedia(root.current);
    mm.add(
      '(min-width: 800px)',
      () => {
        tl.current = gsap.timeline({});
        let q = gsap.utils.selector(root.current);
        let splitLines = new SplitText(q('h1'), { type: 'lines' });
        // let lines = gsap.utils.toArray('.heading');
        // let icons = gsap.utils.toArray('.stars');

        gsap.set('.cloud-left', { yPercent: -70, scale: 1.5 });
        gsap.set('.cloud-right', { yPercent: -70, scale: 1.5 });

        let animation = tl.current
          .to('.cloud-left', {
            delay: 1,
            yPercent: 0,
            scale: 1,
            ease: 'circ.out',
            duration: 0.75,
            // overwrite: 'auto',
          })
          .to(
            '.cloud-right',
            {
              yPercent: 0,
              scale: 1,
              ease: 'circ.out',
              duration: 0.75,
              //   overwrite: 'auto',
            },
            '<'
          )
          .from(splitLines.lines, {
            opacity: 0,
            y: '50%',
            duration: 1.5,
            ease: 'power4.out',
            stagger: 0.2,
          })
          .from('.icon', {
            opacity: 0,
            duration: 1.5,
            ease: 'power4.out',
          }, '-=1');
        //   .fromTo(
        //     lines,
        //     { y: 100, opacity: 0 },
        //     {
        //       delay: 0.5,
        //       opacity: 1,
        //       y: 0,
        //       ease: 'back',
        //       duration: 1,
        //       stagger: 0.1,
        //     },
        //     '-=1'
        //   )
        //   .fromTo(
        //     icons,
        //     { y: 100, opacity: 0 },
        //     {
        //       delay: 0.5,
        //       opacity: 1,
        //       y: 0,
        //       ease: 'back',
        //       duration: 1,
        //       stagger: 0.1,
        //     },
        //     '-=1.5'
        //   )
        //   .fromTo(
        //     icons,
        //     { scaleX: 1, scaleY: 1 },
        //     {
        //       scaleY: 0.6,
        //       scaleX: 0.6,
        //       duration: 1,
        //       repeat: -1,
        //       yoyo: true,
        //       ease: 'none',
        //     },
        //     '<'
        //   )
        //   .fromTo(
        //     '.arrow',
        //     { y: 10 },
        //     {
        //       y: 0,
        //       duration: 0.75,
        //       repeat: -1,
        //       yoyo: true,
        //       ease: 'none',
        //     },
        //     '-=1'
        //   )
        //   .fromTo(
        //     '.arrow-wrap',
        //     { opacity: 0 },
        //     {
        //       y: 0,
        //       opacity: 1,
        //       duration: 0.75,
        //       ease: 'none',
        //     },
        //     '-=.75'
        //   )

        function onLeave() {
          gsap.to('.cloud-left', {
            xPercent: 20,
            ease: 'circ.out',
            duration: 1,
          });
          gsap.to('.cloud-right', {
            xPercent: -20,
            ease: 'circ.out',
            duration: 1,
          });
        }
        ScrollTrigger.create({
          trigger: root.current,
          start: 'top center',
          end: 'bottom bottom',
          animation: animation,

          //   onLeave: () => onLeave(),
        });
      },
      root
    );

    return () => mm.revert();
  }, []);

  return <div ref={root}>{children}</div>;
}
