// App.tsx
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DeliveryListPage from './pages/DeliveryListPage';
import CreateDeliveryPage from './pages/CreateDeliveryPage';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/" exact component={DeliveryListPage} />
          <Route path="/create" exact component={CreateDeliveryPage} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
