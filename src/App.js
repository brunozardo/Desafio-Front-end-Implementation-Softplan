import './App.css'
import { Home } from './components/Home/Home'
import { NewProcess } from './components/NewProcess/NewProcess'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { SearchPage } from './components/SearchPage/SearchPage'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/novo-processo' exact component={NewProcess} />
        <Route path='/novo-processo/:id' exact component={NewProcess} />
        <Route path='/busca' exact component={SearchPage} />
        <Route path='/busca/:term' exact component={SearchPage} />
        <Route path='/busca/:term/detalhes/:id' exact component={SearchPage} />
        <Route path='/busca//detalhes/:id' exact component={SearchPage} />
        <Route path='*' exact>404</Route>
      </Switch>
    </Router>
  )
}

export default App
