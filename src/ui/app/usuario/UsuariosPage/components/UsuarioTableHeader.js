import React from 'react';
import {Table} from 'semantic-ui-react';


export default (props) => {

    return (
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Nome</Table.HeaderCell>
                <Table.HeaderCell width="5">Email</Table.HeaderCell>
                <Table.HeaderCell width="3">Telefone</Table.HeaderCell>
                <Table.HeaderCell width="2">Idade</Table.HeaderCell>
                <Table.HeaderCell width="1">Sexo</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    );
};