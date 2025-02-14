import React from "react";

interface CalculatorDisplayProps {
  value: string;
}

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ value }) => {
  return (
    <div className="min-h-[100px] rounded-lg bg-muted/50 p-4 flex items-end justify-end">
      <span className="text-4xl font-medium">{value}</span>
    </div>
  );
};

export { CalculatorDisplay };
