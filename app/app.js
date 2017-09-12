import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Wrapper from './components/Wrapper'

ReactDOM.render(
    <MuiThemeProvider>
        <Wrapper/>
    </MuiThemeProvider>,
    document.getElementById('root')
);