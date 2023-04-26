import { ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import { horizontalLoop } from '@/helpers/horizontalLoop';
type Props = {
  children: ReactNode;
  reverse?:boolean;
};

export default function MarqueeText({ children }: Props) {
  const root = useRef<HTMLDivElement>(null!);

  useIsomorphicLayoutEffect(() => {
    let loops = gsap.utils.toArray('.txt-wrapper').map((line, i) => {
      const links: any[] = gsap.utils.toArray('.scroll-txt');
      document.fonts.ready.then(function () {
        const tl = horizontalLoop(links, {
          repeat: -1,
          speed: 1 + i * 0.5,
          draggable: true,
          reversed: false,
          paddingRight: parseFloat(
            //@ts-ignore
            gsap.getProperty(links[0], 'marginRight', 'px')
          ),
        });

        links.forEach(link => {
          link.addEventListener('mouseenter', () =>
            gsap.to(tl, { timeScale: 0, overwrite: true })
          );
          link.addEventListener('mouseleave', () =>
            gsap.to(tl, { timeScale: i ? -1 : 1, overwrite: true })
          );
        });
      });
    });
  }, []);
  return <div ref={root}>{children}</div>;
}
