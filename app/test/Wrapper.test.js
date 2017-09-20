import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Wrapper from '../components/Wrapper'
import { changeSort } from '../components/TblData'

const wrapper = shallow(
    <Wrapper />
);
test('Render Wrapper', ()=>{
    expect(toJson(wrapper)).toMatchSnapshot();
})
test('Top lose tab', () => {
   
    const tabLose = wrapper.find('.lose');
    tabLose.simulate('active');
    expect(wrapper.state().sort).toEqual('increase')
});  
