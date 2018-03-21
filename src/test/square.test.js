import React from 'react';
import {shallow} from 'enzyme';
import ReactDOM from 'react-dom';

import Square from './../components/Square'
import App from './../components/App'
import testSetup from './../testSetup'
import file from './../tempPolyfills'

describe('Square', ()=>{
    const mockClickHandler = jest.fn()
    const props = {loc: 1, value: 'X', squareClickHandler: mockClickHandler}
    const square = shallow(<Square {...props}/>)
    

    it('`square` component renders properly', ()=>{
        expect(square).toMatchSnapshot()
        console.log(square.instance())
    });

    describe('`square` component recieves `squareClickHandler` Fn from `App`', ()=>{
        beforeEach(()=>{
            square.find('div').simulate('click');
        })
        
        it('initial click should be with value 0', ()=>{
            expect(mockClickHandler).toHaveBeenCalledWith(0)
        })
    });


});