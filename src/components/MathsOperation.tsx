import { useState } from 'react';
import * as math from 'mathjs';
import DropdownMenu from './DropDownMenu';

const MathsOperation = (props) => {
  const [numbers, setNumbers] = useState([]);
  let result = {
    sum: null,
    median: null,
    mode: null,
    multiplication:null,
    stdDev:null,
    range: null,
    variance:null
  };

  const calculateOperations = () => {
    try{
    const parsedNumbers = numbers
      .map((num) => parseFloat(num));
      if(numbers.length==0){
        return
      }

    result={
      sum: math.sum(parsedNumbers),
      median: math.median(parsedNumbers),
      mode: math.mode(parsedNumbers),
      multiplication: math.prod(parsedNumbers),
      stdDev: math.std(parsedNumbers),
      variance: math.variance(parsedNumbers),
      range: math.max(parsedNumbers) - math.min(parsedNumbers),
    };
  }
  catch(err){
    result={
      sum: null,
      median: null,
      mode: null,
      multiplication:null,
      stdDev:null,
      range: null,
      variance:null
    };
  }
    return result
  };

  calculateOperations()

  return (
    <div style={containerStyle} className='overlay-div'>
      <div style={{textAlign:'left'}}>
        <p className='chart-title'>{props.chartname}</p>
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
           <DropdownMenu current='Label...' setPieData={setNumbers} setLabel={null} mainData={props.data} options={props.data[0]}/>
        </div>

      <div style={resultsContainerStyle}>
        <p className='chart-title' style={{fontSize:18,marginBottom:10}}>Results:</p>
        <div id="maths-result-holder" style={{textAlign:'left',paddingLeft:14}}>
        <p>Sum : {result.sum != null? result.sum : 'Could not be Calculated'} </p>
        <p>Multiplication: {result.multiplication !=null? result.multiplication : 'Could not be Calculated'}</p>
        <p>Median : {result.median !=null ? result.median : 'Could not be Calculated'}</p>
        <p>Mode : {result.mode !=null ? result.mode : 'Could not be Calculated'}</p>
        <p>Range : {result.range !=null? result.range : 'Could not be Calculated'}</p>
        <p>Standard Deviation : {result.stdDev !=null? result.stdDev : 'Could not be Calculated'}</p>
        <p>Variance : {result.variance !=null? result.variance : 'Could not be Calculated'}</p>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  padding: '20px',
};


const resultsContainerStyle = {
  marginTop: '20px',
};

export default MathsOperation;