import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps } from 'react';
import './style.css';
import { cn } from '@/utils/css';

const buttonStyles = cva(
  ['cursor-pointer', 'border-0', 'rounded-3xl', 'inline'],
  {
    variants: {
      variant: {
        primary: 'bg-sky-600 text-white',
        secondary:
          'bg-transparent text-gray-900 shadow-[0_0_0_1px_rgba(0,0,0,0.15)]',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-4 py-2 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonStyles>;

/**
 * Primary UI component for user interaction
 */
function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(buttonStyles({ variant, size }), className)}
      {...props}
    />
  );
}

export default Button;
