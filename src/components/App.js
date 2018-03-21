import React from 'react';
import Square from './Square'
import './styles/App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      board : ['','','','','','','','',''],
      value: 'X',
      isWinner: false,
      winner: ''
    }
  }
  squareClickHandler = (loc) =>{
    const transitionBoard = this.state.board;
    transitionBoard.splice(loc, 1, this.state.value) 
    this.setState({board: transitionBoard, value: this.state.value === 'X' ? 'O' : 'X'})

  }

  render() {
    return (
      <div>
          {/* <Square  loc={0} squareClickHanlder={this.squareClickHandler} value={this.state.value}/> */}
        
        <div className='board'>
          {this.state.board.map((square, i) => {return <Square key={i} loc={i} squareClickHandler={this.squareClickHandler} value={this.state.value}/>})}
        </div>
      </div>
    );
  }
}

export default App;
