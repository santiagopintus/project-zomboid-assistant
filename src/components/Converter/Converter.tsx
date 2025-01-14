"use client";
import React, { useEffect, useState } from "react";

const Converter: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [totalObjects, setTotalObjects] = useState<number>(0);
  const imgHost = "https://pzwiki.net";

  const categories = [
    "Improvised",
    "Axes",
    "Long Blades",
    "Short Blades",
    "Long Blunts",
    "Short Blunts",
    "Spears",
  ];

  const [category, setCategory] = useState<string>(categories[0]); // Default to first category

  const handleConvert = () => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(input, "text/html");
      const table = doc.querySelector("table");
      if (!table) throw new Error("No table found");

      const attributeNames = [
        "Icon",
        "Name",
        "Encumbrance",
        "Equipped",
        "Minimum Damage",
        "Maximum Damage",
        "Door Damage",
        "Tree Damage",
        "Minimum Range",
        "Maximum Range",
        "Attack Speed",
        "Critical Hit Chance",
        "Critical Multiplier",
        "Knockback",
        "Max Condition",
        "Condition Lower Chance",
        "Average Condition",
        "Item ID",
      ];

      const rows = Array.from(table.querySelectorAll("tbody tr"));

      const jsonArray = rows.map((row) => {
        const cells = Array.from(row.querySelectorAll("td"));
        const obj: { [key: string]: string } = {};

        obj["Category"] = category;

        cells.forEach((cell, i) => {
          const img = cell.querySelector("img");
          if (img) {
            obj[attributeNames[i]] = img.src.replace(
              /^https?:\/\/[^\/]+/,
              imgHost
            );
          } else {
            obj[attributeNames[i]] = cell.textContent?.trim() || "";
          }
        });
        return obj;
      });
      setTotalObjects(jsonArray.length);
      setOutput(JSON.stringify(jsonArray, null, 2));
    } catch (e) {
      setOutput(`Error: ${e}`);
    }
  };

  useEffect(() => {
    console.log(category);
    setOutput("");
  }, [category]);

  return (
    <>
      <label>Category: </label>
      <select
        name="category"
        id="category"
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((c, i) => (
          <option key={i} value={c}>
            {c}
          </option>
        ))}
      </select>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <div className="input-container">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter <table> HTML here"
            rows={10}
            cols={50}
          />

          <button onClick={handleConvert}>Convert</button>
        </div>
        <div className="output-container">
          <button
            onClick={() => {
              navigator.clipboard.writeText(output);
              alert("Output copied to clipboard!");
            }}
          >
            Copy Output
          </button>
          <span>{totalObjects} objects found!</span>
          <pre className="json-container">{output}</pre>
        </div>
      </div>
    </>
  );
};

export default Converter;
