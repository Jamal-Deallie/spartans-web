import { useBlazeSlider } from 'react-blaze-slider';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Slide from '@/components/Slide';
import { valueItems } from '@/data/data';

const Arrow = dynamic(() => import('@/svgs/arrow-right.svg'), { ssr: false });

type Props = {};

export default function Slider({}: Props) {
  const ref = useBlazeSlider({
    all: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
    '(max-width: 800px)': {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  });

  return (
    <div className='blaze-slider' ref={ref}>
      <div className='main-cont'>
        <div className='controls'>
          <button className='blaze-prev'>
            <Arrow />
          </button>
          {/* <div className='blaze-pagination'></div> */}
          <button className='blaze-next'>
            <Arrow />
          </button>
        </div>
      </div>
      <div className='blaze-container'>
        <div className='blaze-track-container'>
          <div className='blaze-track'>
            {valueItems.map(item => {
              return <Slide {...item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
