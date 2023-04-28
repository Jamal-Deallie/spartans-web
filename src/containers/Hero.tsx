import React from 'react';
import cn from 'classnames';
import styles from '@/styles/containers/Hero.module.scss';
type Props = {};

export default function Hero({}: Props) {
  return (
    <div className={styles['vid']}>
      <video width='100%' muted autoPlay loop>
        <source
          src={
            'https://res.cloudinary.com/dtwk4dm3g/video/upload/v1682655819/spartans/mvs_hero_adaazs.mp4'
          }
          type='video/mp4'
        />
      </video>
    </div>
  );
}
