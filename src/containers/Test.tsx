import { useRef, ReactNode } from 'react';
import cn from 'classnames';
import Card from '@/components/Card';
import { Parallax } from '@/components/Parallax';
import { gsap } from 'gsap';
// import { useScroll } from '@studio-freight/react-lenis';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { introItems as items } from '@/data/data';
import styles from '@/styles/containers/Test.module.scss';
type Props = {};

export default function Intro({}: Props) {
  let root = useRef<HTMLDivElement>(null!);
  let wrapper = useRef<HTMLDivElement>(null!);

  return (
    <section className={styles.why}>
      <div className='grid-inner'>
        <p className={cn(styles.sticky, 'h2')}>Why smooth scroll?</p>
        <aside className={styles.features} >
          <div className={styles.feature}>
            <p className='p'>
              We’ve heard all the reasons to not use smooth scroll. It feels
              hacky. It’s inaccessible. It’s not performant. It’s
              over-engineered. And historically, those were all true. But we
              like to imagine things as they could be, then build them. So, why
              should you use smooth scroll?
            </p>
          </div>
          <div className={styles.feature}>
            <h4 className={cn(styles.title, 'h4')}>
              Create more immersive interfaces
            </h4>
            <p className='p'>
              Unlock the creative potential and impact of your web experiences.
              Smoothing the scroll pulls users into the flow of the experience
              that feels so substantial that they forget they’re navigating a
              web page.
            </p>
          </div>
          <div className={styles.feature}>
            <h4 className={cn(styles.title, 'h4')}>
              Normalize all your user inputs
            </h4>
            <p className='p'>
              Give all your users the same (dope) experience whether they’re
              using trackpads, mouse wheels, or otherwise. With smooth scroll,
              you control how silky, heavy, or responsive the experience should
              be — no matter the input. Magic!
            </p>
          </div>
          <div className={styles.feature}>
            <h4 className={cn(styles.title, 'h4')}>Make your animations flawless</h4>
            <p className='p'>
              Synchronization with native scroll is not reliable. Those jumps
              and delays with scroll-linked animations are caused by
              multi-threading, where modern browsers run animations/effects
              asynchronously with the scroll. Smooth scroll fixes this.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
