import { operationAction } from "../DigitButton";
export interface State {
  previousOperand: string | "";
  currentOperand: string | "";
  operation?: string | "";
  overwrite?: boolean;
}
export const initialState: State = {
  previousOperand: "",
  currentOperand: "",
  operation: "",
  overwrite: false,
};
const DigitReducer = (state: State, action: operationAction): State => {
  switch (action.type) {
    case "ADD_DIGIT":
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: action.payload,
          overwrite: false,
        };
      }
      if (action.payload === "0" && state.previousOperand === "0") return state;
      if (action.payload === "." && state.currentOperand?.includes("."))
        return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${action.payload}`,
      };
    case "CLEAR":
      return {
        previousOperand: "",
        currentOperand: "",
        operation: "",
      };
    case "SELECT_OPERATION":
      if (state.previousOperand === "" && state.currentOperand === "")
        return state;
      if (state.currentOperand === "") {
        return {
          ...state,
          operation: action.payload,
        };
      }
      if (state.previousOperand === "") {
        return {
          ...state,
          operation: action.payload,
          previousOperand: state.currentOperand,
          currentOperand: "",
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: action.payload,
        currentOperand: "",
      };
    case "CALCULATE":
      if (
        state.operation === "" ||
        state.previousOperand === "" ||
        state.currentOperand === ""
      )
        return state;
      return {
        ...state,
        overwrite: true,
        previousOperand: "",
        currentOperand: evaluate(state),
        operation: "",
      };
    case "DELETE_DIGIT":
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: "",
          overwrite: false,
        };
      }
      if (state.currentOperand === "") return state;
      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: "",
        };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
      break;
    default:
      return state;
  }
};
function evaluate(state: State) {
  const previousOperand = parseFloat(state.previousOperand);
  const currentOperand = parseFloat(state.currentOperand);
  if (isNaN(previousOperand) || isNaN(currentOperand)) return "";
  let result: number = 0;
  switch (state.operation) {
    case "+":
      result = previousOperand + currentOperand;
      break;
    case "-":
      result = previousOperand - currentOperand;
      break;
    case "x":
      result = previousOperand * currentOperand;
      break;
    case "÷":
      result = previousOperand / currentOperand;
      break;
    default:
      result = 0;
      break;
  }
  return result.toString();
}
export default DigitReducer;
