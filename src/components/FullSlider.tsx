import { MutableRefObject, ReactNode, useRef, useEffect } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import { Button } from '@/components/Button';
import { slideItems } from '@/data/data';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from '@/styles/components/FullSlider.module.scss';
import gsap from 'gsap';

type Props = {};
const Arrow = dynamic(() => import('@/svgs/arrow-right.svg'), { ssr: false });

export default function FullSlider({}: Props) {
  function useArrayRef(): [MutableRefObject<any[]>, (ref: any) => void] {
    const refs = useRef<any[]>([]);
    refs.current = [];
    return [refs, (ref: any) => ref && refs.current.push(ref)];
  }

  const [slides, setSlides] = useArrayRef();

  const tl = useRef<gsap.core.Timeline>(null!);
  const main = useRef<HTMLDivElement>(null!);
  const bar = useRef<HTMLDivElement>(null!);

  const nextBtnHandler = () => {
    if (tl.current.progress() == 1) {
      tl.current.play(0);
    } else {
      tl.current.play();
    }
  };

  const prevBtnHandler = () => {
    if (tl.current.progress() == 1) {
      tl.current.play(0);
    } else {
      tl.current.play(tl.current.time() + 0.0001);
    }
  };

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(main.current, { autoAlpha: 1 });
      tl.current = gsap.timeline({
        defaults: { duration: 0.3, opacity: 0 },
      });

      const timer = gsap
        .from(bar.current, {
          scaleX: 0,
          transformOrigin: '0% 50%',
          duration: 4,

          onComplete: () => {
            tl.current.play();
            gsap.to(bar.current, { opacity: 0, duration: 0.2 });
          },
        })
        .pause();

      function checkAutoPlay() {
        timer.restart();
        gsap.to(bar.current, { opacity: 1, duration: 0.2 });
      }
      tl.current
        .add('start')
        .from(slides.current[0], {})
        .addPause('+=0', checkAutoPlay)
        .to(slides.current[0], { opacity: 0 })

        .from(slides.current[1], {}, 'slide2')
        .addPause('+=0', checkAutoPlay)
        .to(slides.current[1], { opacity: 0 })

        .from(slides.current[2], {})
        .addPause('+=0', checkAutoPlay)
        .to(slides.current[2], { opacity: 0 })

        .from(slides.current[3], {})
        .addPause('+=0', checkAutoPlay)
        .to(slides.current[3], { opacity: 0 })
        .repeat(-1);

      console.log(tl.current.progress());
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <div className='main-cont fadeIn'>
      <div className={styles['slider']}>
        <div className={styles['wrap']} ref={main}>
          <div className={styles['slide-cont']}>
            {slideItems.map(({ id, src }) => (
              <div key={id} className={styles['slide']} ref={setSlides}>
                <Image
                  fill
                  alt='The Spartan Football Team'
                  src={src}
                  sizes='(max-width: 738px) 100vw'
                />
              </div>
            ))}
          </div>
          <div className={styles['progress']}>
            <div className={styles['bar']} ref={bar}></div>
          </div>

          <div className={styles['btn-wrap']}>
            <Button size={'sm'} bgc={'secondary'} onClick={prevBtnHandler}>
              <Arrow />
            </Button>
            <Button size={'sm'} bgc={'secondary'} onClick={nextBtnHandler}>
              <Arrow />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
