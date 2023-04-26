import Layout from '@/components/Layout';
import About from '@/containers/About';
import Sponsors from '@/containers/Sponsors';

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <>
      <About />
      <Sponsors />
    </>
  );
}
