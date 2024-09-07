import Router from './shared/Router.jsx';
import UserContextProvider from './context/userContextProvider.jsx';

function App() {
  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  );
}

export default App;
