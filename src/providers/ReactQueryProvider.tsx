import { PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

/**
 * React Query Provider component
 * @param {PropsWithChildren} props - containing children to be rendered
 * @returns {JSX.Element} The `QueryClientProvider` component wrapping the children.
 */

const ReactQueryProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
