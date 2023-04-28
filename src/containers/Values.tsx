import Slider from '@/components/Slider';
import FadeUp from '@/animations/FadeUp';
import FadeIn from '@/animations/FadeIn';
import styles from '@/styles/containers/Values.module.scss';
import cn from 'classnames';

type Props = {};

export default function Values({}: Props) {
  return (
    <section className={styles['values-cont']}>
      <div className='main-cont'>
        <div className='title-wrap'>
          <FadeUp>
            <span className='subtitle fadeUp'>Our Values</span>
            <h1 className='title-md fadeUp'>WE DON’T Want </h1>
            <h1 className='title-md fadeUp'>To BE Average</h1>
          </FadeUp>
        </div>
      </div>
      <FadeIn start={'top+=200px center'}>
        <div className={cn(styles['slider-cont'], 'fadeIn')}>
          <Slider />
        </div>
      </FadeIn>
    </section>
  );
}
