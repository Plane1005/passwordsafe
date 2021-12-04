import React from 'react'
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import Home from '@/page/Home'
import Result from '@/page/Result'
import Create from '@/page/Create'

const App: React.FC = (props: any) => {
  return (
    <div className="app-root">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/create" component={Create} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
