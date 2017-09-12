import React, { Component } from 'react';
import {
    Table,
    TableHeader,
    TableRow,
    TableHeaderColumn
} from 'material-ui/Table';

const TblHeader = () => (
    <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
                <TableHeaderColumn style={{ width: '10%' }}>Code</TableHeaderColumn>
                <TableHeaderColumn style={{ width: '29%' }}>Company</TableHeaderColumn>
                <TableHeaderColumn style={{ width: '19%' }}>Price</TableHeaderColumn>
                <TableHeaderColumn style={{ width: '14%' }}>Value</TableHeaderColumn>
                <TableHeaderColumn style={{ width: '14%' }}>Change</TableHeaderColumn>
                <TableHeaderColumn style={{ width: '14%' }}>%Change</TableHeaderColumn>
            </TableRow>
        </TableHeader>
    </Table>
)

module.exports = TblHeader;