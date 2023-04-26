import { useState, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import styles from '@/styles/components/Accordion.module.scss';
import cn from 'classnames';

type AccordionProps = {
  questions?: string;
  answers?: string;
};

const Accordion = ({ questions, answers }: AccordionProps) => {
  const tl = useRef<gsap.core.Timeline | null>(null);
  const root = useRef<HTMLDivElement>(null!);
  const answer = useRef<HTMLDivElement>(null!);
  const question = useRef<HTMLDivElement>(null!);
  const icon = useRef<HTMLDivElement>(null!);

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(toggle => !toggle);
  };
  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({ pause: true });
      tl.current
        .to(root.current, {
          duration: 0.1,
          backgroundImage: 'linear-gradient(90deg, #ff5500, #f94d29)',
        })
        .to(
          answer.current,
          { duration: 0.25, autoAlpha: 1, height: 'auto' },
          '<-=.1'
        )
        .to(icon.current, { duration: 0.2, rotate: 45 }, '-=.15')

        .reverse();
    }, root);

    return () => ctx.revert();
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (tl.current) {
      tl.current.reversed(!toggle);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tl, toggle]);

  return (
    <div className={cn(styles['faq'], 'batch-item')} ref={root}>
      <button className={styles['question']} onClick={handleToggle}>
        <span className='txt'>Reducio portus avada?</span>
        <div ref={icon}>
          <svg viewBox='0 0 24 24'>
            <path className='iconV' d='M 12,0 V 24' />
            <path className='iconH' d='M 0,12 H 24' />
          </svg>
        </div>
      </button>
      <div className={styles['answer-wrap']} ref={answer}>
        <div className={styles['answer']}>
          <p className='txt'>
            Text answering the question here. Ennervate wingardium expelliarmus
            leviosa locomotor morsmordre immobilus locomotor. Evanesco
            serpensortia engorgio wolfsbane legilimens. Aparecium inflamarae
            evanesco dissendium avada tergeo. Impedimenta jinx silencio portus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
