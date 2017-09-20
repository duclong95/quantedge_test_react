import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import TblData from '../components/TblData'

const tblData = shallow(<TblData />);
test('Render TblData',()=>{
    expect(toJson(tblData)).toMatchSnapshot();
})
test('a timer test', function (done) {
    window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    setTimeout(function () {
        expect(tblData.state('change')).toEqual('changed');
        done();
    }, 5000);
});
