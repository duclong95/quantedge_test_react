import React, { Component } from 'react';
import TblHeader from './TblHeader';
import TblData from './TblData';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
const styles = {
    tab: {
        fontSize: 18,
        padding: 8,
        marginLeft: 10,
        marginRight: 10,
        fontWeight: 400,
    },
};
class Wrapper extends Component {

    check(i) {
        this.refs.dt.setState({ sort: i })

    }

    render() {
        return (
            <div>
                <AppBar
                    title="A&P/ASX"
                    showMenuIconButton={false}>
                    <Tabs>
                        <Tab style={styles.tab} onActive={this.check.bind(this, 'decrease')} label="TOP GAINERS" >
                        </Tab>
                        <Tab style={styles.tab} onActive={this.check.bind(this, 'increase')} label="TOP LOSERS" >
                        </Tab>
                    </Tabs>
                </AppBar>
                <TblHeader />
                <TblData ref='dt' />
            </div>
        )
    }
}
module.exports = Wrapper;