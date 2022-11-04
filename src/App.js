import {BrowserRouter, Route, Switch} from 'react-router-dom';

import NuevoAutor from './components/newAutor';
import AllAutors from './components/AllAutors';
import UpdateAutor from './components/updateAutor';
import Error from './components/Error';

const App = () => {
  return(
    <div className="container">
      <BrowserRouter>
        <Switch>
        <Route path="/" exact render={() => <AllAutors />} />
        <Route path="/new" exact render={() => <NuevoAutor />} />
        <Route path="/edit/:id" exact render={() => <UpdateAutor />} />
        <Route path="/error" exact render={() => <Error/>} />
        <Route path="*" render={() => <Error /> } />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;