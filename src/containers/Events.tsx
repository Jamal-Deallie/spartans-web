import CalendarCard from '@/components/CalendarCard';
import { Button } from '@/components/Button';
import styles from '@/styles/containers/Events.module.scss';
import cn from 'classnames';

type Props = {};

export default function Events({}: Props) {
  return (
    <section className={styles['events']}>
      <div className='main-cont'>
        <div className='grid-1'>
          <span className='subtitle'>Upcoming Events</span>
          <h1 className='title-md'>Spartans</h1>
          <h1 className={cn('title-md', 'txt-gradient')}>Events</h1>
        </div>

        <div className={styles['card-cont']}>
          <CalendarCard />
          <CalendarCard />
          <CalendarCard />
        </div>
        <div className={styles['btn-wrap']}>
          <Button size={'lrg'} bgc={'primary'}>See More</Button>
        </div>
      </div>
    </section>
  );
}
