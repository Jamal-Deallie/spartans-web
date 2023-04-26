import cn from 'classnames';
import Image from 'next/image';
import SplitAngle from '@/animations/SplitLineAngle';
import styles from '@/styles/containers/Mission.module.scss';

type Props = {};

export default function Mission({}: Props) {
  return (
    <div className={cn('main-cont', styles['mission'])}>
      <SplitAngle>
        <div className={styles['mission-wrap']}>
          <p className='outline-txt'>
            "Our mission is to provide a positive football and cheer experience
            by supporting each athlete to reach their fullest potential both on
            and off the field."
          </p>
        </div>
      </SplitAngle>
    </div>
  );
}
