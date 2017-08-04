import React from 'react';
import { Table, Segment, Dimmer, Loader } from 'semantic-ui-react';
import UsuarioTableHeader from './components/UsuarioTableHeader';
import UsuarioTableRow from './components/UsuarioTableRow';
import PageChooser from '../../../shared/PageChooser';


class UsuariosPage extends React.Component {

    componentWillMount() {
        this.props.init();
    }


    render() {

        const { usuarios, page, pageCount, loading } = this.props;

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
                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='5'>
                                <PageChooser right onSelected={page => this.props.changePage(page)} pageCount={pageCount} current={page} />
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
                <Dimmer active={loading}>
                    <Loader>Buscando usuários</Loader>
                </Dimmer>
            </div>

        );

    }

}

export default UsuariosPage;