import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './views/home'
import CadastroProduto from './views/produtos/cadastro'

export default () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/cadastro-produto" component={CadastroProduto} />
                <Route exact path="/" component={Home} />
            </Switch>
        </HashRouter>
    )
}
