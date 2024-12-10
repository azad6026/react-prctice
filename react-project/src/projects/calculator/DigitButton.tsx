export interface operationAction {
  type:
    | "ADD_DIGIT"
    | "SELECT_OPERATION"
    | "CALCULATE"
    | "CLEAR"
    | "DELETE_DIGIT";
  payload: string | "";
}
interface Props {
  dispatch: React.Dispatch<operationAction>;
  digit: string;
  actionType: operationAction["type"];
  payload?: operationAction["payload"];
  className?: string;
}

const DigitButton = ({
  dispatch,
  digit,
  actionType,
  className,
  payload,
}: Props) => {
  return (
    <button
      className={`one-cell ${className ? className : ""}`}
      onClick={() => dispatch({ type: actionType, payload: payload || digit })}
    >
      {digit}
    </button>
  );
};

export default DigitButton;
