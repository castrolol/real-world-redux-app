import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../shared/Layout'
import Home from './Home'
import NotFound from './NotFound'
import UsuariosPage from './usuario/UsuariosPage';

class App extends React.Component {

    render() {
        return (
            <BrowserRouter {...this.props}>
                <Layout>
                    <div className="app-content" >
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/users" component={UsuariosPage} />
                            <Route Component={NotFound} />
                        </Switch>
                    </div>
                </Layout>
            </BrowserRouter>
        )
    }

}

export default App;