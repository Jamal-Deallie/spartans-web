import dynamic from 'next/dynamic';
import FullSlider from '@/components/FullSlider';
import Faqs from '@/containers/Faqs';
import CTA from '@/containers/CTA';
import Intro from '@/containers/Intro';
import Mission from '@/containers/Mission';
import Events from '@/containers/Events';
import Gear from '@/containers/Gear';
import Leadership from '@/containers/Leadership';
import FadeIn from '@/animations/FadeIn';
import Slider from '@/containers/Values';
import { Button } from '@/components/Button';
import cn from 'classnames';
import styles from '@/styles/pages/Home.module.scss';

type Props = {};

const DynamicHero = dynamic(() => import('@/containers/Hero'), {
  ssr: false,
});

export default function home({}: Props) {
  return (
    <>
      <section>
        <div className={cn(styles['hero'], 'main-cont')}>
          <DynamicHero />
          <div className={styles['cta']}>
            <div className={styles['cta-wrap']}>
              <div className={styles['title-cont']}>
                <h1 className='title-md txt-gradient'>Unleash your</h1>
                <h1 className='title-md'>winning spirit</h1>
              </div>
              <div className={styles['copy']}>
                <p>
                  The Spartans are here give the youth the best chance of
                  growing on and off the field. We {"don't"} want to be average.
                  We want to be great.
                </p>
              </div>
              <div className={styles.button} id='btn'>
                <Button
                  bgc={'gradient'}
                  size={'lrg'}
                  as={'link'}
                  href={'signup'}>
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Intro />
        <FadeIn>
          <FullSlider />
        </FadeIn>

        <Mission />
        <FadeIn>
          <Leadership />
        </FadeIn>

        <Slider />
 
        <FadeIn>
          <Gear />
        </FadeIn>

        <Events />
        <CTA />
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      id: 'home',
    },
  };
}
