export interface CalculatorState {
  display: string;
  previousValue: string;
  operation: string;
  newNumber: boolean;
}

export const initialState: CalculatorState = {
  display: "0",
  previousValue: "",
  operation: "",
  newNumber: true,
};

export type CalculatorAction =
  | { type: "INPUT"; payload: string }
  | { type: "DECIMAL" }
  | { type: "SET_OP"; payload: string }
  | { type: "EQUAL" }
  | { type: "CLEAR" };

export interface ButtonConfig {
  label: string;
  type: "INPUT" | "DECIMAL" | "SET_OP" | "EQUAL" | "CLEAR";
  payload?: string;
  variant?: string;
  className?: string;
}
