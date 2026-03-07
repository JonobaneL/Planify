'use client';

import {
  AlertTriangle,
  CircleCheck,
  Info,
  Loader2,
  XCircle,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const TOAST_VARIANTS = {
  info: 'group-[.toaster]:before:!bg-[#0056AB]',
  success: 'group-[.toaster]:before:!bg-[#008000]',
  error: 'group-[.toaster]:before:!bg-[#FF0000]',
  warning: 'group-[.toaster]:before:!bg-[#FFA500]',
} as const;

const CUSTOM_ICONS = {
  success: <CircleCheck className="h-5 w-5 text-[#008000]" />,
  error: <XCircle className="h-5 w-5 text-[#FF0000]" />,
  warning: <AlertTriangle className="h-5 w-5 text-[#FFA500]" />,
  info: <Info className="h-5 w-5 text-[#0056AB]" />,
  loading: <Loader2 className="h-5 w-5 animate-spin text-primary" />,
  default: null,
};

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      position="top-right"
      icons={CUSTOM_ICONS}
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:text-sm group-[.toaster]:font-poppins group-[.toaster]:overflow-hidden min-h-16 group-[.toaster]:p-2 group-[.toaster]:gap-3 group-[.toaster]:px-4 group-[.toaster]:bg-white group-[.toaster]:text-neutral-950 group-[.toaster]:border-neutral-200 group-[.toaster]:shadow-xl dark:group-[.toaster]:bg-neutral-950 dark:group-[.toaster]:text-neutral-50 dark:group-[.toaster]:border-neutral-800 group-[.toaster]:border-l-0 before:absolute before:inset-y-0  group-[.toaster]:before:left-0 group-[.toaster]:before:w-[5px] group-[.toaster]:before:bg-primary group-[.toaster]:before:!scale-100 ',
          description:
            'group-[.toast]:!text-neutral-600 dark:group-[.toast]:!text-neutral-400',
          actionButton:
            'group-[.toast]:bg-neutral-900 group-[.toast]:text-neutral-50 dark:group-[.toast]:bg-neutral-50 dark:group-[.toast]:text-neutral-900',
          cancelButton:
            'group-[.toast]:bg-neutral-100 group-[.toast]:text-neutral-500 dark:group-[.toast]:bg-neutral-800 dark:group-[.toast]:text-neutral-400',
          icon: 'flex-[0_0_auto] !size-5 !mx-0',
          error: TOAST_VARIANTS.error,
          success: TOAST_VARIANTS.success,
          warning: TOAST_VARIANTS.warning,
          info: TOAST_VARIANTS.info,
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
