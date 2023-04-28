import cn from 'classnames';
import styles from '@/styles/components/CalendarCard.module.scss';
type Props = {};

export default function CalendarCard({}: Props) {
  return (
    <div className={cn(styles['card'], 'secondary-bg batch-up')}>
      <div className={cn(styles['date'], 'gradient-bg')}>
        <div className={styles['day']}>
          <span>01</span>
        </div>
        <div className={styles['month']}>
          <span>May</span>
        </div>
      </div>
      <div className={styles['event']}>
        <h5>conditioning sessions</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <p>Tuesday, 6:00pm EDT-8:30pm EDT</p>
      </div>
    </div>
  );
}
