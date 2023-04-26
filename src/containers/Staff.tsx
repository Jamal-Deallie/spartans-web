import styles from '@/styles/containers/Staff.module.scss';
import { staff, headcoaches } from '@/data/data';
import cn from 'classnames';
import React from 'react';

type Props = {};

export default function Staff({}: Props) {
  return (
    <section className='main-cont'>
      <div className={styles['staff-cont']}>
        <div className={styles['outer-cont']}>
          <div className={styles['title-cont']}>
            <div className={styles.title}>
              <h1 className='title-md'>Our</h1>
            </div>
            <div className={styles.title}>
              <h1 className='title-md txt-gradient'>Staff</h1>
            </div>
          </div>

          <div className={styles.teams}>
            {staff.map(({ id, src, name, title }) => {
              return (
                <div key={id} className={styles.col}>
                  <div className={styles.wrap}>
                    <div className={styles['info']}>
                      <p className='txt'>{name}</p>
                      <p className='txt'>{title}</p>
                    </div>
                    <div className={styles.box}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles['container-primary']}>
        <div className={styles['title-secondary']}>
          <div className={styles.title}>
            <h1 className='title-md'>Our</h1>
          </div>
          <div className={styles.title}>
            <h1 className='title-md txt-gradient'>Coaches</h1>
          </div>
        </div>

        <div className={styles.teams}>
          {headcoaches.map(({ id, image, name, title }) => {
            return (
              <div key={id} className={styles.col}>
                <div className={styles['wrap']}>
                  <div className={styles['info']}>
                    <p className='txt'>{name}</p>
                    <p className='txt'>{title}</p>
                  </div>

                  <div className={styles.line}></div>
                  <div className={styles.box}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
