import Accordion from '@/components/Accordion';
import styles from '@/styles/containers/Faqs.module.scss';
import FadeUp from '@/animations/FadeUp';
import BatchUp from '@/animations/BatchUp';
type Props = {};

export default function Faqs({}: Props) {
  return (
    <section className={styles['faqs']}>
      <div className='main-cont'>
        <div className='title-wrap'>
          <FadeUp>
            <span className='subtitle fadeUp'>FAQs</span>
            <h1 className='title-md fadeUp'>Common</h1>
            <h1 className='title-md fadeUp'>Questions</h1>
          </FadeUp>
        </div>
        <BatchUp>
          <div className={styles['accordion-cont']}>
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
          </div>
        </BatchUp>
      </div>
    </section>
  );
}
