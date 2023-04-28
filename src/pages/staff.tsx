import { useRef, useEffect, useState, useCallback, ReactNode } from 'react';
import GridLayout from '@/components/GridLayout';
import { Button } from '@/components/Button';
import StaffCard from '@/components/StaffCard';
import StaffDetails from '@/components/StaffDetails';
import { staff } from '@/data/data';
import { useLenis } from '@studio-freight/react-lenis';
import styles from '@/styles/pages/Staff.module.scss';

type Props = {};

export default function Staff({}: Props) {
  const root = useRef<HTMLDivElement>(null!);
  const [toggleCategory, setToggleCategory] = useState(false);
  const [toggleDetails, setToggleDetails] = useState(false);
  const [index, setIndex] = useState(0);
  const lenis = useLenis((lenis: any) => lenis);

  const toggleFunction = useCallback(
    (indx: number) => {
      setIndex(indx);
      setToggleDetails(toggleDetails => !toggleDetails);
    },
    [setToggleDetails, toggleDetails]
  );

  const activeItem = staff[index];
  console.log(activeItem.name);
  useEffect(() => {
    if (toggleDetails) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [lenis, toggleDetails]);

  const staffItems = (): ReactNode => {
    let items = staff.filter(item => item.category === 'staff');
    return (
      <GridLayout title={'Our Staff'} titleCn={'title-sm'}>
        {items.map(({ name, title, src, id }) => {
          return (
            <div key={id}>
              <StaffCard name={name} title={title} src={src} />
            </div>
          );
        })}
      </GridLayout>
    );
  };

  const coachItems = (): ReactNode => {
    let items = staff.filter(item => item.category === 'coaches');
    return (
      <GridLayout title={'Our Coaches'} titleCn={'title-sm'}>
        {items.map(({ name, title, src, id }) => {
          return (
            <div
              key={id}
              onClick={() => {
                toggleFunction(id);
              }}>
              <StaffCard name={name} title={title} src={src} />
            </div>
          );
        })}
      </GridLayout>
    );
  };

  function toggleStaff() {
    if (toggleCategory === true) return;
    setToggleCategory(!toggleCategory);
  }

  function toggleCoach() {
    if (toggleCategory === false) return;
    setToggleCategory(!toggleCategory);
  }

  return (
    <section className='main-cont' ref={root}>
      <div className={styles['staff']}>
          <div className='title-wrap'>
            <h1 className='title-md'>The Spartan</h1>
            <h1 className='title-md'>Family</h1>
          </div>
   

        <div className={styles['btn']}>
          <div className={styles['btn-inner']}>
            <Button bgc={'gradient'} size={'md'} onClick={toggleCoach}>
              Coaches
            </Button>
            <Button bgc={'gradient'} size={'md'} onClick={toggleStaff}>
              Staff
            </Button>
            <Button bgc={'gradient'} size={'md'}>
              Players
            </Button>
          </div>
        </div>
      </div>
      <>{toggleCategory ? staffItems() : coachItems()}</>
      <>
        <StaffDetails
          {...activeItem}
          isOpened={toggleDetails}
          setIsOpened={setToggleDetails}
        />
      </>
    </section>
  );
}
