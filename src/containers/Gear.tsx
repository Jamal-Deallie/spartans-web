import Image from 'next/image';
import { Button } from '@/components/Button';
import styles from '@/styles/containers/Gear.module.scss';
import cn from 'classnames';
type Props = {};

export default function Gear({}: Props) {
  return (
    <section className={cn(styles['gear'], 'mt-xxxl', 'gradient-bg fadeIn')}>
      <div className='main-cont'>
        <div className='grid-inner'>
          <aside className={styles['img-wrap']}>
            <Image
              fill
              src='/img/gear.webp'
              sizes='(max-width: 850px) 100vw'
              alt='Spartans Gear'
            />
          </aside>
          <div className={styles['title-cont']}>
            <span className='subtitle'>Shop Now</span>
            <h1>Gear Up</h1>
            <h1>For Game</h1>
            <h1>Gameday</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <div className={styles['btn-cont']}>
              <Button bgc='secondary' size='lrg'>
                <div className={styles['btn-inner']}>
                  <span>Shop Now</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
