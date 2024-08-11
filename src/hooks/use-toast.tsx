import {useEffect} from 'react';
import {useToast as useToastNativeBase} from 'native-base';

const useToast = () => {
  const toast = useToastNativeBase();
  const success = (text: string) => {
    toast.show({
      title: text,
      duration: 2000,
    });
  };

  const error = (text: string) => {
    toast.show({
      title: text || 'Something went wrong',
      duration: 2000,
    });
  };

  const hideAllToasts = () => {
    toast.closeAll();
  };

  useEffect(() => {
    return () => hideAllToasts();
  }, []);

  return {success, error, hideAllToasts};
};

export default useToast;
