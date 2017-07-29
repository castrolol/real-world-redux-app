import React from 'react';
import { Table, Dimmer, Loader } from 'semantic-ui-react';
import UsuarioTableHeader from './components/UsuarioTableHeader'
import UsuarioTableRow from './components/UsuarioTableRow'


class UsuariosPage extends React.Component {

    componentWillMount() {
        this.props.init();
    }


    render() {

        const { usuarios, loading } = this.props;

        return (
            <div>
                <h1>Usuarios</h1>
                <Table celled fixed singleLine>
                    <UsuarioTableHeader />

                    <Table.Body>
                        {usuarios.map(usuario =>
                            <UsuarioTableRow key={usuario.id} model={usuario} />
                        )}
                    </Table.Body>
                </Table>
                <Dimmer active={loading}>
                    <Loader>Buscando usuários</Loader>
                </Dimmer>
            </div>

        );

    }

}

export default UsuariosPage;