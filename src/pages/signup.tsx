import { Button } from '@/components/Button';
import Faqs from '@/containers/Faqs';
import FadeUp from '@/animations/FadeUp';
import BatchUp from '@/animations/BatchUp';
import { signUpData } from '@/data/data';
import styles from '@/styles/pages/Signup.module.scss';

type Props = {};

export default function Signup({}: Props) {
  return (
    <section className='main-cont'>
      <div className={styles['signup']}>
        <div className={styles['outer-container']}>
          <div className='title-wrap'>
            <h1 className='title-md'>Be a part of</h1>
            <h1 className='title-md'>The Spartans</h1>
          </div>

          <div className={styles.join}>
            <div className={styles.desc}>
              <p className='fullscreen' id='splitBody'>
                Use the Link below to download the Registration Packet
              </p>
            </div>
            <div className={styles['btn-cont']}>
              <Button
                as='externalLink'
                bgc='gradient'
                size='lrg'
                href='https://img1.wsimg.com/blobby/go/481e6343-b51d-4de6-937b-5624df740755/downloads/2022%20registration%20packet.pdf?ver=1662771949589'>
                <div className={styles['btn-inner']}>
                  <span>Registration packet (pdf)</span>
                  <span className={styles.icon}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 800 800'>
                      <path
                        style={{
                          fill: 'none',
                        }}
                        d='M0 0h800v800H0z'
                      />
                      <path
                        d='M560.4 160v240h80V80H160v320h80.4V160h320Zm-80 80v240h120l-200 240-200-240h120V240h160Z'
                        style={{
                          fill: '#fff',
                        }}
                      />
                    </svg>
                  </span>
                </div>
              </Button>
            </div>
          </div>
          <div className={styles.table}>
            <table>
              <thead>
                <tr>
                  <th className={styles['th-empty']}></th>
                  <th>2023 Fall Registration</th>
                </tr>
              </thead>
              <tbody>
                {signUpData.map(({ id, details, subject }) => {
                  return (
                    <tr key={id}>
                      <td>{subject}</td>
                      <td>{details}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className={styles.disclaimer}>
              <span>*Dates may be subject to change.</span>
            </div>
          </div>
        </div>
      </div>

      <Faqs />
    </section>
  );
}
