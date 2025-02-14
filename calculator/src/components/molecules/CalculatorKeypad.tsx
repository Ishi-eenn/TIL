import React from "react";
import { Button } from "@/components/ui/button";
import { ButtonConfig } from "@/types/calculator";

interface CalculatorKeypadProps {
  buttons: ButtonConfig[];
  onButtonClick: (btn: ButtonConfig) => void;
}

export const CalculatorKeypad: React.FC<CalculatorKeypadProps> = ({
  buttons,
  onButtonClick,
}) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {buttons.map((btn, index) => (
        <Button
          key={index}
          variant={btn.variant || "default"}
          className={btn.className || "col-span-1"}
          onClick={() => onButtonClick(btn)}
        >
          {btn.label}
        </Button>
      ))}
    </div>
  );
};
