import React from 'react';
import List from './List';

class ArrayHandle extends React.Component {
	
  render (){	  
    let num = [10, 20, 30, 40, 50]
    let result = num.map((value, index)=><List key={index} info={value} />);
    let result1 = num.filter((value, index)=>{
      return value > 20;
    });
	  
    return (
      <div>
        <h2>배열 다루기</h2>
        <hr />
        {result}
      </div>
    )
  }
}

export default ArrayHandle;
