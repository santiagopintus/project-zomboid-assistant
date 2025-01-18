"use client";
import React, { useEffect, useState } from "react";
import tableColumns from "./tableColumns.json";

interface TableColumns {
  weapons: string[];
  crafting: string[];
  [key: string]: string[];
}

const Converter: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [totalObjects, setTotalObjects] = useState<number>(0);
  const imgHost = "https://pzwiki.net";
  const availableColumns = tableColumns as TableColumns;

  const weaponCategories = [
    "Improvised",
    "Axes",
    "Long Blades",
    "Short Blades",
    "Long Blunts",
    "Short Blunts",
  ];

  const craftingCategories = [
    "Ammunition",
    "Assembly",
    "Carpentry",
    "Carving",
    "Cooking",
    "Electrical",
    "Farming",
    "Fishing",
    "General",
    "Glassmaking",
    "Health",
    "Knapping",
    "Medical",
    "Metalworking",
    "Miscellaneous",
    "Packing",
    "Pottery",
    "Repair",
    "Survival",
    "Trapper",
    "Weaponry",
  ];
  const subCategories = [
    "Construction",
    "Furniture",
    "Miscellaneous",
    "Weapons",
  ];

  const tableTypes = ["weapons", "crafting"];
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [selectedTableType, setSelectedTableType] = useState<string>(
    tableTypes[0]
  );

  const [itemCategory, setItemCategory] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");
  const [attributeNames, setAttributeNames] = useState<string[]>([]);

  useEffect(() => {
    setAttributeNames(availableColumns[selectedTableType]);
    if (selectedTableType === "weapons") {
      setAvailableCategories(weaponCategories);
    } else {
      setAvailableCategories(craftingCategories);
    }
  }, [selectedTableType]);

  const handleConvert = () => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(input, "text/html");
      const table = doc.querySelector("table");
      if (!table) throw new Error("No table found");

      const rows = Array.from(table.querySelectorAll("tbody tr"));

      const jsonArray = rows.map((row) => {
        const cells = Array.from(row.querySelectorAll("td"));
        const obj: { [key: string]: string } = {};

        obj["Category"] = itemCategory;
        obj["subCategory"] = subCategory;

        cells.forEach((cell, i) => {
          console.log(cell);
          const images = cell.querySelectorAll("img");
          images.forEach((img) => {
            img.src = img.src.replace(/^https?:\/\/[^\/]+/, imgHost);
          });
          const anchors = cell.querySelectorAll("a");
          anchors.forEach((anchor) => {
            anchor.href = anchor.href.replace(/^https?:\/\/[^\/]+/, imgHost);
          });

          obj[attributeNames[i]] = cell.innerHTML.trim();
        });
        return obj;
      });
      setTotalObjects(jsonArray.length);
      setOutput(JSON.stringify(jsonArray, null, 2));
    } catch (e) {
      setOutput(`Error: ${e}`);
    }
  };

  return (
    <>
      <label>Table Type: </label>
      <select
        name="tableType"
        id="tableType"
        onChange={(e) => setSelectedTableType(e.target.value)}
      >
        {tableTypes.map((c, i) => (
          <option attrName={i} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Category */}
      {!!selectedTableType && (
        <>
          <label>Category: </label>
          <select
            name="category"
            id="category"
            onChange={(e) => setItemCategory(e.target.value)}
          >
            {availableCategories.map((c, i) => (
              <option attrName={i} value={c}>
                {c}
              </option>
            ))}
          </select>
        </>
      )}

      {/* Subcategory */}
      <label>Sub Category: </label>
      <select
        name="subCategory"
        id="subCategory"
        onChange={(e) => setSubCategory(e.target.value)}
      >
        {subCategories.map((c, i) => (
          <option attrName={i} value={c}>
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
