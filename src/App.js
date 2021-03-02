import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { RestaurantsContextProvider } from './context/RestaurantsContext';
import Home from './pages/Home';
import RestaurantDetail from './pages/RestaurantDetail';
import RestaurantUpdate from './pages/RestaurantUpdate';

console.log(window.location.href, 'href')
console.log(window.location.hostname, 'hostname')
console.log(window.location.pathname, 'pathname')

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/restaurants/:id/update" component={RestaurantUpdate} />
            <Route exact path="/restaurants/:id" component={RestaurantDetail} />
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
