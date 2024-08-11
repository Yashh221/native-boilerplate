import {useSelector} from 'react-redux';

export const useStore = () => {
  const store = useSelector(state => state);
  return store;
};
