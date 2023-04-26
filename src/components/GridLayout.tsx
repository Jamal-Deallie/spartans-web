import { ReactNode } from 'react';
import styles from '@/styles/components/GridLayout.module.scss';

interface LayoutProps<T> {
  items?: T[];
  title?: string;
  titleCn?: string;
  layoutCn?: string;
  children: ReactNode;
}

export default function GridLayout<T>({
  items,
  title,
  children,
  layoutCn,
  titleCn,
}: LayoutProps<T>) {
  return (
    <div className={layoutCn}>
      {title ? (
        <div className={styles['title']}>
          <h1 className={titleCn}>{title}</h1>
        </div>
      ) : null}

      <div className={styles['layout']}>{children}</div>
    </div>
  );
}
