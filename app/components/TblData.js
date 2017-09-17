import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableRowColumn,
    TableRow,
} from 'material-ui/Table';
import data from '../data/data'
import '../css/style.css'
var NumberFormat = require('react-number-format');

class TblData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataState: data,
            sort: 'decrease'
        }
    }
    update() {
        var items = this.state.dataState;

        items.map(item => {
            var limit = item.price * (5 / 100);
            let change = (Math.random() * (limit + limit) - limit).toFixed(2);
            var percentChange = ((change / item.price) * 100).toFixed(2);
            var updateVolume = Math.random() * (30 - 10) + 10;
            item.change = change;
            item.percentChange = percentChange;
            item.price = (parseFloat(item.price) + parseFloat(change)).toFixed(2);
            item.volume = item.volume + parseInt(updateVolume, 10);
        })
        this.setState({
            dataState: items,
        })
    }

    componentWillMount() {
       setInterval(this.update.bind(this),5000);  
    }
    
    render() {
        var list = this.state.dataState.sort((a, b) => {
            if (this.state.sort === "increase") {
                return (a.price * a.volume) - (b.price * b.volume);
            }
            if (this.state.sort === "decrease") {
                return (b.price * b.volume) - (a.price * a.volume);
            }
        }).map(item => {
            var className = 'increase'
            if (item.change < 0) {
                className = 'decrease';
            }
            var value = (item.price * item.volume).toFixed(0);
            return (
                <TableRow key={item.id}>
                    <TableRowColumn style={{ width: '10%', color: '#119fe1' }}>{item.code}</TableRowColumn>
                    <TableRowColumn style={{ width: '29%', color:'#9e9e9e' }}>{item.company}</TableRowColumn>
                    <TableRowColumn style={{ width: '19%' }}>{item.price}</TableRowColumn>
                    <TableRowColumn style={{ width: '14%' }}><NumberFormat value={value} displayType={'text'} thousandSeparator={true} /></TableRowColumn>
                    <TableRowColumn className={className} style={{ width: '14%' }}>{item.change}</TableRowColumn>
                    <TableRowColumn className={className} style={{ width: '14%' }}>{item.percentChange}%</TableRowColumn>
                </TableRow>
            )
        })

        return (
            <Table>
                <TableBody displayRowCheckbox={false}>
                    {list}
                </TableBody>
            </Table>
        )
    }
}
export default TblData;    
