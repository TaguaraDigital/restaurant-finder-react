import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { RestaurantsContextProvider } from './context/RestaurantsContext';
import Home from './pages/Home';
import RestaurantDetail from './pages/RestaurantDetail';
import RestaurantUpdate from './pages/RestaurantUpdate';

const homepage = window.location.pathname;
console.log(window.location.href, 'href')
console.log(window.location.hostname, 'hostname')
console.log(window.location.pathname, 'pathname')

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path={homepage} component={Home} />
            <Route exact path={homepage + "restaurants/:id/update"} component={RestaurantUpdate} />
            <Route exact path={homepage + "restaurants/:id"} component={RestaurantDetail} />
            {/* <Route path="/*">
              <Redirect to="/" />
            </Route> */}
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
}

export default App;
