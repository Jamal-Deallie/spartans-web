import Image from 'next/image';

type IconProps = {
  src: string;
};

export default function Icon({ src }: IconProps) {
  return <Image src={`/icons/${src}`} alt={src} width={25} height={25} />;
}
