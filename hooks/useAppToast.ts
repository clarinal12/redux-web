import { useRef } from 'react';
import { useToast } from '@chakra-ui/react';
import { UseToastOptions } from '@chakra-ui/toast';

export default () => {
  const toast = useToast();
  const toastRef = useRef<string | number | undefined>();

  const showToast = (description: string, status: UseToastOptions['status'], duration = 3000) => {
    if (toastRef.current) toast.close(toastRef.current);
    toastRef.current = toast({
      description,
      status,
      position: 'top',
      duration,
    });
  };

  return { showToast };
};
