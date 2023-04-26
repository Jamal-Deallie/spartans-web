import { useState } from 'react';
import MatchUpCard from '@/components/MatchCard';
import Layout from '@/components/Layout';
import { scheduleItems } from '@/data/data';
import cn from 'classnames';
import styles from '@/styles/pages/Schedule.module.scss';
type Props = {};

export default function Schedule({}: Props) {
  const [regSeason, setRegSeason] = useState(true);

  return (
    <section className={cn(styles['schedule'])}>
      <div className={'main-cont'} id='outer'>
        <div className={styles['title-primary']}>
          <div className={styles.title}>
            <h1 className='title'>2023</h1>
            <h1 className='title txt-gradient'>Spartans</h1>
            <h1 className='title'>Schedule</h1>
          </div>
        </div>
        <div className={styles['desc-cont']}>
          <p>
            Merrimack Valley Spartans has an exciting schedule lined up for the
            2023 season! The season will kick off in September with a series of
            games against local teams in the region.
          </p>
        </div>
        <div className={styles['btn-cont']}>
          <button className={regSeason ? 'gradient-bg' : 'secondary-bg'}>
            Regular Season
          </button>
          <button className={regSeason ? 'secondary-bg' : 'gradient-bg'}>
            Postseason
          </button>
        </div>
        {scheduleItems.map(item => {
          return (
            <MatchUpCard
              // opponent={opponent}
              // score={score}
              // address={address}
              // stadium={stadium}
              // date={date}
              // week={week}
              // home={home}
              // op
              {...item}
              key={item.id}
            />
          );
        })}
      </div>
    </section>
  );
}
