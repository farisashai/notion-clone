import { classNames } from '@/lib/utils';
import type { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from 'react';
import styles from './style.module.scss';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'button' | 'text';
  icon?: ReactNode;
}

const Button = ({
  variant = 'button',
  children,
  icon,
  ...props
}: PropsWithChildren<ButtonProps>) => (
  <button
    type="button"
    {...props}
    data-variant={variant}
    className={classNames(styles.button, 'clickable', props.className)}
  >
    {icon || null}
    {children}
  </button>
);

export default Button;
