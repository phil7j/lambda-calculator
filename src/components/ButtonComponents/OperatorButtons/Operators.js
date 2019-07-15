import React, {useState} from "react";
import {operators} from '../../../data'
import OperatorButton from './OperatorButton'
const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsData, setOperators] = useState(operators)
  return (
    <div className="operators">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operatorsData.map( operator => <OperatorButton operator={operator}/> )}
    </div>
  );
};

export default Operators
