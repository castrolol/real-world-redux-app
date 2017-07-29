import React from 'react';
import Layout from '../shared/Layout'
import UsuariosPage from './usuario/UsuariosPage';

class App extends React.Component {


    render() {

        return (
            <Layout>
                {/* {this.props.children} */}
                <div className="app-content" >
                    <UsuariosPage />
                </div>
            </Layout>
        )

    }

}


export default App;