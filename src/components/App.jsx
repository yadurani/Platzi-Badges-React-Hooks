import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
import BadgeEdit from '../pages/BadgeEdit'
import BadgeDetails from '../pages/BadgeDetailsContainer'
import Layout from './Layout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/badges" component={Badges} exact />
          <Route path="/badges/new" component={BadgeNew} exact />
          <Route path="/badges/:badgeId" component={BadgeDetails} exact />
          <Route path="/badges/:badgeId/edit" component={BadgeEdit} exact />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
