import Image from 'next/image';
import styles from '@/styles/components/StaffCard.module.scss';

type CardProps = {
  name: string;
  title: string;
  src: string;
};

export default function StaffCard({ name, title, src }: CardProps) {
  return (
    <div className={styles.col}>
      <div className={styles.wrap}>
        <div className={styles['info']}>
          <p className='txt'>{name}</p>
          <p className='txt'>{title}</p>
        </div>
        <div className={styles.box}>
          <Image src={src} fill sizes='(max-width: 800px) 20vw' alt={name} />
        </div>
      </div>
    </div>
  );
}
