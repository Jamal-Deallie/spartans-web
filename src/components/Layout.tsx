import { ReactNode } from 'react';
import { Head } from 'next/document';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { SEOResults as Results } from '@/types/typings';
import cn from 'classnames';
import styles from '@/styles/components/Layout.module.scss';

type LayoutProps = {
  children: ReactNode;
  seo?: Results;
};

export default function Layout({ children, seo }: LayoutProps) {
  return (
    <>
      <SEO {...seo} />
      <div className={styles['layout']}>
        <Navbar />
        <main className={styles['main-wrap']}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
