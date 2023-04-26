import { useState, useCallback, useEffect } from 'react';
import Modal from '@/components/Modal';
import { Button } from '@/components/Button';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useLenis } from '@studio-freight/react-lenis';
import styles from '@/styles/containers/Donations.module.scss';
type Props = {};

export default function Donations({}: Props) {
  const [toggleLogin, setToggleLogin] = useState(false);
  const lenis = useLenis((lenis: any) => lenis);

  const toggleFunction = useCallback(() => {
    setToggleLogin(toggleLogin => !toggleLogin);
  }, [setToggleLogin, toggleLogin]);

  useEffect(() => {
    if (toggleLogin) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [lenis, toggleLogin]);
  return (
    <>
      <div className={styles['btn-wrap']}>
        <Button size={'md'} onClick={toggleFunction}>
          Donations
        </Button>
      </div>

      <Modal toggleFunc={toggleFunction} isOpened={toggleLogin}>
        <div>
          <div className={styles.heading}>
            <h1 className='title-md secondary-clr'>Donate</h1>
            <h1 className='title-md txt-gradient'>Now</h1>
            <p className='secondary-clr'>
              Your contributions will enable us to meet our goals and improve
              conditions. Your generous donation will fund our mission.
            </p>
            <hr className='secondary-bg' />
          </div>
        </div>

        <div className={styles['form-cont']}>
          <h5 className='secondary-clr'>Choose your donation amount</h5>
          <div>
            <form className={styles['form']}>
              <div className={styles['buttons']}>
                <button>$25</button>
                <button>$50</button>
                <button>$75</button>
                <button>$100</button>
              </div>
              <div className={styles['fields']}>
                <label>Other:</label>
                <div className={styles['input']}>
                  <input type='text' placeholder='$' />
                </div>
              </div>
              <PayPalScriptProvider options={{ 'client-id': 'test' }}>
                <PayPalButtons style={{ layout: 'vertical' }} />
              </PayPalScriptProvider>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
