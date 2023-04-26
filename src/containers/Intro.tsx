import Image from 'next/image';
import cn from 'classnames';
import Card from '@/components/Card';
import FadeUp from '@/animations/FadeUp';
import { introItems as items } from '@/data/data';
import styles from '@/styles/containers/Intro.module.scss';

type Props = {};

export default function Intro({}: Props) {
  return (
    <section className={styles['intro']}>
      <div className='grid-inner'>
        <div className={cn(styles['title-cont'], 'secondary-bg')}>
          <div className={styles['title-wrap']}>
            <FadeUp>
              <p className='subtitle fadeUp'>Who We Are</p>
              <h1 className='title-md clr-prim fadeUp'>Building</h1>
              <h1 className='title-md fadeUp'>Strong</h1>
              <h1 className='title-md clr-prim fadeUp'>Foundations</h1>
            </FadeUp>
          </div>
          {/* <div className={styles['svg-wrap']}>
            <Image
              src={'img/route-1.svg'}
              alt='cloud'
              fill
              sizes='(max-width: 768px) 100vw)'
              priority
            />
          </div> */}
        </div>

        <aside className={styles['cat-cont']}>
          {items.map(item => {
            return (
              <div className={styles['cats']} key={item.id}>
                <Card key={item.id} {...item} />
              </div>
            );
          })}
        </aside>
      </div>
    </section>
  );
}
