import React from 'react';
import { Table, Icon } from 'semantic-ui-react';


export default (props) => {
    const { nome, idade, email, telefone, sexo } = props.model || {};

    var sexoCor = "blue";
    var sexoIcon = "man";

    if (sexo == "f") {
        sexoCor = "pink";
        sexoIcon = "woman";
    }

    return (
        <Table.Row>
            <Table.Cell>{nome}</Table.Cell>
            <Table.Cell>{email}</Table.Cell>
            <Table.Cell>{telefone}</Table.Cell>
            <Table.Cell>{`${idade} anos`}</Table.Cell>
            <Table.Cell textAlign="center" ><Icon color={sexoCor} name={sexoIcon} /></Table.Cell>
        </Table.Row>
    );
};