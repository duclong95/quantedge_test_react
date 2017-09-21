import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Wrapper from './components/Wrapper'
import './css/style.css'

ReactDOM.render(
    <MuiThemeProvider>
        <Wrapper/>
    </MuiThemeProvider>,
    document.getElementById('root')
);