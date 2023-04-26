import Image from 'next/image';
import BatchFadeIn from '@/animations/BatchFadeIn';
import styles from '@/styles/components/Card.module.scss';
import cn from 'classnames';

type CardProps = {
  number: string;
  src: string;
  alt: string;
  title: string;
  desc: string;
};

export default function Card({ number, src, alt, title, desc }: CardProps) {
  return (
    <BatchFadeIn>
      <div className={cn(styles['card'], 'fade secondary-bg')}>
        <div className={styles['inner']}>
          <h4>{number}</h4>
          <div className={styles[title]}>
            <Image
              src={`/icon/${src}.svg`}
              fill
              sizes='(max-width: 850px) 20vw'
              alt={alt}
            />
          </div>

          <h5 className='title-md'>{title}</h5>

          <p>{desc}</p>
        </div>
      </div>
    </BatchFadeIn>
  );
}
