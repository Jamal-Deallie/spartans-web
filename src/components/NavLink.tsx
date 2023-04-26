import { useState, useEffect, ReactNode } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styles from '@/styles/components/NavLinks.module.scss';

type NavLinkProps = LinkProps & {
  children: ReactNode;
  href: string;
  key?: string | number;
};

export default function NavLink({ children, ...props }: NavLinkProps) {
  const { asPath, isReady } = useRouter();
  const [active, setActive] = useState<boolean>(false);

  useIsomorphicLayoutEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const linkPathname = new URL(
        (props.as || props.href) as string,
        location.href
      ).pathname;

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname;

      linkPathname === activePathname ? setActive(true) : setActive(false);
    }
  }, [asPath, isReady, props.as, props.href]);

  return (
    <Link
      {...props}
      className={cn([styles.link], active ? [styles.active] : null)}>
      {children}
    </Link>
  );
}
