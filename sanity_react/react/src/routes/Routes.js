import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Movies from '../components/Movies';
import DefaultLayout from '../layouts/DefaultLayout';

const Routes = () => (
  <Router>
    <DefaultLayout>
      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>
      </Switch>
    </DefaultLayout>
  </Router>
);

export default Routes;
