import { useRef, useEffect, useState, useCallback, ReactNode } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import cn from 'classnames';
import styles from '@/styles/components/Modal.module.scss';

type ModalProps = {
  toggleFunc: () => void;
  isOpened: boolean;
  children: ReactNode;
};

export default function Modal({ toggleFunc, isOpened, children }: ModalProps) {
  const tl = useRef<gsap.core.Timeline | null>(null);
  const modalBg = useRef<HTMLDivElement>(null!);
  const modal = useRef<HTMLDivElement>(null!);
  const modalInner = useRef<HTMLDivElement>(null!);

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline({ pause: true });

    let ctx = gsap.context(() => {
      if (tl.current) {
        tl.current
          .to(modalBg.current, {
            // autoAlpha: 1,
            visibility: 'visible',
            opacity: 1,
            duration: 0.25,
          })
          .to(modal.current, {
            y: 0,
            visibility: 'visible',
            opacity: 1,
            duration: 0.35,
          })
          .to(
            modalInner.current,
            { y: 15, visibility: 'visible', opacity: 1, duration: 0.35 },
            '-=0.15'
          )
          .reverse();
      }
    });

    return () => ctx.revert();
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (tl.current) {
      tl.current.reversed(!isOpened);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tl, isOpened]);

  const closeModal = () => {
    if (tl.current) {
      tl.current.reverse();
      gsap.delayedCall(tl.current.duration(), toggleFunc);
    }
  };
  return (
    <div
      ref={modalBg}
      className={cn(styles.modal, isOpened ? styles['show'] : null)}>
      <div className={styles['modal-bg']} ref={modal} onClick={closeModal} />

      <div className={styles['inner']} ref={modalInner}>
        <button className={styles['btn-close']} onClick={closeModal}>
          <span className='close secondary-clr'>&times;</span>
        </button>
        {children}
      </div>
    </div>
  );
}
