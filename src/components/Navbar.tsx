import { useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import Link from 'next/link';
import NavLink from '@/components/NavLink';
import Donations from '@/containers/Donations';
import Image from 'next/image';
import { useRouter } from 'next/router';
import cn from 'classnames';
import Menu from '@/components/Menu';
import { useLenis } from '@studio-freight/react-lenis';
import { Links } from '@/data/data';
import styles from '@/styles/components/Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles['container']}>
      <div className={styles.inner}>
        <Link href='/' className={styles['logo']}>
          <div className={styles['logo']}>
            <Image
              src={'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1682485143/spartans/logo_vcctui.png'}
              alt={'Spartans Logo'}
              fill
              sizes='(max-width: 850px) 100vw'
            />
          </div>
        </Link>

        <div className={styles['link-cont']}>
          {Links.map(({ id, path, label }) => {
            return (
              <NavLink key={id} href={path}>
                {label}
              </NavLink>
            );
          })}
        </div>
        <div className={styles['btn-cont']}>
          <Donations />
        </div>
      </div>
      <Menu />
    </nav>
  );
}
