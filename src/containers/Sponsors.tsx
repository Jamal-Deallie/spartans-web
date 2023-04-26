import cn from 'classnames';
import MarqueeText from '@/animations/MarqueeText';
import FadeUp from '@/animations/FadeUp';
import { sponsors } from '@/data/data';
import styles from '@/styles/containers/Sponsors.module.scss';

type Props = {};

export default function Sponsors({}: Props) {
  return (
    <div className={styles['sponsors']}>
      <div className='main-cont'>
        <div className={styles['title-wrap']}>
          <FadeUp>
            <h1 className='title-md fadeUp'>Our</h1>
            <h1 className='title-md fadeUp'>Sponsors</h1>
          </FadeUp>
        </div>
      </div>
      <MarqueeText>
        <div className={styles['text-marquee']}>
          <div className={cn(styles['text-single'], 'txt-wrapper')}>
            {sponsors.map(({ id, sponsor }) => {
              return (
                <span className={cn(styles['text'], 'scroll-txt')} key={id}>
                  {sponsor}
                </span>
              );
            })}
          </div>
        </div>
      </MarqueeText>
    </div>
  );
}
