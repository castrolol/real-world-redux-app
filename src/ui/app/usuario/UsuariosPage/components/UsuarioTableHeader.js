import React from 'react';
import {Table} from 'semantic-ui-react';


export default (props) => {

    return (
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Nome</Table.HeaderCell>
                <Table.HeaderCell>Idade</Table.HeaderCell>
                <Table.HeaderCell>Sexo</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    );
};