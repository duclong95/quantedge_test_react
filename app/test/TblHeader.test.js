import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import TblHeader from '../components/TblHeader'

test('Render Header',()=>{
    const header = shallow(<TblHeader/>);
    expect(toJson(header)).toMatchSnapshot();
})