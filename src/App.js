import {Route, Switch} from 'react-router-dom'

import Login from './components/LoginForm'
import Home from './components/Home'
import './App.css'
import NotFound from './components/NotFound'

const App = () => (
  <div className="app-con">
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
