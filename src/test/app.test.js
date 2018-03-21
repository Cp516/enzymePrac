import React from 'react'
import { shallow } from 'enzyme'
import testSetup from './../testSetup'
import App from './../components/App'

describe('App', ()=>{
    const app = shallow(<App />);
    const boardArr = ['','','','','','','','','',];
    const boardArr1 = ['X','','','','','','','','',];

    it('should render properly', ()=>{
        expect(app).toMatchSnapshot()
    });
    
    it('App `state` should contain `board`', ()=>{
        expect(app.state().board).toEqual(boardArr)
    });

    // How specific should tests be should they separated or together like this
    // When do we start a new describe 

    it('App `state` should contain `isWinner, winner` keys', ()=>{
        expect(app.state().isWinner).toEqual(false);
    });

    it('App `state` should contain `winner` keys', ()=>{
        expect(app.state().winner).toEqual('');
    });

    it('App `state` should contain `value` keys', ()=>{
        expect(app.state().value).toEqual('X');
    });

    it('App should contain a `div` with a className board', ()=>{
        expect(app.find('.board').exists()).toEqual(true)
    });

    it('App should contain a component called Square', ()=>{
        expect(app.find('Square').exists()).toEqual(true)
    });

    it('App should contain a `div` with a className board with length of 9', ()=>{
        expect(app.find('.board').children().length).toEqual(9)
    });
    //What exactly do backticks signify and when should they used
    describe('`squareClickHandler` should update `board`',()=>{
        beforeEach(()=>{
            app.instance().squareClickHandler('X')
        });

        afterEach(()=>{
            app.setState({board: boardArr, value:'X'})
        });

        it('squareClickHandler Fn call should update `board` in `state`', ()=>{
            expect(app.state().board).toEqual(boardArr1)
        });
        
        it('squareClickHandler should initially update `value` from "X" to "O"',()=>{
            expect(app.state().value).toEqual('O')
        });
    });
    
});

// 2.) When do we start a new describe, what exactly do they signify

// 3.) What exactly do back ticks signify and when should they used