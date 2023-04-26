import React from 'react';
import cn from 'classnames';
import styles from '@/styles/containers/Hero.module.scss';
type Props = {};

export default function Hero({}: Props) {
  return (
    <div className={styles['vid']}>
      <video width='100%' muted autoPlay loop>
        <source src={'/video/mvs_hero.mp4'} type='video/mp4' />
        {/* Sorry, your browser {"doesn't"} support videos. */}
      </video>
    </div>
  );
}
