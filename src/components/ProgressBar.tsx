import React from "react";

const ProgressBar = ({ max, value }: { max: number; value: number }) => {
  const percentage = (value / max) * 100;

  return (
    <div style={{ marginBottom: "10px" }}>
      <div
        style={{
          background: "#ccc",
          borderRadius: "5px",
          overflow: "hidden",
          height: "20px",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            background: "green",
            height: "100%",
            transition: "width 0.3s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
