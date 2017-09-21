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
                <TableHeaderColumn className='code'>Code</TableHeaderColumn>
                <TableHeaderColumn className='company'>Company</TableHeaderColumn>
                <TableHeaderColumn className='price'>Price</TableHeaderColumn>
                <TableHeaderColumn className='value'>Value</TableHeaderColumn>
                <TableHeaderColumn className='value'>Change</TableHeaderColumn>
                <TableHeaderColumn className='value'>%Change</TableHeaderColumn>
            </TableRow>
        </TableHeader>
    </Table>
)

module.exports = TblHeader;