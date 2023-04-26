import { useState, SyntheticEvent } from 'react';
import styles from '@/styles/containers/CTA.module.scss';
import cn from 'classnames';
type Props = {};

export default function CTA({}: Props) {
  const [email, setEmail] = useState('');

  const onInputSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    alert(`The email you entered was: ${email}`);
  };

  return (
    <section className={cn(styles['cta-cont'], 'main-cont')}>
      <div className={cn('grid-inner', 'gradient-bg', styles['cta-wrap'])}>
        <div className={styles['heading']}>
          <h1 className='title-md'>Get in the </h1>
          <h1 className='title-md'>game</h1>
          <p>
            Don't miss out on the chance to be a part of something great! Sign
            up today for the Merrimack Valley Spartans Football and Cheerleading
            program and unleash your inner champion!"{' '}
          </p>
        </div>
        <div className={styles.button} id='btn'>
          {/* <Button href='signup' as='link' bgc='gradient' size='md'>
                  Sign Up
                </Button> */}
          <a className={cn(styles['btn'], 'secondary-bg')}>
            Sign Up Now
            <svg
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M20 12H4m16 0-6 6m6-6-6-6'
                strokeWidth={1.5}
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
