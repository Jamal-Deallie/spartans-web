import { useRef, ReactNode } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import CustomImage from '@/components/CustomImage';
import styles from '@/styles/containers/Service.module.scss';
type Props = {};

export default function Services({}: Props) {
  const root = useRef<HTMLDivElement | null>(null);
  // const tl = useRef<gsap.core.Timeline | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (root.current) {
      let mm = gsap.matchMedia();

      mm.add(
        '(min-width: 767px)',
        () => {
          setupSplits();
        },
        root
      );

      return () => {
        mm.revert();
      };
    }
  }, []);

  const setupSplits = () => {
    let child = new SplitText('.splits', {
      type: 'lines',
      linesClass: 'split-child',
    });

    let parent = new SplitText('.splits', {
      type: 'lines',
      linesClass: 'split-parent',
    });

    // Set up the anim
    gsap.set('.split-parent', {overflow: 'hidden'})
    gsap.from(child.lines, {
      yPercent: 100,
      opacity: 0,
      stagger: {
        each: 0.1,
        ease: 'power2',
      },
      scrollTrigger: {
        start: 'top+=100 center',
        end: 'bottom bottom',
        trigger: root.current,
      },
    });
  };

  return (
    <div className='main-cont' ref={root}>
      <div className='px-xl'>
        <h1 className='title-sm splits'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h1>
      </div>
    </div>
  );
}
