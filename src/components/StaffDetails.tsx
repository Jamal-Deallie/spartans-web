import {
  useRef,
  useEffect,
  useState,
  useCallback,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import Image from 'next/image';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import cn from 'classnames';
import styles from '@/styles/components/StaffDetails.module.scss';

type DetailsProps = {
  isOpened: boolean;
  name: string;
  desc: string;
  src: string;
  title: string;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
};

export default function StaffDetails({
  isOpened,
  name,
  setIsOpened,
  src,
  title,
  desc,
}: DetailsProps) {
  const tl = useRef<gsap.core.Timeline | null>(null);
  const root = useRef<HTMLDivElement>(null!);
  const modal = useRef<HTMLDivElement>(null!);
  const modalInner = useRef<HTMLDivElement>(null!);

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline({ pause: true });
    let mm = gsap.matchMedia();
    const q = gsap.utils.selector(root.current);
    const targets = gsap.utils.toArray('.target');
    
    mm.add('(min-width: 800px)', () => {
      if (tl.current) {
       
        tl.current
          .to(root.current, {
            // autoAlpha: 1,
            visibility: 'visible',
            opacity: 1,
            duration: 0.25,
          })
          .to(targets, {
            y: 0,
            autoAlpha: 1,
            duration: 0.75,
          })
          .reverse();
      }
    });

    mm.add('(max-width: 799px)', () => {
      if (tl.current) {
       
        tl.current
          .to(root.current, {
            // autoAlpha: 1,
            visibility: 'visible',
            opacity: 1,
            duration: 0.25,
          })
          .to(targets, {
            x: 0,
            autoAlpha: 1,
            duration: 0.75,
          })
          .reverse();
      }
    });

    return () => mm.revert();
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (tl.current) {
      tl.current.reversed(!isOpened);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tl, isOpened]);

  function toggleFunc() {
    setIsOpened(!isOpened);
  }
  const closeModal = () => {
    if (tl.current) {
      tl.current.reverse();
      gsap.delayedCall(tl.current.duration(), toggleFunc);
    }
  };
  return (
    <div
      ref={root}
      className={cn(styles.details, isOpened ? styles['show'] : null)}>
      <div className={cn(styles['inner'], 'target gradient-bg')}>
        <button className={styles['btn-close']} onClick={closeModal}>
          <span className='close secondary-clr'>&times;</span>
        </button>
        <div>
          <div className={styles['title']}>
            <h1 className='title-sm secondary-clr'>{name}</h1>
            <h2 className='title-xs'>{title}</h2>
          </div>

          <div className={styles['desc']}>
            <p className='secondary-clr'>{desc}</p>
          </div>
        </div>
      </div>
      <div className={cn(styles['img'], 'target')}>
        <Image
          fill
          src={src}
          sizes='(max-width: 850px) 100vw'
          alt='Spartans Coach'
        />
      </div>
    </div>
  );
}
