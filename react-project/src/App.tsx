import { useReducer } from "react";
import "./App.css";
import DigitButton from "./components/DigitButton";
import DigitReducer from "./servicces/digitReducer";
import { State } from "./servicces/digitReducer";
import { formatOperand } from "./servicces/utilitis";
const initialState: State = {
  previousOperand: "",
  currentOperand: "",
  operation: "",
  overwrite: false,
};
function App() {
  const [{ previousOperand, currentOperand, operation }, dispatch] = useReducer(
    DigitReducer,
    initialState
  );
  return (
    <>
      <div className="calculator-skin">
        <header className="result">
          <span className="previous-oprand">
            {formatOperand(previousOperand)} {operation}
          </span>
          <span className="current-oprand">
            {formatOperand(currentOperand)}
          </span>
        </header>
        <DigitButton
          className="two-cell"
          dispatch={dispatch}
          digit="AC"
          actionType="CLEAR"
        />
        <DigitButton
          dispatch={dispatch}
          digit="DEL"
          actionType="DELETE_DIGIT"
        />
        <DigitButton
          dispatch={dispatch}
          digit="÷"
          actionType="SELECT_OPERATION"
        />
        <DigitButton dispatch={dispatch} digit="7" actionType="ADD_DIGIT" />
        <DigitButton dispatch={dispatch} digit="8" actionType="ADD_DIGIT" />
        <DigitButton dispatch={dispatch} digit="9" actionType="ADD_DIGIT" />
        <DigitButton
          dispatch={dispatch}
          digit="x"
          actionType="SELECT_OPERATION"
        />
        <DigitButton dispatch={dispatch} digit="4" actionType="ADD_DIGIT" />
        <DigitButton dispatch={dispatch} digit="5" actionType="ADD_DIGIT" />
        <DigitButton dispatch={dispatch} digit="6" actionType="ADD_DIGIT" />
        <DigitButton
          dispatch={dispatch}
          digit="-"
          actionType="SELECT_OPERATION"
        />
        <DigitButton dispatch={dispatch} digit="1" actionType="ADD_DIGIT" />
        <DigitButton dispatch={dispatch} digit="2" actionType="ADD_DIGIT" />
        <DigitButton dispatch={dispatch} digit="3" actionType="ADD_DIGIT" />
        <DigitButton
          dispatch={dispatch}
          digit="+"
          actionType="SELECT_OPERATION"
        />
        <DigitButton dispatch={dispatch} digit="0" actionType="ADD_DIGIT" />
        <DigitButton dispatch={dispatch} digit="." actionType="ADD_DIGIT" />
        <DigitButton
          className="two-cell"
          dispatch={dispatch}
          digit="="
          actionType="CALCULATE"
        />
      </div>
    </>
  );
}

export default App;
