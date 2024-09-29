import { PropsWithChildren } from 'react';

import ReactQueryProvider from './ReactQueryProvider';

/**
 * Providers
 * @description This component is used to wrap the app with all the providers
 * @param {PropsWithChildren} props
 * @returns {JSX.Element}
 */

const Providers = ({ children }: PropsWithChildren): JSX.Element => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Providers;
