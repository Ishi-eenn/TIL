"use client";
import * as React from "react";
import { CalculatorDisplay } from "@/components/molecules/CalculatorDisplay";
import { CalculatorKeypad } from "@/components/molecules/CalculatorKeypad";
import { calcReducer } from "@/reducers/calcReducer";
import { initialState, ButtonConfig } from "@/types/calculator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Calculator: React.FC = () => {
  const [state, dispatch] = React.useReducer(calcReducer, initialState);

  const buttons: ButtonConfig[] = [
    {
      label: "Clear",
      type: "CLEAR",
      variant: "destructive",
      className: "col-span-4",
    },
    { label: "7", type: "INPUT" },
    { label: "8", type: "INPUT" },
    { label: "9", type: "INPUT" },
    { label: "/", type: "SET_OP" },
    { label: "4", type: "INPUT" },
    { label: "5", type: "INPUT" },
    { label: "6", type: "INPUT" },
    { label: "*", type: "SET_OP" },
    { label: "1", type: "INPUT" },
    { label: "2", type: "INPUT" },
    { label: "3", type: "INPUT" },
    { label: "-", type: "SET_OP" },
    { label: "0", type: "INPUT" },
    { label: ".", type: "DECIMAL" },
    { label: "=", type: "EQUAL", className: "col-span-4" },
    { label: "+", type: "SET_OP" },
  ];

  const handleClick = (btn: ButtonConfig): void => {
    dispatch({
      type: btn.type,
      payload: btn.payload !== undefined ? btn.payload : btn.label,
    });
  };

  return (
    <div className="mx-auto max-w-sm space-y-4 p-4">
      <Select defaultValue="standard">
        <SelectTrigger>
          <SelectValue placeholder="Standard" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="standard">Standard</SelectItem>
        </SelectContent>
      </Select>
      <CalculatorDisplay value={state.display} />
      <CalculatorKeypad buttons={buttons} onButtonClick={handleClick} />
    </div>
  );
};
