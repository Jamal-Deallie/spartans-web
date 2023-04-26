import { useRef, useEffect, useState, useCallback } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useStore } from '@/lib/store';
import { shallow } from 'zustand/shallow';
import styles from '@/styles/components/Menu.module.scss';
import { Links } from '@/data/data';

type Props = {};

export default function Menu({}: Props) {
  const [navIsOpened, setNavIsOpened] = useStore(
    ({ navIsOpened, setNavIsOpened }) => [navIsOpened, setNavIsOpened],
    shallow
  );
  const openShopMenu = () => setNavIsOpened(!navIsOpened);
  const router = useRouter();

  useEffect(() => {
    function onRouteChange() {
      setNavIsOpened(false);
    }

    router.events.on('routeChangeStart', onRouteChange);

    return () => {
      router.events.off('routeChangeStart', onRouteChange);
    };
  }, []);

  const tl = useRef<gsap.core.Timeline | null>(null);
  console.log(navIsOpened);
  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline({ pause: true });
    let links = gsap.utils.toArray('#link');

    let ctx = gsap.context(() => {
      if (tl.current) {
        tl.current
          .fromTo(
            '#line1',
            { transform: 0 },
            {
              transform: 'rotate(45deg) translate(7px, 6px)',
            },
            0
          )
          .fromTo(
            '#line2',
            { transform: 0 },
            {
              opacity: 0,
            },
            0
          )
          .fromTo(
            '#line3',
            { transform: 0 },
            {
              transform: 'rotate(-45deg) translate(7px, -6px)',
            },
            0
          )
          .fromTo(
            '#cont',
            { yPercent: 900, autoAlpha: 0 },
            {
              duration: 1,
              transformOrigin: 'right top',
              autoAlpha: 1,
              yPercent: 0,
              display: 'block',
              ease: 'power3.inOut',
            },
            '-=50%'
          )
          .fromTo(
            links,
            { yPercent: 100, opacity: 0 },
            {
              duration: 0.5,
              yPercent: 0,
              opacity: 1,
              stagger: {
                amount: 0.2,
              },
            }
          )
          .reverse();
      }
    });

    return () => ctx.revert();
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (tl.current) {
      tl.current.reversed(!navIsOpened);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tl, navIsOpened]);

  return (
    <>
      <button
        role='button'
        id='btn'
        onClick={openShopMenu}
        className={styles.btn}>
        <div id='line1' />
        <div id='line2' />
        <div id='line3' />
      </button>

      <div className={styles.menu} id='cont'>
        <div className={styles.overlay}>
          <ul>
            {Links.map(({ id, label, path }) => {
              return (
                <li key={id} onClick={openShopMenu} id='link'>
                  <Link href={path}>{label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
