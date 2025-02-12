import { classNames } from '@/lib/utils';
import NextLink from 'next/link';
import { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from 'react';
import styles from './style.module.scss';

interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  variant?: 'button' | 'text';
  icon?: ReactNode;
  href: string;
}

const Link = ({ variant = 'text', icon, children, ...props }: PropsWithChildren<LinkProps>) => (
  <NextLink
    {...props}
    className={classNames(styles.link, 'clickable', props.className)}
    data-variant={variant}
  >
    {icon || null}
    {children}
  </NextLink>
);

export default Link;
