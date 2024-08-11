import { createContext } from 'react';

export const LoadingContext = createContext<{
  isLoading: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}>({ isLoading: false });
