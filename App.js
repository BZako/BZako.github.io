import React from 'react';
import home from './pages/Home';
import contact from './pages/Contact';
import knowledges from './pages/Knowledges';
import notfound from './pages/Notfound';
import portfolio from './pages/Portfolio';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={home}/>
    <Route path="/contact" component={contact}/>
    <Route path="/competences" component={knowledges}/>
    <Route path="/portfolio" component={portfolio}/>
    <Route component={notfound}/>
    </Switch>
    </BrowserRouter>
    </>
  );
};

export default App;