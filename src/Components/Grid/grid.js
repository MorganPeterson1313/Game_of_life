import React from 'react';
import ReactDOM from 'react-dom';
import { FixedSizeGrid as Grid } from 'react-window';
import Toggle from '../Toggle/toggle';

import './styles.css';

const Cell = ({ columnIndex, rowIndex, style, props }) => (
  <div
    className={
      columnIndex % 2
        ? rowIndex % 2 === 0
          ? 'GridItemOdd'
          : 'GridItemEven'
        : rowIndex % 2
          ? 'GridItemOdd'
          : 'GridItemEven'
    }
    style={style}
  >
    
      <button  onclick = {e => props.onclick(e)}> 
      
    r{rowIndex}, c{columnIndex}
  
    </button>
    
  </div>
);

const GridEx = (props) => (
    <div style = {{"display": "flex", "justifyContent":"center", "alignItems":"center"}}>
  <Grid
    
    className="Grid"
    columnCount={25}
    columnWidth={40}
    height={900}
    rowCount={25}
    rowHeight={35}
    width={1025}
    
  >
     
          {Cell} 
     
    

  </Grid>
  </div>
  
);


export default GridEx