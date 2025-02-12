import Block from '@/components/ui/Block';
import Image from 'next/image';
import styles from './style.module.scss';

interface CoverProps {
  src: string;
  alt?: string;
}

const Cover = ({ src, alt }: CoverProps) => (
  <Block
    className={styles.coverContainer}
    full
    style={{
      margin: 0,
    }}
  >
    <Image alt={alt ?? 'Cover Image'} fill src={src} />
  </Block>
);

export default Cover;
