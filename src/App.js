import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'assets/css/app.css';
import Homepages from 'Pages/Homepages';
import Detailspage from 'Pages/DetailsPage';
import Cart from 'Pages/Cart';
import Success from 'Pages/Succes';
import NotFound from 'Pages/NotFound';
import Provider from 'helpers/Hooks/useGlobalContext';

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepages} />
          <Route exact path="/categories/:idc" component={Detailspage} />
          <Route path="/categories/:idc/products/:idp" component={Detailspage} />
          <Route path="/cart" component={Cart} />
          <Route path="/success" component={Success} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
