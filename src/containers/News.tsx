import Image from 'next/image';
import { Button } from '@/components/Button';
import NewsCard from '@/components/NewsCard';
import styles from '@/styles/containers/News.module.scss';
import cn from 'classnames';

type Props = {};

export default function News({}: Props) {
  return (
    <section className='mt-xxxl'>
      <div className='main-cont '>
        <div className='grid-1'>
          <span className='subtitle'>Latest News</span>
          <h1 className='title-md z-1'>Always</h1>
          <h1 className='title-md txt-gradient z-2'>Stay</h1>
          <h1 className={cn('title-md')}>Connected</h1>
        </div>

        <div className={styles['item-cont']}>
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </section>
  );
}
