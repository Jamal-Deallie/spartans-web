import React, {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  memo,
} from 'react';
import cn from 'classnames';
import styles from '@/styles/components/Input.module.scss';

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  autoComplete?: string;
  name?: string;
  type?: string;
  error?: string;
}

const InputComponent = forwardRef(
  (
    { className, autoComplete, name, type, error, ...rest }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <input
        className={cn(styles['input'], {
          Input__error: error,
        })}
        autoComplete={autoComplete}
        // data-testid='test-input'
        name={name}
        type={type}
        ref={ref}
        {...rest}
      />
    );
  }
);

export const Input = memo(InputComponent);
