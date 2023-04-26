import Form from '../components/Form';
import Layout from '@/components/Layout';
import styles from '@/styles/pages/Contact.module.scss';
type Props = {};

export default function Contact({}: Props) {
  return (
    <section className={styles['contact-cont']}>
      <div className='grid-inner'>
        <div className={styles['title-cont']}>
          <div>
            <h1 className='title-md txt-gradient'>Any</h1>
          </div>
          <div>
            <h1 className='title-md'>Questions?</h1>
          </div>
        </div>

        <div className={styles['desc']}>
          <p>
            We take on select projects, working with companies who are inventing
            or reinventing. If there’s a project you’d like to talk to us about,
            please get in touch.
          </p>
        </div>
        <div className={styles['form-wrap']}>
          <Form />
        </div>
      </div>
    </section>
  );
}
