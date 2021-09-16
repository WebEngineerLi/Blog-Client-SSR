import { initStateProps } from '@/store/reducers';

declare module 'react-redux' {
  interface DefaultRootState extends initStateProps { };
}