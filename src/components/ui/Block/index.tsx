import { classNames } from '@/lib/utils';
import { HTMLProps, PropsWithChildren } from 'react';
import styles from './style.module.scss';

interface BlockProps extends HTMLProps<HTMLDivElement> {
  full?: boolean;
}

const Block = ({ children, full = false, ...props }: PropsWithChildren<BlockProps>) => (
  <div
    {...props}
    className={classNames(styles.block, props.className)}
    data-span={full ? 'full' : 'center'}
  >
    {children}
  </div>
);

export default Block;
