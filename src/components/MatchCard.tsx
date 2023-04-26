import styles from '@/styles/components/MatchCard.module.scss';
import cn from 'classnames';

type CardProps = {
  id?: number;
  week: number;
  date: string;

  stadium: string;
  address: string;
  home: boolean;
  homeScore: number;
  awayScore: number;
  homeTeam: string;
  awayTeam: string;
};

export default function MatchCard({
  id,
  week,
  date,

  stadium,
  address,

  home,
  homeScore,
  awayScore,
  homeTeam,
  awayTeam,
}: CardProps) {
  return (
    <div className={cn(styles.card, home ? 'gradient-bg' : 'secondary-bg')}>
      <div className={styles.wrap}>
        <div className={styles.top}>
          <div className={styles.inner}>
            <div className={styles.date}>
              <span className='txt'>Week {week}</span>
              <span className='txt'> · {date}</span>
            </div>
          </div>
        </div>

        <div className={styles.middle}>
          <div className={styles['teams']}>
            <div className={styles['team-info']}>
              <span className={styles['team']}>{homeTeam}</span>
              <span className='txt'> (5-3, 2-0 Home)</span>
            </div>

            <div className={styles['team-score']}>
              <span>{homeScore}</span>
            </div>
          </div>
          <div className={styles.versus}>
            <span>Vs.</span>
          </div>
          <div className={styles['teams']}>
            <div className={styles['team-info']}>
              <span className={styles['team']}>{awayTeam}</span>
              <span className='txt'> (5-3, 2-2 Away)</span>
            </div>
            <div className={styles['team-score']}>
              <span>{awayScore}</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.location}>
            <span className='txt'>{stadium}</span>
            <span className='txt'>{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
