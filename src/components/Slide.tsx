import cn from 'classnames';
import styles from '@/styles/components/Slide.module.scss';

type SlideProps = {
  id: number;
  number: string;
  value: string;
  desc: string;
};

export default function Slide({ id, value, number, desc }: SlideProps) {
  return (
    <div className={cn(styles['slide'], 'gradient-bg')}>
      <div className={styles['wrap']}>
        <h5>{number}</h5>
        <h4>{value}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}
