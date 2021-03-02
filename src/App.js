import Home from './pages/Home';
import { RestaurantsContextProvider } from './context/RestaurantsContext';

const App = () => {
  return (
    <RestaurantsContextProvider>
      <Home />
    </RestaurantsContextProvider>
  );
}

export default App;
