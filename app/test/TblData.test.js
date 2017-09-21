import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import TblData from '../components/TblData'
import Wrapper from '../components/Wrapper'

const tblData = shallow(<TblData />);
const wrapper = shallow(<Wrapper/>)
test('Render TblData', () => {
    expect(toJson(tblData)).toMatchSnapshot();
})
test('update data after 5 seconds', (done) => {
    window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    setTimeout(() => {
        expect(tblData.state('change')).toEqual('changed');
        done();
    }, 5000);
});
