import Image from 'next/image';
import { Button } from '@/components/Button';
import styles from '@/styles/containers/Leadership.module.scss';
import cn from 'classnames';
type Props = {};

export default function Leadership({}: Props) {
  return (
    <section className={cn(styles['leadership'], 'mt-xxxl', 'gradient-bg fadeIn')}>
      <div className='main-cont'>
        <div className='grid-inner'>
          <div className={styles['title-cont']}>
            <span className='subtitle'>Our Leadership</span>
            <h1>Building</h1>
            <h1>FUTURE</h1>
            <h1>Leaders</h1>
            <p>
              The Spartans have taken the time to seek out the most
              knowledgeable and football-minded coaches in the area.
              Collectively, our coaches have over 100 years of football
              experience between playing and
            </p>
            <div className={styles['btn-cont']}>
              <Button bgc='secondary' size='lrg'>
                <div className={styles['btn-inner']}>
                  <span>Learn More</span>
                </div>
              </Button>
            </div>
          </div>
          <aside className={styles['img-wrap']}>
            <Image
              fill
              src='/img/coach.webp'
              sizes='(max-width: 850px) 100vw'
              alt='Spartans Coach'
            />
          </aside>
        </div>
      </div>
    </section>
  );
}
