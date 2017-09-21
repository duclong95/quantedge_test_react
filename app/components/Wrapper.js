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

    constructor(props){
        super(props);
        this.state = {
            sortType: 'gain'
        }
    }

    sort(type) {
        this.setState({
            sortType: type
        })
    }

    render() {
        return (
            <div>
                <AppBar
                    title="A&P/ASX"
                    showMenuIconButton={false}>
                    <Tabs>
                        <Tab className="gain" style={styles.tab} onActive={this.sort.bind(this, 'gain')} label="TOP GAINERS" >
                        </Tab>
                        <Tab className="lose" style={styles.tab} onActive={this.sort.bind(this, 'lose')} label="TOP LOSERS" >
                        </Tab>
                    </Tabs>
                </AppBar>
                <TblHeader />
                <TblData className="data" sortType={this.state.sortType} />
            </div>
        )
    }
}
module.exports = Wrapper;