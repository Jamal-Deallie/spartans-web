import { useState, SyntheticEvent } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import cn from 'classnames';
import { Links, supportLinks } from '../data/data';
import styles from '@/styles/components/Footer.module.scss';

const Facebook = dynamic(() => import('@/svgs/facebook.svg'), { ssr: false });
const Instagram = dynamic(() => import('@/svgs/instagram.svg'), { ssr: false });
const Youtube = dynamic(() => import('@/svgs/youtube.svg'), { ssr: false });
const Twitter = dynamic(() => import('@/svgs/twitter.svg'), { ssr: false });
const Tiktok = dynamic(() => import('@/svgs/tiktok.svg'), { ssr: false });

type Props = {};

export default function Footer({}: Props) {
  const [email, setEmail] = useState('');

  const onInputSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    alert(`The email you entered was: ${email}`);
  };

  return (
    <div className={styles['footer-cont']}>
      <footer className={cn(styles['footer'], 'main-cont', 'gradient-bg')}>
        <div className='grid-cont'>
          <div className={styles['form']}>
            <div className={styles['title']}>
              <h4>Stay up to date with the latest </h4>
              <h4>news from the Spartans</h4>
            </div>
            <form onSubmit={onInputSubmit}>
              <div className={styles['field-wrap']}>
                <input
                  placeholder='Email'
                  className={styles['field']}
                  type='email'
                  onChange={e => setEmail(e.target.value)}
                />

                <button type='submit'>
                  {' '}
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M20 12H4m16 0-6 6m6-6-6-6'
                      strokeWidth={1.5}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div className={styles['link-wrap']}>
            <h5>Menu</h5>
            <ul>
              {Links.map(({ id, path, label }) => {
                return (
                  <li key={id}>
                    <Link href={path}>{label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles['support-wrap']}>
            <h5>Support</h5>

            <ul>
              {supportLinks.map(({ id, path, label }) => {
                return (
                  <li key={id}>
                    <Link href={path}>{label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <hr />
        <div className={styles['socials-cont']}>
          <ul>
            <li>
              <Facebook />
            </li>
            <li>
              <Instagram />
            </li>
            <li>
              <Twitter />
            </li>
            <li>
              <Youtube />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
