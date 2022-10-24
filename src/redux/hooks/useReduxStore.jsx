import { useSelector } from 'react-redux';

const useReduxStore = () => {
    return useSelector(store => store.user);
  };

export default useReduxStore;