import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import Image from 'next/image';

export interface ImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string;
  blurSrc?: string;
  objFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  alt: string;
  as?: 'fill' | 'fixed';
  onClick?: (event: React.MouseEvent) => void;
}

export default function CustomImage({
  src,
  objFit = 'cover',
  alt,
  as,
  blurSrc,
}: ImageProps) {
  return (
    <Image
      alt={alt}
      placeholder='blur'
      blurDataURL={blurSrc}
      src={src}
      fill
      sizes='(max-width: 850px) 100vw'
      style={{
        objectFit: objFit,
      }}
    />
  );
}
