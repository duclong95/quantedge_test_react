import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableRowColumn,
    TableRow,
} from 'material-ui/Table';
import data from '../data/data'

var NumberFormat = require('react-number-format');

class TblData extends Component {
    constructor(props,origin) {
        super(props);
        this.state = {
            dataState: data,
            change: 'notchange'
        }
        this.update = this.update.bind(this);
    }
    update() {
        var items = this.state.dataState;
        items.map(item => {
            var limit = item.price * (5 / 100);
            var updateChange = (Math.random() * (limit + limit) - limit).toFixed(2);
            var updateVolume = Math.random() * (30 - 10) + 10;
            item.price = (parseFloat(item.price) + parseFloat(updateChange)).toFixed(2);
            item.change = (parseFloat(item.change)+parseFloat(updateChange)).toFixed(2);
            var percentChange = ((item.change / (item.price - item.change)) * 100).toFixed(2);
            item.percentChange = percentChange;
            item.volume = item.volume + parseInt(updateVolume, 10);
        })
        this.setState({
            dataState: items,
            change: 'changed'
        })
    }
    componentWillMount() {
        setInterval(this.update, 5000);

    }
    render() {
        var listData = this.state.dataState.sort((a, b) => {
            if (this.props.sortType === "lose") {
                return (a.price * a.volume) - (b.price * b.volume);
            }
            if (this.props.sortType === "gain") {
                return (b.price * b.volume) - (a.price * a.volume);
            }
        }).map((item, index) => {
            var className = 'increase'
            if (item.change < 0) {
                className = 'decrease';
            }
            var value = (item.price * item.volume).toFixed(0);
            return (
                <TableRow key={index}>
                    <TableRowColumn className='code'>{item.code}</TableRowColumn>
                    <TableRowColumn className='company'>{item.company}</TableRowColumn>
                    <TableRowColumn className='price'>{item.price}</TableRowColumn>
                    <TableRowColumn className='value'><NumberFormat value={value} displayType={'text'} thousandSeparator={true} /></TableRowColumn>
                    <TableRowColumn className={className} style={{ width: '14%' }}>{item.change}</TableRowColumn>
                    <TableRowColumn className={className} style={{ width: '14%' }}>{item.percentChange}%</TableRowColumn>
                </TableRow>
            )
        }).filter((row) => {
            return (row.key < 20)
        })
        return (
            <Table>
                <TableBody displayRowCheckbox={false}>
                    {listData}
                </TableBody>
            </Table>
        )
    }
}
export default TblData;    
