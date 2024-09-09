import Router from './shared/Router.jsx';
import UserContextProvider from './context/userContextProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
