import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'assets/css/app.css';
import Homepages from 'Pages/Homepages';
import Detailspage from 'Pages/DetailsPage';
import Cart from 'Pages/Cart';
import Success from 'Pages/Succes';
import NotFound from 'Pages/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepages} />
          <Route path="/categories/:idc" component={Detailspage} />
          <Route path="/cart" component={Cart} />
          <Route path="/success" component={Success} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
