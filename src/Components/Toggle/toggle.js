import React from 'react';
import Cell from '../Grid/grid';


class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <Cell onclick ={this.handleClick} >
        
            
          {this.state.isToggleOn ? <div style={{'background':'black'}} >'Alive'</div> : <div style={{'background':'white'}}>'Dead'</div>}
        </Cell>
      );
    }
  }

  export default Toggle;