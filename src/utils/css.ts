import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// eslint-disable-next-line import/prefer-default-export
export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));
