import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { RestaurantsContextProvider } from './context/RestaurantsContext';
import Home from './pages/Home';
import RestaurantDetail from './pages/RestaurantDetail';
import RestaurantUpdate from './pages/RestaurantUpdate';

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <h1>es una prueba con el homepage</h1>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/restaurants/:id/update" component={RestaurantUpdate} />
            <Route exact path="/restaurants/:id" component={RestaurantDetail} />
            <Route path="/*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
}

export default App;
