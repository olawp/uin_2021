import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MoviePage from '../components/MoviePage';

import Movies from '../components/Movies';
import NoMatch from '../components/NoMatch';
import DefaultLayout from '../layouts/DefaultLayout';

const Routes = () => (
  <Router>
    <DefaultLayout>
      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route exact path="/:slug">
          <MoviePage/>
        </Route>
      </Switch>
    </DefaultLayout>
  </Router>
);

export default Routes;
