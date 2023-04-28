import CalendarCard from '@/components/CalendarCard';
import { Button } from '@/components/Button';
import styles from '@/styles/containers/Events.module.scss';
import FadeUp from '@/animations/FadeUp';
import BatchUp from '@/animations/BatchUp';

type Props = {};

export default function Events({}: Props) {
  return (
    <section className={styles['events']}>
      <div className='main-cont'>
        <div className='title-wrap'>
          <FadeUp>
            <span className='subtitle fadeUp'>Upcoming Events</span>
            <h1 className='title-md fadeUp'>Spartans</h1>
            <h1 className='title-md fadeUp'>Events</h1>
          </FadeUp>
        </div>
        <BatchUp>
          <div className={styles['card-cont']}>
            <CalendarCard />
            <CalendarCard />
            <CalendarCard />
          </div>
        </BatchUp>
        <div className={styles['btn-wrap']}>
          <Button size={'lrg'} bgc={'primary'} as={'link'} href={'/events'}>
            See More
          </Button>
        </div>
      </div>
    </section>
  );
}
