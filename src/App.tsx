import Layout from './pages/Layout';
import Providers from './providers';

/**
 *
// This is the main component that renders the application
// It wraps the Layout component with the Providers component
// which provides the necessary context and functionality for the application
// @returns {JSX.Element} The rendered App component
 */

const App = (): JSX.Element => {
  return (
    <Providers>
      <Layout />
    </Providers>
  );
};

export default App;
