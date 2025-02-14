import {
  CalculatorState,
  CalculatorAction,
  initialState,
} from "../types/calculator";

export function calcReducer(
  state: CalculatorState,
  action: CalculatorAction
): CalculatorState {
  switch (action.type) {
    case "INPUT": {
      let newDisplay = state.newNumber
        ? action.payload
        : state.display + action.payload;
      if (!newDisplay.includes(".")) {
        newDisplay = newDisplay.replace(/^0+/, "");
        if (newDisplay === "") {
          newDisplay = "0";
        }
      }
      return {
        ...state,
        display: newDisplay,
        newNumber: false,
      };
    }
    case "DECIMAL":
      return state.display.includes(".")
        ? state
        : { ...state, display: state.display + ".", newNumber: false };
    case "SET_OP":
      return {
        ...state,
        operation: action.payload,
        previousValue: state.display,
        display: action.payload,
        newNumber: true,
      };
    case "EQUAL": {
      const { previousValue, operation, display } = state;
      if (!previousValue || !operation) return state;
      const a = parseFloat(previousValue);
      const b = parseFloat(display);
      const result = { "+": a + b, "-": a - b, "*": a * b, "/": a / b }[
        operation
      ];
      return {
        display: result.toString(),
        previousValue: "",
        operation: "",
        newNumber: true,
      };
    }
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
}
