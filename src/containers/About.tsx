import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import cn from 'classnames';
import FadeIn from '@/animations/FadeIn';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import styles from '@/styles/containers/About.module.scss';

type Props = {};

export default function About({}: Props) {
  // const root = useRef<HTMLDivElement | null>(null);

  // useIsomorphicLayoutEffect(() => {
  //   if (root.current) {
  //     gsap.fromTo(
  //       root.current,
  //       { opacity: 0 },
  //       {
  //         opacity: 1,
  //         scrollTrigger: {
  //           start: 'top+=100 center',
  //           end: 'bottom bottom',
  //           trigger: root.current,
  //         },
  //       }
  //     );
  //   }
  // }, []);

  return (
    // <div ref={root}>
    <section>
      <div className='grid-inner'>
        <div className={styles['title-wrap']}>
          <h1 className={cn('title-md txt-gradient')}>Where Character</h1>
          <h1 className={cn('title-md')}>Matters</h1>
        </div>

        <div className={styles['desc-cont']}>
          <p className='txt'>
            The Spartans are an organization within American Youth Football
            (AYF). AYF was founded in 1996 and showcases some of the best
            athletes in the country each year at nationals. The Spartans are in
            the Central Massachusetts conference. This just so happens to be the
            most competitive youth football and cheer conference in the state of
            Massachusetts. Yes, you read that correctly. This conference is the
            most competitive in the entire state of Massachusetts. The Spartans
            will be playing on a Division One level. We are firm believers in
            “iron sharpens iron”. We want our athletes, football and cheer, in
            the most competitive conferences and divisions. We don't take the
            approach of being a big fish in a small pond. We will not take the
            easy road to winning.
          </p>
          <p className='txt'>
            We welcome any and all families that are currently playing or
            cheering within any other local football and cheer organizations.
            You do not need permission from your organization (city,
            recreational, pop warner) to leave and come play with an AYF
            organization. If you do currently belong to an AYF organization, you
            may be eligible to join the Spartans. Please contact us to discuss
            your options.
          </p>
          <p className='txt'>
            As an organization, we pride ourselves on being transparent and open
            with the amazing individuals that make up the Spartan family. With
            that said, there are quite a few questions that seem to be
            repetitively asked. We'd like to take this time to give the families
            with questions a few answers directly from us.
          </p>
        </div>
      </div>

      <FadeIn>
        <div className='main-cont'>
          <div className={cn(styles['img-inner'], 'fadeIn')}>
            <div className={styles['img-wrap']}>
              <Image
                src={'/img/about.webp'}
                alt='Cheerleading'
                fill
                sizes='100vw'
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
    // </div>
  );
}
