import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Wrapper from '../components/Wrapper'

const wrapper = shallow(
    <Wrapper />
);
test('Render Wrapper', ()=>{
    expect(toJson(wrapper)).toMatchSnapshot();
})
test('Top losers tab', () => {
    const tabLose = wrapper.find('.lose');
    tabLose.simulate('active');
    expect(wrapper.state().sortType).toEqual('lose')
});  
test('Top gainner tab', () => {
    const tabLose = wrapper.find('.gain');
    tabLose.simulate('active');
    expect(wrapper.state().sortType).toEqual('gain')
});  