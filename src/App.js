import Home from './Pages/Home';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';


function App() {

  const client=new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}>
      <Home/>
      </QueryClientProvider> 
    </div>
  );
}



export default App;
