import { useState } from 'react';
import CalendarCard from '@/components/CalendarCard';
import { Button } from '@/components/Button';
import cn from 'classnames';
import styles from '@/styles/pages/Schedule.module.scss';
type Props = {};

export default function Schedule({}: Props) {
  return (
    <section className={cn(styles['schedule'])}>
      <div className='main-cont'>
        <div className='title-wrap'>
          <h1 className='title-md'>2023</h1>
          <h1 className='title-md'>Spartans</h1>
          <h1 className='title-md'>Events</h1>
        </div>

        <div className={styles['desc-cont']}>
          <p>
            Merrimack Valley Spartans has an exciting schedule lined up for the
            2023 season! The season will kick off in September with a series of
            games against local teams in the region.
          </p>
        </div>
        <div className={styles['btn']}>
          <div className={styles['btn-inner']}>
            <Button bgc={'gradient'} size={'md'}>
              Meetings
            </Button>
            <Button bgc={'gradient'} size={'md'}>
              Practice
            </Button>
            <Button bgc={'gradient'} size={'md'}>
              Gameday
            </Button>
          </div>
        </div>
        <div className={styles['card-cont']}>
          <CalendarCard />
          <CalendarCard />
          <CalendarCard />
        </div>
      </div>
    </section>
  );
}
